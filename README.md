# Class JS

Class objects with constructor and multi-inheritance support. This implementation is not bound to any library (i.e. works with or without Prototype / JQuery) and should work with *any* browser. 

## Author

Class JS was written by [Matthias Ladkau](http://www.ladkau.de).

Based on: Simple JavaScript Inheritance by John Resig
http://ejohn.org/blog/simple-javascript-inheritance/

## License

Class JS is released under the [MIT license](http://mit-license.org).

## A brief tutorial

Classes are created with the create method for example:

```js
CA = Class.create({
    attr : 123,
    init : function (arg) {
        this.attr = arg;
    }
});
```

Classes can have attributes and a constructor method called `init`. Classes are instantiated like this:
 
```js
a = new CA("test");
```
 
Given arguments are passed to the constructor method `init`. Classes can be organized in an inheritence structure. A subclass of CA would be declared like this:
 
```js
CB = CA.create({
    ...
});
```
 
Functions can be overwritten in subclasses and the overwritten function can be called with "this._super(...)". For example:
 
```js
CB = CA.create({
    init : function (arg) {
        this._super(arg);
    }
});
```
 
It is possible to inherit from multiple classes. However one class must be choosen to be the primary class. The `instanceof` operator works only with primary superclasses. An example of multi inheritence would be:
 
```js
CC = CA.create(CX, {
    init : function (arg) {
        this._super(arg);
    }    
});
```
 
In this example the class `CC` would inherit all functions from `CX` and `CA`. A call to `this._super` would first go to `CX` and to `CA` if the function is not defined in `CX`. Objects instantiated from class `CC` are `instanceof` `CA` but not `CX`.
