Splines
=======

Convenient and efficient B-splines. This package allows you to generate fairly efficient code for evaluating B-splines of arbitrary degree using [de Boor's algorithm](http://en.wikipedia.org/wiki/De_Boor%27s_algorithm). For convenience you can also supply a period, but (for the moment) only if the period is larger than or equal to the order of the spline+1 (which is the spatial support).

Some benchmarks of different techniques: http://jsperf.com/bspline-evaluation
