import FormSortingView from '../view/form-sorting-view.js';
import EventListView from '../view/event-list-view.js';
import FormEditingView from '../view/form-editing.js';
import {render} from '../render.js';

// const formSortingSection = siteMainElement.querySelector('.trip-events');


export default class BoardPresenter {

  formSortingComponent = new FormSortingView();
  eventListComponent = new EventListView();

  constructor ({container}) {
    this.container = container;

  }

  init() {

    render (this.formSortingComponent, this.container);
    render(this.eventListComponent, this.container);
    render(new FormEditingView(), this.eventListComponent.getElement());
  }
}


