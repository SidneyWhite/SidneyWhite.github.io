function btn_clicked() {
    // alert("Hello, world!");

    var fontSize = parseInt($('#txtarea').css("font-size")) * 72 / 96;
    document.getElementById("txtarea").style.fontSize = (fontSize + 2) + "pt";

    clearInterval(myInterval);
    var myInterval = setInterval(btn_clicked, 3000);
}

function check_clicked() {
    document.getElementById("txtarea").style.fontWeight = document.getElementById("chk_box").checked == true ? "bold" : "normal";
    document.getElementById("txtarea").style.color = document.getElementById("chk_box").checked == true ? "green" : "black";
    document.getElementById("txtarea").style.textDecoration = document.getElementById("chk_box").checked == true ? "underline" : "none";


    var url = document.getElementById("chk_box").checked == true ? "http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg" : "";
    $("body").css("background-image", "url(" + url + ")");
}