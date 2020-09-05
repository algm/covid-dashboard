const path = require('path');
const fs = require('fs');
const originalFetch = require('node-fetch');
const fetch = require('fetch-retry')(originalFetch);
const dateFns = require('date-fns');
const today = dateFns.format(Date.now(), 'yyyy-MM-dd');
const pickBy = require('lodash.pickby');
const startsWith = require('lodash.startswith');

const firstDate = '2020-03-12';

exports.onPreInit = async () => {
  try {
    const writePath = `${path.resolve('data')}/data.json`;

    const filterTodayKeys = (val, key) => {
      return startsWith(key, 'today_') || key === 'source';
    };

    const { dates, apiData, total } = await fetchData(firstDate, today);

    const data = Object.values(apiData).map((dateData, index) => {
      const currentDate = dates[index];
      const spainData = dateData.countries.Spain;
      const andaluciaData = spainData.regions[0];
      const jaenData = andaluciaData.sub_regions[0];

      return {
        date: currentDate,
        timestamp: dateFns.getUnixTime(dateFns.parseISO(currentDate)),
        data: pickBy(jaenData, filterTodayKeys),
        andalucia: pickBy(andaluciaData, filterTodayKeys),
        spain: pickBy(spainData, filterTodayKeys),
        totalData: pickBy(total, filterTodayKeys),
      };
    });

    fs.writeFileSync(writePath, JSON.stringify({ data, lastUpdate: today }));
  } catch (err) {
    console.warn('Unable to fetch data from API');
    console.warn(err);
  }
};

async function fetchData(from, to = today) {
  const startDate = dateFns.parse(from, 'yyyy-MM-dd', new Date());
  const endDate = dateFns.parse(to, 'yyyy-MM-dd', new Date());

  const intervals = getIntervalsBetweenDates(startDate, endDate);

  let dates = [];
  let apiData = {};
  let total = null;

  for (let interval of intervals) {
    const URL = `https://api.covid19tracking.narrativa.com/api/country/spain/region/andalucia/sub_region/jaen?date_from=${interval.start}&date_to=${interval.end}`;

    console.log(`Fetching ${URL}`);

    try {
      const response = await fetch(URL, {
        retries: 3,
        timeout: 120000,
        retryDelay: 20000,
      });

      const cApiData = await response.json();
      //const apiData = JSON.parse(fs.readFileSync(path.resolve('data/raw.json')));

      dates = [...dates, ...Object.keys(cApiData.dates)];
      apiData = { ...apiData, ...cApiData.dates };
      total = cApiData.total;
    } catch (err) {
      console.warn('Unable to fetch data from API');
      console.warn(err);
    }
  }

  return { apiData, dates, total };
}

function getIntervalsBetweenDates(from, to) {
  let nextStart = from;
  let result = [];
  do {
    let nextEnd = dateFns.addWeeks(nextStart, 2);

    result = [
      ...result,
      {
        start: dateFns.format(nextStart, 'yyyy-MM-dd'),
        end: dateFns.format(nextEnd, 'yyyy-MM-dd'),
      },
    ];
    nextStart = dateFns.addDays(nextEnd, 1);
  } while (dateFns.compareDesc(nextStart, to) === 1);

  return result;
}
