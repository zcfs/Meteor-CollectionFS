Package.describe({
  name: 'zcfs:dropbox',
  version: '0.0.3',
  summary: 'Dropbox storage adapter for CollectionFS',
  git: 'https://github.com/zcfs/Meteor-CollectionFS/tree/master/packages/dropbox',
  documentation: 'README.md'
});

Npm.depends({
  'dropbox': '0.10.3',
  'stream-buffers': '2.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['zcfs:base-package@0.0.30', 'zcfs:storage-adapter@0.2.1']);
  api.addFiles([
    'dropbox.server.js',
    'dropbox.upload.stream.js',
  ], 'server');
  api.addFiles('dropbox.client.js', 'client');
});

Package.onTest(function(api) {
  api.use(['zcfs:standard-packages', 'zcfs:dropbox', 'test-helpers', 'tinytest'], 'server');
  api.addFiles('tests/server-tests.js', 'server');
  api.addFiles('tests/client-tests.js', 'client');
});