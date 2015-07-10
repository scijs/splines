Splines
=======

Convenient and efficient B-splines. This package allows you to generate fairly efficient code for evaluating B-splines of arbitrary degree using [de Boor's algorithm](http://en.wikipedia.org/wiki/De_Boor%27s_algorithm).

[![build status](https://secure.travis-ci.org/scijs/splines.png)](http://travis-ci.org/scijs/splines)

## Example
Constructing and evaluating a second order B-spline:
```javascript
var splines = require("splines")
var bspline = splines.bspline(2);

var vals = []
for(var i=-3*6; i<=3*6; i++) {
    vals.push(bspline(i/6));
}
console.log(vals)
```
#### Output
```
[0,0,0,0,0,0,0,0,0,0,0.013888888888888902,0.05555555555555553,0.125,0.2222222222222222,
0.34722222222222227,0.5,0.638888888888889,0.7222222222222222,0.75,0.7222222222222222,
0.638888888888889,0.5,0.3472222222222223,0.22222222222222213,0.125,0.055555555555555455,
0.013888888888888937,0,0,0,0,0,0,0,0,0,0]
```

## API
#### `require("splines").bspline(n[, period])`

Generates function for evaluating an `n`-th order B-spline.

* `n` is the order of the B-spline (it should be integer-valued and greater than or equal to zero).
* `period` is an optional period. Note, however, that (for the moment) this module only supports a period if the period is larger than or equal to the order of the spline+1 (which is the spatial support).

Some benchmarks of different techniques: http://jsperf.com/bspline-evaluation

## License

(c) 2013 Jasper van de Gronde. MIT License.
