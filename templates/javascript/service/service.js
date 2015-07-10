(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name <%= scriptAppName %>.<%= name %>
   * @description
   * # <%= name %>
   * Service in the <%= scriptAppName %>.
   */

  var app = angular.module('<%= scriptAppName %>');
  app.service('<%= name %>', <%= name %>);

  function <%= name %>() {
    // AngularJS will instantiate a singleton by calling "new" on this function
  }
}();
