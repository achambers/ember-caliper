import Ember from 'ember';

export default Ember.Object.extend({
  setVisitor: function(visitor) {
    window.Caliper.config.visitor = visitor;
  }
});
