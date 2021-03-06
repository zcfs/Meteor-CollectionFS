## zcfs:access-point Public API ##

CollectionFS, add ddp and http accesspoint capability

_API documentation automatically generated by [docmeteor](https://github.com/raix/docmeteor)._

-

### <a name="FS.HTTP.setBaseUrl"></a>*FSHTTP*.setBaseUrl(newBaseUrl)&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ###

*This method __setBaseUrl__ is defined in `FS.HTTP`*

__Arguments__

* __newBaseUrl__ *{String}*  

 Change the base URL for the HTTP GET and DELETE endpoints.


__Returns__  *{undefined}*


> ```FS.HTTP.setBaseUrl = function setBaseUrl(newBaseUrl) { ...``` [access-point-common.js:29](access-point-common.js#L29)


-

### <a name="FS.File.prototype.url"></a>*fsFile*.url([options])&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ###

*This method __url__ is defined in `prototype` of `FS.File`*

__Arguments__

* __options__ *{Object}*  (Optional)
    * __store__ *{String}*  (Optional)

    Name of the store to get from. If not defined, the first store defined in `options.stores` for the collection on the client is used.

    * __auth__ *{Boolean}*  (Optional, Default = null)

    Add authentication token to the URL query string? By default, a token for the current logged in user is added on the client. Set this to `false` to omit the token. Set this to a string to provide your own token. Set this to a number to specify an expiration time for the token in seconds.

    * __download__ *{Boolean}*  (Optional, Default = false)

    Should headers be set to force a download? Typically this means that clicking the link with this URL will download the file to the user's Downloads folder instead of displaying the file in the browser.

    * __brokenIsFine__ *{Boolean}*  (Optional, Default = false)

    Return the URL even if we know it's currently a broken link because the file hasn't been saved in the requested store yet.

    * __metadata__ *{Boolean}*  (Optional, Default = false)

    Return the URL for the file metadata access point rather than the file itself.

    * __uploading__ *{String}*  (Optional, Default = null)

    A URL to return while the file is being uploaded.

    * __storing__ *{String}*  (Optional, Default = null)

    A URL to return while the file is being stored.

    * __filename__ *{String}*  (Optional, Default = null)

    Override the filename that should appear at the end of the URL. By default it is the name of the file in the requested store.



Returns the HTTP URL for getting the file or its metadata.

> ```FS.File.prototype.url = function(options) { ...``` [access-point-common.js:72](access-point-common.js#L72)


-

### <a name="FS.HTTP.Handlers.Del"></a>*FSHTTPHandlers*.Del()&nbsp;&nbsp;<sub><i>Server</i></sub> ###

*This method __Del__ is defined in `FS.HTTP.Handlers`*

__Returns__  *{any}*
response


HTTP DEL request handler

> ```FS.HTTP.Handlers.Del = function httpDelHandler(ref) { ...``` [access-point-handlers.js:13](access-point-handlers.js#L13)


-

### <a name="FS.HTTP.Handlers.GetList"></a>*FSHTTPHandlers*.GetList()&nbsp;&nbsp;<sub><i>Server</i></sub> ###

*This method __GetList__ is defined in `FS.HTTP.Handlers`*

__Returns__  *{Object}*
response


HTTP GET file list request handler

> ```FS.HTTP.Handlers.GetList = function httpGetListHandler() { ...``` [access-point-handlers.js:41](access-point-handlers.js#L41)


-

### <a name="FS.HTTP.Handlers.Get"></a>*FSHTTPHandlers*.Get()&nbsp;&nbsp;<sub><i>Server</i></sub> ###

*This method __Get__ is defined in `FS.HTTP.Handlers`*

__Returns__  *{any}*
response


HTTP GET request handler

> ```FS.HTTP.Handlers.Get = function httpGetHandler(ref) { ...``` [access-point-handlers.js:135](access-point-handlers.js#L135)


-

### <a name="FS.HTTP.Handlers.PutInsert"></a>*FSHTTPHandlers*.PutInsert()&nbsp;&nbsp;<sub><i>Server</i></sub> ###

*This method __PutInsert__ is defined in `FS.HTTP.Handlers`*

__Returns__  *{Object}*
response object with _id property


HTTP PUT file insert request handler

> ```FS.HTTP.Handlers.PutInsert = function httpPutInsertHandler(ref) { ...``` [access-point-handlers.js:229](access-point-handlers.js#L229)


-

### <a name="FS.HTTP.Handlers.PutUpdate"></a>*FSHTTPHandlers*.PutUpdate()&nbsp;&nbsp;<sub><i>Server</i></sub> ###

*This method __PutUpdate__ is defined in `FS.HTTP.Handlers`*

__Returns__  *{Object}*
response object with _id and chunk properties


HTTP PUT file update chunk request handler

> ```FS.HTTP.Handlers.PutUpdate = function httpPutUpdateHandler(ref) { ...``` [access-point-handlers.js:264](access-point-handlers.js#L264)


-

### <a name="FS.HTTP.setHeadersForGet"></a>*FSHTTP*.setHeadersForGet(headers, [collections])&nbsp;&nbsp;<sub><i>Server</i></sub> ###

*This method __setHeadersForGet__ is defined in `FS.HTTP`*

__Arguments__

* __headers__ *{Array}*  

 List of headers, where each is a two-item array in which item 1 is the header name and item 2 is the header value.

* __collections__ *{Array|String}*  (Optional)

 Which collections the headers should be added for. Omit this argument to add the header for all collections.


__Returns__  *{undefined}*


> ```FS.HTTP.setHeadersForGet = function setHeadersForGet(headers, collections) { ...``` [access-point-server.js:24](access-point-server.js#L24)


-

### <a name="FS.HTTP.publish"></a>*FSHTTP*.publish(collection, func)&nbsp;&nbsp;<sub><i>Server</i></sub> ###

*This method __publish__ is defined in `FS.HTTP`*

__Arguments__

* __collection__ *{[FS.Collection](#FS.Collection)}*  
* __func__ *{Function}*  

 Publish function that returns a cursor.


__Returns__  *{undefined}*


Publishes all documents returned by the cursor at a GET URL
with the format baseUrl/record/collectionName. The publish
function `this` is similar to normal `Meteor.publish`.

> ```FS.HTTP.publish = function fsHttpPublish(collection, func) { ...``` [access-point-server.js:48](access-point-server.js#L48)


-

### <a name="FS.HTTP.unpublish"></a>*FSHTTP*.unpublish(collection)&nbsp;&nbsp;<sub><i>Server</i></sub> ###

*This method __unpublish__ is defined in `FS.HTTP`*

__Arguments__

* __collection__ *{[FS.Collection](#FS.Collection)}*  

__Returns__  *{undefined}*


Unpublishes a restpoint created by a call to `FS.HTTP.publish`

> ```FS.HTTP.unpublish = function fsHttpUnpublish(collection) { ...``` [access-point-server.js:73](access-point-server.js#L73)


-

### <a name="FS.HTTP.mount"></a>*FSHTTP*.mount(mountPoints, selector_f)&nbsp;&nbsp;<sub><i>Server</i></sub> ###

*This method __mount__ is defined in `FS.HTTP`*

__Arguments__

* __mountPoints__ *{[array of string](#array of string)}*  

 mount points to map rest functinality on

* __selector_f__ *{function}*  

 [selector] function returns `{ collection, file }` for mount points to work with



> ```FS.HTTP.mount = function(mountPoints, selector_f) { ...``` [access-point-server.js:125](access-point-server.js#L125)


-

### <a name="FS.HTTP.unmount"></a>*FSHTTP*.unmount([mountPoints])&nbsp;&nbsp;<sub><i>Server</i></sub> ###

*This method __unmount__ is defined in `FS.HTTP`*

__Arguments__

* __mountPoints__ *{[string ](#string )|[ array of string](# array of string)}*  (Optional)

 Optional, if not specified all mountpoints are unmounted




> ```FS.HTTP.unmount = function(mountPoints) { ...``` [access-point-server.js:223](access-point-server.js#L223)



-
### FS.Collection maps on HTTP pr. default on the following restpoints:
*
baseUrl + '/files/:collectionName/:id/:filename',
baseUrl + '/files/:collectionName/:id',
baseUrl + '/files/:collectionName'

Change/ replace the existing mount point by:
```js
unmount all existing
FS.HTTP.unmount();
Create new mount point
FS.HTTP.mount([
'/cfs/files/:collectionName/:id/:filename',
'/cfs/files/:collectionName/:id',
'/cfs/files/:collectionName'
]);
```
