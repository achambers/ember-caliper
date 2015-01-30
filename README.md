# Ember-caliper

An Ember CLI add to add caliper.io to your app

## Synopsis

This addon will import the caliper.io js file into your application and will provide a `content-for` tag to inject the caliper config into your page.

It also provides access to the Caliper object for use in your app.

## Usage

### Install caliper-ember

Install the `caliper-ember` package from bower:

```shell
$ bower i --save caliper-ember
```

### Specify caliper config

In your `config/environment.js` file, specify the [caliper config][1] you need:

```javascript
// config/environment.js

ENV.caliper = {
  apiKey: 'SOME_API_KEY',
  debug: true,
  enabled: true,
  visitor: 'some@email.com',
  minDuration: 50
};
```

### Update Content Security Policy

Caliper requires it's config to be put in a gobal variable called `Caliper` and suggests setting that in the head.  Therefore, in your `config/environment.js` file, open up the Content Security Policy to allow for this.

*NB I don't think this is a good idea so I'm working on another way around this*

```javascript
// config/environment.js

ENV.contentSecurityPolicy = {
  'script-src': "'self' 'unsafe-inline'",
  'img-src': "'self' *.caliper.io"
};
```

### Add `content-for` tag to index.html

Finally, add the `content-for` tag to your index.html so that the addon will inject the caliper config:

```html
<html>
  <head>
    <!-- ...snip... -->

    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{content-for 'caliper'}}

    {{content-for 'head'}}

    <link rel="stylesheet" href="assets/vendor.css">
    <link rel="stylesheet" href="assets/dummy.css">

    {{content-for 'head-footer'}}
  </head>
  <body>
    <!-- ...snip... -->
  </body>
</html>
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

[1]: http://docs.caliper.io/configuration.html 'Caliper config'
