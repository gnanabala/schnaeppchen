import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SchnaeppchenBieteSKRoute extends Route {
    model() {
        return [
            { id: 'BA', name: 'Babyartikle' },
            { id: 'BK', name: 'Babykleidung' },
            { id: 'KW', name: 'Kinderwagen' },
            { id: 'SP', name: 'Spielzeug' },
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