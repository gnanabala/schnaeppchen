import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | schnaeppchen/biete/SS', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:schnaeppchen/biete/ss');
    assert.ok(route);
  });
});