(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name <%= scriptAppName %>.<%= name %>
   * @description
   * # <%= name %>
   * Factory service in <%= scriptAppName %>.
   */

  var app = angular.module('<%= scriptAppName %>')
  app.factory('<%= name %>', retrieveObject);

  /*
   * Imports whatever retrieveObject returns when injected
   */
  function retrieveObject() {
    return new Object();
  }
})();
