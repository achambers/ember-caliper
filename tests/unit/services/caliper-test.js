import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('service:caliper', 'CaliperService', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('it sets the visitor', function() {
  expect(1);

  window.Caliper = {config: {}};
  var service = this.subject();
  service.setVisitor('test');

  equal(window.Caliper.config.visitor, 'test');
});
