Package.describe({
  git: 'https://github.com/zcfs/Meteor-cfs-worker.git',
  name: 'zcfs:worker',
  version: '0.1.5',
  summary: 'CollectionFS, file worker - handles file copies/versions'
});

Package.onUse(function(api) {
  api.use([
    'zcfs:base-package@0.0.30',
    'zcfs:tempstore@0.1.6',
    'zcfs:storage-adapter@0.2.1'
  ]);

  api.use([
    'livedata@1.0.0',
    'mongo-livedata@1.0.0',
    'zcfs:power-queue@0.9.11'
  ]);

  api.addFiles([
    'fileWorker.js'
  ], 'server');
});

// Package.on_test(function (api) {
//   api.use('zcfs:standard-packages@0.0.0');

//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict', 'random']);

//   api.addFiles('tests/client-tests.js', 'client');
//   api.addFiles('tests/server-tests.js', 'server');
// });
