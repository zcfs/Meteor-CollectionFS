Package.describe({
  name: 'zcfs:access-point',
  version: '0.1.50',
  summary: 'CollectionFS, add ddp and http accesspoint capability',
  git: 'https://github.com/zcfs/Meteor-cfs-access-point.git'
});

Npm.depends({
  "content-disposition": "0.5.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  // This imply is needed for tests, and is technically probably correct anyway.
  api.imply([
    'zcfs:base-package'
  ]);

  api.use([
    //CFS packages
    'zcfs:base-package@0.0.30',
    'zcfs:file@0.1.16',
    //Core packages
    'check',
    'ejson',
    //Other packages
    'zcfs:http-methods@0.0.29',
    'zcfs:http-publish@0.0.13'
  ]);

  api.addFiles([
    'access-point-common.js',
    'access-point-handlers.js',
    'access-point-server.js'
  ], 'server');

  api.addFiles([
    'access-point-common.js',
    'access-point-client.js'
  ], 'client');
});

Package.onTest(function (api) {
  api.versionsFrom('1.0');

  api.use([
    //CFS packages
    'zcfs:access-point',
    'zcfs:standard-packages@0.0.2',
    'zcfs:gridfs@0.0.0',
    //Core packages
    'test-helpers',
    'http',
    'tinytest',
    'underscore',
    'ejson',
    'ordered-dict',
    'random',
    'deps'
  ]);

  api.addFiles('tests/client-tests.js', 'client');
  api.addFiles('tests/server-tests.js', 'server');
});
