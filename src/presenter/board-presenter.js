import FormSortingView from '../view/form-sorting-view.js';
import EventListView from '../view/event-list-view.js';
import FormEditingView from '../view/form-editing.js';
import FormCreationView from '../view/form-creation.js';
import WayPointView from '../view/waypoint-view.js';
import {render} from '../render.js';

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
    render (new FormCreationView(), this.eventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render (new WayPointView(), this.eventListComponent.getElement());
    }
  }
}


