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
        x.style.display = "inline-block";
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
