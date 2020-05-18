import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { hash } from 'rsvp';

export default class SchnaeppchenBieteRoute extends Route {
    model() {
        return [
            { id: 'SH', name: 'Haus and Garten' },
            { id: 'SS', name: 'Sport' },
            { id: 'SK', name: 'Baby and Kind' }
        ]
    }

    @action
    subcategory(categoryID) {
        let route = 'schnaeppchen.biete.' + categoryID;
        this.transitionTo(route);
    }


    /*
        model() {
            return RSVP.hash({
                categories: [
                    { id: 'SH', name: 'Haus and Garten' },
                    { id: 'SS', name: 'Sport' },
                    { id: 'SK', name: 'Baby and Kind' }
                ],

                subcategories: 
            })
        }
           */

}