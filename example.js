var splines = require('./splines.js');
var bspline = splines.bspline(2);
var bsplineP = splines.bspline(2,4);

console.log(bspline.toString());

for(var i=-3*6; i<=3*6; i++) {
    console.log("bspline(" + (i/6) + ")=" + bspline(i/6));
}

for(var i=-3*6; i<=3*6; i++) {
    console.log("bsplineP(" + (i/6) + ")=" + bsplineP(i/6));
}
