import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | schnaeppchen/biete/SH', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:schnaeppchen/biete/sh');
    assert.ok(route);
  });
});
