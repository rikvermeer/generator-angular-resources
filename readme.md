# AngularJS generator 

> Yeoman generator for AngularJS - lets you quickly set up a project with sensible defaults and best practices. Extended to enhance the defaults by integrating with bootstrap-ui(optional) and Restangular.

[Roadmap for upcoming plans/features/fixes](https://github.com/rikvermeer/generator-angular-resources/issues)

## Usage

Install `generator-angular-resources`:
```
npm install -g generator-angular-resources
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo angular`, optionally passing an app name:
```
yo angular [app-name]
```

Run `grunt` for building and `grunt serve` for preview


## Generators

Available generators [EXTENSIONS]:

* [angular-resources:resourcecontroller](#controller)
* [angular-resources:resourceview](#view)
* [angular-resources:resourceroute](#route)

Available generators [DEFAULTS]:

* [angular-resources](#app) (aka [angular-resources:app](#app))
* [angular-resources:controller](#controller)
* [angular-resources:directive](#directive)
* [angular-resources:filter](#filter)
* [angular-resources:route](#route)
* [angular-resources:service](#service)
* [angular-resources:provider](#service)
* [angular-resources:factory](#service)
* [angular-resources:value](#service)
* [angular-resources:constant](#service)
* [angular-resources:decorator](#decorator)
* [angular-resources:view](#view)

**Note: Generators are to be run from the root directory of your app.**

### App
Sets up a new AngularJS app, generating all the boilerplate you need to get started. The app generator also optionally installs Bootstrap and additional AngularJS modules, such as angular-resource (installed by default).

Example:
```bash
yo angular
```

### Route
Generates a controller and view, and configures a route in `app/scripts/app.js` connecting them.

Produces `app/scripts/app.js`:
```javascript
.when('/user/create', {
        templateUrl: 'views/user-create.html',
        controller: 'UserCreateCtrl'
      })
.when('/user/:id', {
        templateUrl: 'views/user-edit.html',
        controller: 'UserEditCtrl'
      })
.when('/user', {
        templateUrl: 'views/user-list.html',
        controller: 'UserListCtrl'
      })
  // ...
});
```

Example:
```bash
yo angular-resources:resourceroute user
```

Produces `app/scripts/controllers/user.js`:
```javascript
angular.module('myMod').controller('UserCreateCtrl', function ($scope, Restangular) {
  // ...
});

angular.module('myMod').controller('UserEditCtrl', function ($scope, Restangular, $routeParams) {
  // ...
});

angular.module('myMod').controller('UserListCtrl', function ($scope, Restangular) {
  // ...
});
```

Produces `app/views/user-create.html`:
```html
<form></form>
```

Produces `app/views/user-edit.html`:
```html
<form></form>
```

Produces `app/views/user-list.html`:
```html
<table></table>
```

**Explicitly provide route URI**

Example:
```bash
yo angular-resource:resourceroute user --uri=my/route
```

Produces controller and view as above and adds a route to `app/scripts/app.js`
with URI `my/route`

### Controller
Generates a controller in `app/scripts/controllers`.

Example:
```bash
yo angular-resource:resourcecontroller user
```

Produces `app/scripts/controllers/user.js`:
```javascript
angular.module('myMod').controller('UserCreateCtrl', function ($scope, Restangular) {
  // ...
});

angular.module('myMod').controller('UserEditCtrl', function ($scope, Restangular, $routeParams) {
  // ...
});

angular.module('myMod').controller('UserListCtrl', function ($scope, Restangular) {
  // ...
});
```

### View
Generates an HTML view file in `app/views`.

Example:
```bash
yo angular-resources:resourceview user
```

Produces `app/views/user-create.html`:
```html
<form></form>
```

Produces `app/views/user-edit.html`:
```html
<form></form>
```

Produces `app/views/user-list.html`:
```html
<table></table>
```

## Bower Components

The following packages are always installed by the [app](#app) generator:

* angular
* angular-mocks
* angular-scenario
* angular-ui
* restangular


The following additional modules are available as components on bower, and installable via `bower install`:

* angular-cookies
* angular-loader
* angular-resource
* angular-sanitize

All of these can be updated with `bower update` as new versions of AngularJS are released.

## Configuration
Yeoman generated projects can be further tweaked according to your needs by modifying project files appropriately.

### Output
You can change the `app` directory by adding a `appPath` property to `bower.json`. For instance, if you wanted to easily integrate with Express.js, you could add the following:

```json
{
  "name": "yo-test",
  "version": "0.0.0",
  ...
  "appPath": "public"
}

```
This will cause Yeoman-generated client-side files to be placed in `public`.

## Testing

Running `grunt test` will run the unit tests with karma.


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
