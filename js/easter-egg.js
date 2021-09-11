
var count = -10;
var count2 = 0;
function myFunction() {
    count = count + 1;
    count2 = count2 + 1;

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
            document.getElementById("demo").innerHTML = "knock knock<br><br>DevOps";
            break;
        case 13:
            document.getElementById("demo").innerHTML = "Who's there ?<br><br>DevOps";
            break;
        case 14:
            document.getElementById("demo").innerHTML = "Joe<br><br>DevOps";
            break;
        case 15:
            document.getElementById("demo").innerHTML = "Joe who ?<br><br>DevOps";
            break;
        case 16:
            document.getElementById("demo").innerHTML = "Joe mama<br><br>DevOps";
            break;
        case 17:
            document.getElementById("demo").innerHTML = "DevOps";
            count = 0;
            break;
    }

    if (count2 == 46) {
        document.getElementById("demo").style.color = "#999999";
        document.getElementById("demo").innerHTML = "wow you must be really boared<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'> click here bub</a><br><br><br><br>DevOps";
    } else if (count2 == 47) {
        document.getElementById("demo").innerHTML = "DevOps";
    }
}

