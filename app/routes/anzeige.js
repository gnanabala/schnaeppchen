import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class AnzeigeRoute extends Route {
    model() {
        return $.getJSON('https://localhost/schnaeppchen/php/anzeige.php');
        /* return [{
                 subcategories: 'Spielzeug',
                 inhalt: 'Lego, Playmobil, Duplo',
                 telephone: '02377897'
             },

             {
                 subcategories: "Kinderwagen",
                 inhalt: 'Gute zustand, VB:50 Euro, schwarz ',
                 telephone: '02177541'
             },

             {
                 subcategories: "Möbel",
                 inhalt: 'Polsterbett Kunstleder Doppelbett VB: 70 Euro',
                 telephone: '02543262'
             },


             {
                 subcategories: "GartenMöbel",
                 inhalt: 'Balkontisch Santiago (61,9x61,9) VB: 20 Euro',
                 telephone: '02543262'
             }
         ]*/
    }

    @action
    add() {
        this.transitionTo('daten');
    }
}