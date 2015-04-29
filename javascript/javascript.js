function initialise() {
    setupNav();
}

function setupNav() {
    var menu = document.getElementById("navigation");
    var buttons = menu.getElementsByClassName("out");
    for(var i = 0; i < buttons.length; i++) {
        console.log(buttons[i]);
        buttons[i].onmouseover = function(){ navOver(this); }
        buttons[i].onmouseout = function(){ navOut(this); }
    }
}

function navOver(button) {
    if(button.className != "selected") {
        button.className = "hover";
    }
}

function navOut(button) {
    if(button.className != "selected") {
        button.className = "out";
    }
}
