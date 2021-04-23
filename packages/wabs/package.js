Package.describe({
  name: 'zcfs:wabs',
  version: '0.1.0',
  summary: "Windows Azure Blob Storage (WABS) adapter for CollectionFS",
  git: "https://github.com/zcfs/Meteor-CollectionFS/tree/master/packages/wabs"
});

Npm.depends({
  'azure-storage': "0.7.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['zcfs:base-package@0.0.30', 'zcfs:storage-adapter@0.2.1']);
  api.addFiles([
    'wabs.server.js',
    ], 'server');
  api.addFiles('wabs.client.js', 'client');
});

Package.onTest(function(api) {
  api.use(['zcfs:standard-packages', 'zcfs:wabs', 'test-helpers', 'tinytest'], 'server');
  api.addFiles('tests/server-tests.js', 'server');
  api.addFiles('tests/client-tests.js', 'client');
});
