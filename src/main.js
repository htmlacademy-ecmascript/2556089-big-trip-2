import FilterListView from './view/filters-view.js';
import FormSortingView from './view/form-sorting-view.js';
import EventListView from './view/event-list-view.js';
import {render} from './render.js';

const siteHeader = document.querySelector('.page-header');
const filterList = siteHeader.querySelector('.trip-controls__filters');
const siteMain = document.querySelector('.page-main');
const formSortingSection = siteMain.querySelector('.trip-events');

render (new FilterListView (), filterList);
render (new FormSortingView(), formSortingSection);
render(new EventListView (), formSortingSection);


