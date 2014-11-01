Package.describe({
  name: 'superchris:angular',
  summary: 'AngularJS is a client side javascript MVC framework',
  version: '1.3.2-build.3509+sha.2a2fd14',
  git: 'http://github.com/superchris/meteor-angular.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('bower-angular/angular.js');
  api.addFiles('bower-angular/angular-csp.css');
});
