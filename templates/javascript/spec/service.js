(function() {
  'use strict';

  describe('Service: <%= name %>', function () {

    beforeEach(module('<%= scriptAppName %>'));

    var <%= name %>;
    beforeEach(inject(function (_<%= name %>_) {
      <%= name %> = _<%= name %>_;
    }));

  });
})();
