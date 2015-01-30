/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-caliper',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/caliper-ember/dist/caliper.ember.min.js');
  },

  contentFor: function(type, config) {
    if (type === 'caliper') {
      var caliper = config.caliper || {};
      var options = {config: caliper}
      var result  = '<script type="text/javascript">var Caliper = ' + JSON.stringify(options) + ';</script>';

      return result;
    }
  }
};
