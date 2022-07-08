let counter = 1
let limit = document.getElementById('limit-slider').value;
let fizzRate = document.getElementById('fizz-slider').value;
let buzzRate = document.getElementById('buzz-slider').value;
fizzRate = 2;
buzzRate = 5;

let isBlackGhost = true;
let isBlueGhost = false;
let isWhiteGhost = false;

console.log(`Limit: ${limit}\nFizzRate: ${fizzRate}\nBuzzRate: ${buzzRate}`);

function fizzBuzz(limit) {  
  if (counter > limit) {
    return;
  } else {
    let isFizz = false;
    let isBuzz = false;
    isFizz = (counter % fizzRate) === 0 ? !isFizz : isFizz;
    isBuzz = (counter % buzzRate) === 0 ? !isBuzz : isBuzz;

    let textContent = getTextContent(isFizz, isBuzz, counter);

    changeGhost(counter, isFizz, isBuzz, textContent);

    counter++;
  }

  setTimeout(fizzBuzz, 750, limit);
}

fizzBuzz(limit);

function changeGhost(counter, isFizz, isBuzz, textContent) {
    if (counter % 3 === 1) {
        changeBlackGhost(isFizz, isBuzz, textContent);
    } else if (counter % 3 === 2) {
        changeBlueGhost(isFizz, isBuzz, textContent);
    } else {
        changeWhiteGhost(isFizz, isBuzz, textContent);
    }
}

function getTextContent(isFizz, isBuzz, counter) {
    if (!isFizz && !isBuzz) {
        return counter;
    } else if (isFizz && !isBuzz) {
        return "FIZZ";
    } else if (!isFizz && isBuzz) {
        return "BUZZ";
    } else {
        return "FIZZBUZZ";
    }
}

function changeBlackGhost(isFizz, isBuzz, text) {
    console.log("Black");
    if (!isFizz && !isBuzz) {
        document.getElementById('black-ghost').src = "/Images/blackNumber.png";
        document.getElementById('text1').textContent = "Count";
    } else if (isFizz && !isBuzz) {
        document.getElementById('black-ghost').src = "/Images/blackFizz.png";
    } else if (!isFizz && isBuzz) {
        document.getElementById('black-ghost').src = "/Images/blackBuzz.png";
    } else {
        document.getElementById('black-ghost').src = "/Images/blackFizzBuzz.png";
    }

    document.getElementById('text1').textContent = text;
};

function changeBlueGhost(isFizz, isBuzz, text) {
    console.log("Blue");
    if (!isFizz && !isBuzz) {
        document.getElementById('blue-ghost').src = "/Images/blueNumber.png";
    } else if (isFizz && !isBuzz) {
        document.getElementById('blue-ghost').src = "/Images/blueFizz.png";
    } else if (!isFizz && isBuzz) {
        document.getElementById('blue-ghost').src = "/Images/blueBuzz.png";
    } else {
        document.getElementById('blue-ghost').src = "/Images/blueFizzBuzz.png";
    }

    document.getElementById('text2').textContent = text;
};

function changeWhiteGhost(isFizz, isBuzz, text) {
    console.log("White");
    if (!isFizz && !isBuzz) {
        document.getElementById('white-ghost').src = "/Images/whiteNumber.png";
    } else if (isFizz && !isBuzz) {
        document.getElementById('white-ghost').src = "/Images/whiteFizz.png";
    } else if (!isFizz && isBuzz) {
        document.getElementById('white-ghost').src = "/Images/whiteBuzz.png";
    } else {
        document.getElementById('white-ghost').src = "/Images/whiteFizzBuzz.png";
    }

    document.getElementById('text3').textContent = text;
};