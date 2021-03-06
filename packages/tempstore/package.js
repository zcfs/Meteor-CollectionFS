 Package.describe({
  git: 'https://github.com/zcfs/Meteor-cfs-tempstore.git',
  name: 'zcfs:tempstore',
  version: '0.1.6',
  summary: 'CollectionFS, temporary storage'
});

Npm.depends({
  'combined-stream': '0.0.4'
});

Package.onUse(function(api) {
  api.use(['zcfs:base-package@0.0.30', 'zcfs:file@0.1.16', 'ecmascript@0.1.0']);

  api.use('zcfs:filesystem@0.1.2', { weak: true });
  api.use('zcfs:gridfs@0.0.30', { weak: true });

  api.use('mongo@1.0.0');

  api.addFiles([
    'tempStore.js'
  ], 'server');
});

// Package.on_test(function (api) {
//   api.use('collectionfs');
//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
//            'random', 'deps']);

//   api.addFiles('tests/server-tests.js', 'server');
// });
