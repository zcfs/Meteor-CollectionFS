Package.describe({
  name: 'zcfs:s3',
  version: '0.1.4',
  summary: "Amazon Web Services S3 storage adapter for CollectionFS",
  git: "https://github.com/zcfs/Meteor-CollectionFS/tree/master/packages/s3"
});

Npm.depends({
  'aws-sdk': "2.0.23",
  // 'temp': '0.7.0', // used by the s3.indirect.streaming.js
  // 'through2': '0.4.1', // used by the s3.upload.stream.js
  // 'backoff': '2.3.0', // used by the s3.upload.stream.js
  // 'bl': '0.7.0' // used by the s3.upload.stream.js
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['zcfs:base-package@0.0.30', 'zcfs:storage-adapter@0.2.1']);
  api.addFiles([
    's3.server.js',
    // 's3.indirect.streaming.js',
    // 's3.upload.stream.js',
    's3.upload.stream2.js',
    ], 'server');
  api.addFiles('s3.client.js', 'client');
});

Package.onTest(function(api) {
  api.use(['zcfs:standard-packages', 'zcfs:s3', 'test-helpers', 'tinytest'], 'server');
  api.addFiles('tests/server-tests.js', 'server');
  api.addFiles('tests/client-tests.js', 'client');
});
