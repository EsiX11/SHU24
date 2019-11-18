function showFastest(){
    var x = document.getElementById('fastest');
    var y = document.getElementById('buttons');
    var z = document.getElementById('average');
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    }
    else {
        x.style.display = "none";
    }
    if (y.style.display === "inline-block") {
        y.style.display = "none";
    }
    if (z.style.display === "block") {
        z.style.display = "none";
    }
}

function showPersonal(){
    var x = document.getElementById('buttons');
    var y = document.getElementById('fastest');
    var z = document.getElementById('average');
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    }
    else {
        x.style.display = "none";
    }
    if (y.style.display === "inline-block") {
        y.style.display = "none";
    }
    if (z.style.display === "block") {
        z.style.display = "none";
    }
}

function showAverage(){
    var x = document.getElementById('average');
    var y = document.getElementById('buttons');
    var z = document.getElementById('fastest');
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
    if (y.style.display === "inline-block") {
        y.style.display = "none";
    }
    if (z.style.display === "inline-block") {
        z.style.display = "none";
    }
}
var Sum1 = 0;
var Link = ["images/whilton/1.jpg", "images/whilton/2.jpg", "images/whilton/3.jpg", "images/whilton/4.jpg", "images/whilton/5.jpg", "images/whilton/6.jpg", "images/whilton/7.jpg", "images/whilton/8.jpg", "images/whilton/9.jpg","images/whilton/10.jpg","images/whilton/11.jpg", "images/whilton/12.jpg", "images/whilton/13.jpg", "images/whilton/14.jpg", "images/whilton/15.jpg", "images/whilton/16.jpg", "images/whilton/17.jpg", "images/whilton/18.jpg", "images/whilton/19.jpg" ];
function backFuction() {
    Sum1--;
    if (Sum1 == -1) {
        Sum1 = 18;
    } 
    document.getElementById("whilton").src = Link[Sum1];
}
function nextFunction() {
    Sum1++;
    if (Sum1 == 19) {
        Sum1 = 0;
    }
    document.getElementById("whilton").src = Link[Sum1];
}
