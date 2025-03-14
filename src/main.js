import FilterListView from './view/filters-view.js';
import FormEditingView from './view/form-sorting-view.js';
import {render} from './render.js';

const siteHeader = document.querySelector('.page-header');
const filterList = siteHeader.querySelector('.trip-controls__filters');
const siteMain = document.querySelector('.page-main');
const formSortingSection = siteMain.querySelector('.trip-events');

// const tripEventList = siteMain.querySelector('.trip-events');
// console.log (tripEventList);

render (new FilterListView (), filterList);
render (new FormEditingView(), formSortingSection);


