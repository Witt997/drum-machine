function play(str) {

    if (str === "q" || str === "Q") {
        document.getElementById('display').innerHTML = "Heater 1";
    } else if (str === "w" || str === "W") {
        document.getElementById('display').innerHTML = "Heater 2";
    } else if (str === "e" || str === "E") {
        document.getElementById('display').innerHTML = "Heater 3";
    } else if (str === "a" || str === "A") {
        document.getElementById('display').innerHTML = "Heater 4_1";
    } else if (str === "s" || str === "S") {
        document.getElementById('display').innerHTML = "Heater 6";
    } else if (str === "d" || str === "D") {
        document.getElementById('display').innerHTML = "Dsc_Oh";
    } else if (str === "z" || str === "Z") {
        document.getElementById('display').innerHTML = "Kick_n_Hat";
    } else if (str === "x" || str === "X") {
        document.getElementById('display').innerHTML = "RP4_KICK_1";
    } else if (str === "c" || str === "C") {
        document.getElementById('display').innerHTML = "Cev_H2";
    }
    var audio = document.getElementById(str);
    audio.play();

}

window.document.onkeyup = function(event) {
    let keyStroke = event.key
    if (keyStroke === "q" || keyStroke === "Q") {
        play("Q");
    } else if (keyStroke === "w" || keyStroke === "W") {
        play("W");
    } else if (keyStroke === "e" || keyStroke === "E") {
        play("E");
    } else if (keyStroke === "a" || keyStroke === "A") {
        play("A");
    } else if (keyStroke === "s" || keyStroke === "S") {
        play("S");
    } else if (keyStroke === "d" || keyStroke === "D") {
        play("D");
    } else if (keyStroke === "z" || keyStroke === "Z") {
        play("Z");
    } else if (keyStroke === "x" || keyStroke === "X") {
        play("X");
    } else if (keyStroke === "c" || keyStroke === "C") {
        play("C");
    }    
}