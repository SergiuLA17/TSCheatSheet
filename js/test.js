//append numberr
function easyLoop() {
    let result = "";
    for (let i = 0; i <= 100; i++) {
        if (i % 7 === 0) {
            result += i;
        }
    }
    return result;
}


function strangeWord(word) {
    let res = "";

    for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
            res += word[i]
        }
    }

    return res;
}


function goldenMiddle(a, b) {
    let res = [];

    res.push(a[1])
    res.push(b[1])
    return res;
}


function theGround(obj) {
    if (obj.name.length === obj.category.length) {
        return obj.name;
    } else if (obj.name.length > obj.category.length) {
        return obj.name;
    } else
        return obj.category;
}

function checkPassword(password, password_repeat) {
    return password.length >= 20 && password === password_repeat;
}

function countOdds(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}

function difference42(n) {
    return Math.abs(n - 42);
    //Math este clasa care contine metode pentru operatii matematice, abs este metoda care returneaza valoarea absoluta a unui numar, adica fara semn
}


function reverseLetters(chars) {

    return chars.reverse();
}


function firstJSON(key, value) {
    return JSON.stringify({[key]: value});
}

function reverseLetters(chars) {
    return chars.reverse();
}

const car = {
    wheels: 4,
    doors: 4,
    power: '100PS',
}

function is42(a, b) {
    if (a === 42 || b === 42 || a + b === 42)
        return true;
    else
        return false;
}

function totalProduct(a, b) {
    if (a !== b)
        return a + b;
    else
        return a * b;
}

function checkPassword(password, password_repeat) {
    return password.length >= 20 && password === password_repeat;

}

function more4than0(n) {
    let countZero = 0;
    let countFour = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] === 0) {
            countZero++;
        } else if (n[i] === 4) {
            countFour++;
        }
    }

    return countFour > countZero;
}

function foo(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            string[i] = '_'
        }
    }
    return string;
}

function hangman(hangmanString) {
    return [...hangmanString].map((letter, index) => index % 2 ? letter : '_').join('');
}


function object2JSON(obj) {
    return JSON.stringify(obj);
}

function foo(correct, wrong) {
    let res = [];
    for (let i = 0; i < correct.length; i++) {
        if (correct[i] !== wrong[i]) {

            res.push(correct[i]);
        }
    }

    return res;
}

function foo1(className) {
    const el = document.createElement('p')
    el.classList.add(className)
    el.innerText = className[0].toUpperCase() + className.slice(1)
    document.body.appendChild(el)
}

function foo2(bin) {
    let res = 0;
    let power = bin.length - 1;
    for (let i = 0; i < bin.length; i++) {
        res += parseInt(bin[i]) * Math.pow(2, power);

        power--;
    }
    return res;
}


//Given are two variables child1 and child2 with a numeric value between 0 and 99. Return true if a child is between 0 and 14 (0 and 14 inclusive). Return false if both or none in between.

function littleChild(child1, child2) {
    if ((child1 >= 0 && child1 <= 14) && (child2 >= 0 && child2 <= 14)) {
        return true;
    } else if ((child1 >= 0 && child1 <= 14) || (child2 >= 0 && child2 <= 14)) {
        return true;
    } else
        return false;
}
console.log(foo4(0, 14));