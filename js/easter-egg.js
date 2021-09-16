
var count = -10;
function myFunction() {
    count = count + 1;

    switch (count) {
        case 4:
            document.getElementById("demo").innerHTML = "DevOps";
            document.getElementById("demo").style.color = "red";
            break;
        case 8:
            document.getElementById("demo").innerHTML = "DevOps";
            document.getElementById("demo").style.color = "blue";
            break;
        case 12:
            document.getElementById("demo").style.color = "#999999";
            document.getElementById("demo").innerHTML = "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'> click here bub</a><br><br><br>DevOps";
            break;
        case 14:
            document.getElementById("demo").innerHTML = "DevOps";
            break;
    }
}

