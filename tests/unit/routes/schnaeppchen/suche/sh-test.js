import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | schnaeppchen/suche/SH', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:schnaeppchen/suche/sh');
    assert.ok(route);
  });
});
