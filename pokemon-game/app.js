// score track
var userScore = 0;
var compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const results_p = document.querySelector(".results > p");
const fire_div = document.getElementById("f");
const water_div = document.getElementById("w");
const grass_div = document.getElementById("g")

function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    results_p.innerHTML = `${toWord(user)} beats ${comp}. Human Win! 🔥`
}

function notwin(user, comp) {
    compScore++;
    compScore_span.innerHTML = compScore;
    results_p.innerHTML = `${comp} beats ${toWord(user)}. Robot will rule the world! 🤖`
}

function equalwin(user, comp) {
    compScore_span.innerHTML = compScore;
    results_p.innerHTML = `${toWord(user)} and ${comp} results in draw. Take another fight 😒`
}

function compChoice() {
    const choices = ['Fire', 'Water', 'Grass'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function toWord(letter) {
    if (letter=='f') return "Fire";
    if (letter=='w') return "Water";
    return "Grass";
}

// game logic
function game(user) {
    const comp = compChoice();

    switch (user+comp[0]) {
        // fg, wf, gw
        case "fG":
        case "wF":
        case "gW":
            win(user, comp);
            break;
        // fw, wg, gf
        case "fW":
        case "wG":
        case "gF":
            notwin(user, comp);
            break;
        // draw
        case "fF":
        case "wW":
        case "gG":
            equalwin(user, comp);
            break;         
    }
}

// main
function main() {
    fire_div.addEventListener('click', function() {
        game("f");
    })

    water_div.addEventListener('click', function() {
        game("w");
    })

    grass_div.addEventListener('click', function() {
        game("g");
    })
}

main();