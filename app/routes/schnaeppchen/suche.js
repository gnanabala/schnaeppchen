import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SchnaeppchenSucheRoute extends Route {
    model() {
        return [
            { id: 'SH', name: 'Haus and Garten' },
            { id: 'SS', name: 'Sport' },
            { id: 'SK', name: 'Baby and Kind' }
        ]
    }


    @action
    SH() {
        alert('hi');
    }
}