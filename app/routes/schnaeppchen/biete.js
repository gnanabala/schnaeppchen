import Route from '@ember/routing/route';
import { action } from '@ember/object';
//import Ember from 'ember';
import $ from 'jquery';

export default class SchnaeppchenBieteRoute extends Route {
    model() {
        //return [{ "id": "SH", "name": "Haus and Garten" }, { "id": "SS", "name": "Sport" }, { "id": "SK", "name": "Baby and Kind" }];
        //alert(Ember.$.getJSON('https://localhost/schnaeppchen/php/categories.php'));
        return $.getJSON('https://localhost/schnaeppchen/php/categories.php');
        /*
        return [
            { id: 'SH', name: 'Haus and Garten' },
            { id: 'SS', name: 'Sport' },
            { id: 'SK', name: 'Baby and Kind' }
        ]*/
    }

    @action
    subcategory() {
        let route = 'schnaeppchen.biete.' + $('#bcategories').val();
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