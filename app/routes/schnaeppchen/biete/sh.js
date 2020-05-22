/*[
  {categoryID: 'SH', id: 'GG', name: 'Gartenmöbel und Geräte' },
  {categoryID: 'SH', id: 'BM', name: 'Baumaterial' },
  {categoryID: 'SH', id: 'MO', name: 'Möbel' },
  {categoryID: 'SH', id: 'VS', name: 'Verscheidnes' }
  {categoryID: 'SK', id: 'BA', name: 'Babyartikle' },
  {categoryID: 'SK', id: 'BK', name: 'Babykleidung' },
  {categoryID: 'SK', id: 'KW', name: 'Kinderwagen' },
  {categoryID: 'SK', id: 'SP', name: 'Spielzeug' },
  {categoryID: 'SK', id: 'VS', name: 'Verscheidnes' }
]
*/
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
    auswahl() {


        this.transitionTo('anzeige');
    }
}