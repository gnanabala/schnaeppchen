import Route from '@ember/routing/route';
import { action } from '@ember/object';
export default class SchnaeppchenRoute extends Route {
    model() {
        return [
            { region: 'Großraum Essen', amount: '13.99 Euro' },
            { region: 'Großraum Duisburg ', amount: '12.99 Euro' },
            { region: 'Großraum Dortmund', amount: '15.12 Euro' },
            { region: 'Hagen, Herdeck/Wetter, Iserlohn', amount: '12.99 Euro' },
            { region: 'Siegen, Meschede, Berleburg, Warstein, Amsberg', amount: '12.99 Euro' },

        ];
    }

    @action
    biete() {
        this.transitionTo('schnaeppchen.biete');

    }

    @action
    suche() {
        this.transitionTo('schnaeppchen.suche');
    }




}