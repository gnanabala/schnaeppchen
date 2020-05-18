import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('schnaeppchen', function() {
    this.route('biete', function() {
      this.route('SH');
      this.route('SS');
      this.route('SK');
    });
    this.route('suche', function() {
      this.route('SH');
    });
  });
  this.route('daten');
  this.route('anzeige');
});
