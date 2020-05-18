import Route from '@ember/routing/route';
import { action } from '@ember/object';
export default class SchnaeppchenBieteSHRoute extends Route {

    model() {
        return [
            { id: 'GG', name: 'Gartenmöbel und Geräte' },
            { id: 'BM', name: 'Baumaterial' },
            { id: 'MO', name: 'Möbel' },
            { id: 'VS', name: 'Verscheidnes' }
        ]
    }


    @action
    subcategory(categoryID) {
        let route = 'schnaeppchen.biete.' + categoryID;
        this.transitionTo(route);
    }

    @action
    auswahl() {
        this.transitionTo('anzeige');
    }
}