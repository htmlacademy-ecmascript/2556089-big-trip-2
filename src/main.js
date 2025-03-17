import FilterListView from './view/filters-view.js';

import {render} from './render.js';
import BoardPresenter from './presenter/board-presenter.js';


const siteHeader = document.querySelector('.page-header');
const filterList = siteHeader.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({container: siteMainElement});

render (new FilterListView (), filterList);

boardPresenter.init();
