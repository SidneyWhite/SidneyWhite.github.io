function gogogo() {
    // alert("Yay, it works!");
    setTimeout(booyah, 500);
    setTimeout(booyah_2(), 500);
}

function booyah() {
    console.log("booyah 1");
}

function booyah_2() {
    console.log("booyah 2");
}


var myfunc = function (a, x) {
    return a * x;
};
var x = myfunc(2, 3);
var y = myfunc;
// alert(x);
// alert(y(2, 3));


setTimeout(booyah1, 2000);
setTimeout(booyah2(), 2000);


function booyah1() {
    console.log("booyah");
}

function booyah2() {
    // console.log("booyah2");
    setTimeout(booyah1, 2000);
}