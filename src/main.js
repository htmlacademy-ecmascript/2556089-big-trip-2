import NewFilterListView from './view/filters.js';
import {render} from './render.js';

const siteHeader = document.querySelector('.page-header');
const siteFilterList = siteHeader.querySelector('.trip-controls__filters');
console.log (siteHeader);
console.log (siteFilterList);

render (new NewFilterListView (), siteFilterList);


