const path = require('path');
const fs = require('fs');
const originalFetch = require('node-fetch');
const fetch = require('fetch-retry')(originalFetch);
const dateFns = require('date-fns');
const today = dateFns.format(Date.now(), 'yyyy-MM-dd');
const pickBy = require('lodash.pickby');
const startsWith = require('lodash.startswith');

exports.onPreInit = async () => {
  const URL = `https://api.covid19tracking.narrativa.com/api/country/spain/region/andalucia/sub_region/jaen?date_from=2020-04-01&date_to=${today}`;

  try {
    const response = await fetch(URL, {
      timeout: 120000,
      retries: 3,
      retryDelay: 20000,
    });

    const apiData = await response.json();
    //const apiData = JSON.parse(fs.readFileSync(path.resolve('data/raw.json')));

    const writePath = `${path.resolve('data')}/data.json`;

    const filterTodayKeys = (val, key) => {
      return startsWith(key, 'today_') || key === 'source';
    };

    const dates = Object.keys(apiData.dates);

    const data = Object.values(apiData.dates).map((dateData, index) => {
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
        totalData: pickBy(apiData.total, filterTodayKeys),
      };
    });

    fs.writeFileSync(
      writePath,
      JSON.stringify({ data, lastUpdate: apiData.updated_at })
    );
  } catch (err) {
    console.warn('Unable to fetch data from API');
    console.warn(err);
  }
};
