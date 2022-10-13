r1 = 1;
r2 = 50;
ran1 = r1 + (r2 - r1) * Math.random();
rand1 = Math.round(ran1);
console.log(rand1);
var count1 = 0;

function random1() {
    var name1 = document.getElementById('player1name').value;
    console.log(name1);

    let guess1 = document.getElementById('player1guess').value;
    console.log(guess1);

    if (guess1 == rand1) {
        document.getElementById('p1lessormore').style.color = "rgb(11, 218, 11)";
        document.getElementById('p1lessormore').innerHTML = "You got it right in " + (count1 + 1) + " tries !";
    }

    else if (guess1 < rand1) {
        document.getElementById('p1lessormore').style.color = "rgb(255, 0, 0)";
        document.getElementById('p1lessormore').innerHTML = "GO HIGHER !";
        count1++;
    }

    else {
        document.getElementById('p1lessormore').style.color = "rgb(255, 0, 0)";
        document.getElementById('p1lessormore').innerHTML = "GO LOWER !";
        count1++;
    }

}


r1 = 1;
r2 = 50;
ran2 = r1 + (r2 - r1) * Math.random();
rand2 = Math.round(ran2);
console.log(rand2);
var count2 = 0;

function random2() {
    var name1 = document.getElementById('player1name').value;
    var name2 = document.getElementById('player2name').value;
    console.log(name2);

    var guess2 = document.getElementById('player2guess').value;
    console.log(guess2);

    if (guess2 == rand2) {
        document.getElementById('p1lessormore2').style.color = "rgb(11, 218, 11)";
        document.getElementById('p1lessormore2').innerHTML = "You got it right in " + (count2 + 1) + " tries !";
        if (count1 > count2) {
            document.getElementById('winner').innerHTML = name2 + "<br>wins !";
        }
        else if (count1 == count2) {
            document.getElementById('winner').innerHTML = "Tie !";
        }
        else {
            document.getElementById('winner').innerHTML = name1 + "<br>wins !";
        }
    }

    else if (guess2 < rand2) {
        document.getElementById('p1lessormore2').style.color = "rgb(255, 0, 0)";
        document.getElementById('p1lessormore2').innerHTML = "GO HIGHER !";
        count2++;
    }

    else {
        document.getElementById('p1lessormore2').style.color = "rgb(255, 0, 0)";
        document.getElementById('p1lessormore2').innerHTML = "GO LOWER !";
        count2++;
    }

}