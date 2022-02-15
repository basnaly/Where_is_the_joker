
let jokerPlace = Math.round(Math.random() * 3); 
let gameOver = false;
let countOfClicks = 0;

const onClick = (card) => {
    if (gameOver === true){ //block click on card
        return;
    }
    
    countOfClicks = countOfClicks + 1;
    jokerImage(card);

    if (card === jokerPlace){
        let win = $("<div></div>").html("You win!");
        $(".result").html(win);
        gameOver = true;
    }

    else { 
        if (countOfClicks === 2) {
            gameOver = true;
            let lost = $("<div></div>").html("You lost!");
            $(".result").html(lost); 
        }
        else if (countOfClicks === 1) {
            let next = $("<div></div>").html("Open next card");
            $(".result").html(next);
        }
    }

    if (gameOver === true) {
    let button = $("<button></button").html("New game")
                    .css("white-space", "nowrap")
                    .addClass(["btn", "btn-success"])
                    .click(newGame);
    $(".result-button").html(button);
    }
}

const jokerImage = (card) => {
    if (jokerPlace === card) {
        $("#frog"+card).attr("src", "knight.png").addClass("animate__animated animate__flipInY");
    } 
    else {
        $("#frog"+card).attr("src", "").addClass("animate__animated animate__flipInY");
    }
}

const newGame = () => {
    gameOver = false;

    countOfClicks = 0;

    $("#frog1").attr("src", "frog.jpg")
    .removeClass("animate__animated animate__flipInY")
    .addClass("animate__animated animate__flipInX");

    $("#frog2").attr("src", "frog.jpg")
    .removeClass("animate__animated animate__flipInY")
    .addClass("animate__animated animate__flipInX");

    $("#frog3").attr("src", "frog.jpg")
    .removeClass("animate__animated animate__flipInY")
    .addClass("animate__animated animate__flipInX");

    $(".result").html("");

    $(".result-button").html("");

    jokerPlace = Math.round(Math.random() * 3);
}