import {getRandomArrayElement} from '../utils.js';


const mockData = [
  {d:1,
    c:true
  },

  {f:'jhghj',
    o: {e:'qsd'}
  },

  {re: 56}

];

function getMockData () {
  const randomMockData = getRandomArrayElement(mockData);
  console.log (randomMockData);
}

export {getMockData};


