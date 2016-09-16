NG Launchpad
============

![lift off!](http://history.nasa.gov/SP-432/p0.jpg)

Overview
--------
In this guide we'll set up a very simple client-side page that will use AngularJS. You'll need familiarity with HTML, and JS.

Steps:
------
* download AngularJS (1.5)
* set up basic project
* our first 2-way bind
* our first ng-click
* adding some functionality

download AngularJS (1.5)
========================

First, you'll need to download Angular JS from ajngularjs.org. As of the time of writing, Angular 1.5 is the current, stable release:

![anguarjs.org download link](images/00-installA.png)

Make sure you download Angular 1.5 and save "angular.min.js" in a place where it'll be accessible for this project as well as future ones.

![anguarjs.org download link](images/00-installA.png)

set up basic project
====================
We'll need the absolute basics to take a peek at Angular:
* 'index.html'
* 'vendors' folder with 'angular.min.js' within
* 'scripts' folder
* create 'ngLaunchpad.js' within this folder
* src these files with in index.html and make sure to source angular prior to our script (ngLaunchpad.js)
![src files](images/02-src.png)

Next we'll set up some basic HTML scaffolding. Just an input field and a P tag
![basic html setup](images/03-htmlSetup.png)

Nothing special yet, but let's start adding some AngularJS:

In ngLaunchpad.js:
------------------
We'll be using the very basics of Angular first - we'll create an app and a controller for use within this app.

Add the following:
```javascript
var myApp = angular.module( 'myApp', [] );
```
