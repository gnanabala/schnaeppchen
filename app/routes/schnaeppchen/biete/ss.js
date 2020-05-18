import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SchnaeppchenBieteSSRoute extends Route {
    model() {
        return [
            { id: 'SE', name: 'Segeln' },
            { id: 'MB', name: 'Motorboote' },
            { id: 'BM', name: 'Bootsmotoren' },
            { id: 'RE', name: 'Reiten' },
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