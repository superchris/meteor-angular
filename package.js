Package.describe({
  name: 'superchris:angular',
  summary: 'AngularJS is a client side javascript MVC framework',
  version: '1.3.2',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('superchris:angular.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('superchris:angular');
  api.addFiles('superchris:angular-tests.js');
});
