import NewFilterListView from './view/filters.js';
import {render} from './render.js';

const siteHeader = document.querySelector('.page-header');
const siteFormList = siteHeader.querySelector('.trip-filters');
console.log (siteHeader);
console.log (siteFormList);

render (new NewFilterListView (), siteHeader);


