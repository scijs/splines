var assert = require('assert');

// TODO: This could probably be a little bit more efficient by explicitly working out (programmatically!) the computation for each i.
module.exports.bspline = function (n, period) {
    assert(n>=0 && n==n|0, "B-spline order must be a non-negative integer.");
    assert(period===undefined || period>=n+1, "Periodic B-spline must have period larger than or equal to order+1."); // TODO: This condition could be lifted, but it does make things a little complicated.
    var j, k, text = [], gammaAccu = 1;
    text.push("var t=x+" + ((n+1)/2) +";");
    if (period!==undefined) {
        text.push("t-=Math.floor(t*" + (1/period) + ")*" + period + ";");
    }
    text.push("var i=Math.floor(t);");
    text.push("if (i<0 || i>" + n + ") return 0;");
    for(j=0; j<=n; j++) {
        text.push("var A0_" + j + "=0;");
    }
    setA0(0,n);
    /*for(j=0; j<=n; j++) {
        text.push("var A0_" + j + "=0;");
    }
    text.push("switch(i) {");
    for(j=0; j<=n; j++) {
        text.push("case " + j + ": A0_" + j + "=1; break;");
    }
    text.push("default: return 0;");
    text.push("}");*/
    /*text.push("if (i<0 || i>" + n + ") return 0;");
    for(j=0; j<=n; j++) {
        text.push("var A0_" + j + "= i==" + j + " ? 1 : 0;");
    }*/
    text.push("var alpha0=t-i;");
    for(j=1; j<=n-1; j++) {
        text.push("var alpha" + j + "=alpha0+" + j + ";");
    }
    for(k=1; k<=n; k++) {
        gammaAccu *= (n+1-k);
        for(j=0; j<=n-k; j++) {
            text.push("var A" + k + "_" + j + "=" + (n+1-k) + "*A" + (k-1) + "_" + (j+1) + "+alpha" + j + "*(A" + (k-1) + "_" + j + "-A" + (k-1) + "_" + (j+1) + ");");
        }
    }
    text.push("return A" + n + "_0*" + (1/gammaAccu) + ";");
    return new Function("x", text.join('\n'));
    
    function setA0(A,B) { // Find the A0 component to set within the range [A,B]
        if (A==B) {
            text.push("A0_" + A + "=1;");
        } else {
            var mid = (A+B)>>1;
            text.push("if (i<=" + mid + ") {");
            setA0(A,mid);
            text.push("} else {");
            setA0(mid+1,B);
            text.push("}");
        }
    }
};
