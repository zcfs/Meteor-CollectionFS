Package.describe({
  name: 'zcfs:upload-http',
  version: '0.0.21',
  summary: 'CollectionFS, HTTP File Upload',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'zcfs:base-package@0.0.30',
    'zcfs:tempstore@0.1.4',
    'zcfs:file@0.1.16',
    'zcfs:access-point@0.1.49',
    'zcfs:power-queue@0.9.11',
    'zcfs:reactive-list@0.0.9'
  ]);

  api.addFiles([
    'upload-http-common.js',
    'upload-http-client.js'
  ], 'client');

  api.addFiles([
    'upload-http-common.js'
  ], 'server');
});

// Package.onTest(function (api) {
//   api.use('collectionfs');
//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
//            'random', 'deps']);

//   api.addFiles('tests/server-tests.js', 'server');
//   api.addFiles('tests/client-tests.js', 'client');
// });
