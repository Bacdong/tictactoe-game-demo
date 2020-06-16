var flag = true;
var count = 0;
var xArray = [];
var yArray = [];
const WINNING = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7], [1, 7, 4], [4, 7, 1], [4, 1, 7], [7, 4, 1], [7, 1, 4],
    [2, 5, 8], [2, 8, 5], [5, 2, 8], [5, 8, 2], [8, 2, 5], [8, 5, 2],

    [0, 4, 8], [0, 8, 4], [4, 0, 8], [4, 8, 0], [8, 4, 0], [8, 0, 4],
    [2, 4, 6], [2, 6, 4], [4, 2, 6], [4, 6, 2], [6, 2, 4], [6, 4, 2],

    // DK Win
    [0, 2, 1],
    [1, 2, 0],
    [1, 0, 2],
    [2, 1, 0],
    [2, 0, 1],

    [3, 5, 4],
    [4, 3, 5],
    [4, 5, 3],
    [5, 4, 3],
    [5, 3, 4],

    [6, 8, 7],
    [7, 6, 8],
    [7, 8, 6],
    [8, 7, 6],
    [8, 6, 7],

    [0, 6, 3],
    [3, 0, 6],
    [3, 6, 0],
    [6, 0, 3],
    [6, 3, 0],
];

function mark(index) {
    var btn = document.getElementsByClassName('btn-click')[index];
    if (flag) {
        xArray.push(index);
        checkWin();
        btn.innerText = "X";
        btn.classList.add('x-class');
    } else {
        yArray.push(index);
        checkWin();
        btn.innerText = "O";
        btn.classList.add('o-class');
    }
    flag = !flag;
    btn.setAttribute('disabled', 'true');
    btn.style.cursor = 'not-allowed';
    count++;
    if (count == 9) {
        document.querySelector('.overlay-title').innerText = 'Play Again!';
        setTimeout(function() {
            document.getElementById('overlay').style.display = 'flex';
        }, 500);

        document.querySelector('.overlay-btn').addEventListener('click', function() {
            document.querySelector('.overlay-title').innerText = 'Loading...';
            location.reload();
        });
    }
    checkWin();
}

function checkWin() {
    WINNING.forEach(function(isWin) {
        // var winCondition = isWin.forEach(function(win) {
        //     // console.log(win);
        //     return win;
        // });
        // var currentCondition = xArray.forEach(function(x) {
        //     // console.log(x);
        //     return x;
        // });
        // console.log(winCondition);
        // console.log(currentCondition);
        

        // if (winCondition == currentCondition) {
        //     console.log('X\'s Win!');
            
        // } else {
        //     console.log('Y\'s Win!');
        // }
        
        if (JSON.stringify(xArray) == JSON.stringify(isWin)) {
            console.log(JSON.stringify(xArray));
            

            document.getElementById('overlay').style.display = 'flex';
            document.querySelector('.overlay-title').innerText = 'X\'s Win!';

            document.querySelector('.overlay-btn').addEventListener('click', function() {
                location.reload();
            });
            
            
        } else if (JSON.stringify(yArray) == JSON.stringify(isWin)) {
            console.log(yArray);

            document.getElementById('overlay').style.display = 'flex';
            document.querySelector('.overlay-title').innerText = 'Y\'s Win!';

            document.querySelector('.overlay-btn').addEventListener('click', function() {
                location.reload();
            });

        } else {
            return true;
        }
    });
}

// function checkWin() {
//     var elements = document.getElementsByClassName('container-index');

//     var flag = false;
//     var eleLength = elements.length;
//     var x_class = [];
//     var y_class = [];
//     // console.log(eleLength);

//     for (var i = 0; i < eleLength; ++i) {
       

//         x_class.push(elements[i].firstChild);


//         for (var j = 0; j < x_class.length; ++j) {
//             var a = document.querySelectorAll('x_class');
//             console.log('a= '+a);

//         }

//         // console.log(elements[i].firstChild);
//         console.log(x_class.length);
        
//     }

//     // for (var index = 0; index < 8; ++index) {
//     //     const winCondition = WINNING[index];
//     //     var a = gameState[winCondition[0]];
//     //     var b = gameState[winCondition[1]];
//     //     var c = gameState[winCondition[2]];
//     //     console.log(`a = ${a}`);
//     //     console.log(`b = ${b}`);
//     //     console.log(`c = ${c}`);
        

//     //     if (a == '' || b == '' || c == '') {
//     //         continue;
//     //     }
//     //     if (a == b && b == c) {
//     //         flag = true;
//     //         break;
//     //     }
//     // }

//     // if (flag == true) {
//     //     document.getElementById('overlay').style.display = 'flex';
//     //     document.querySelector('.overlay-title').innerText = 'X\'s Win!';

//     //     document.querySelector('.overlay-btn').addEventListener('click', function() {
//     //         location.reload();
//     //     });
//     // }
// }

// checkRow();

// function checkWin(curentClass) {
//     return WINNING.some(win => {
//         return win.every(index => {
//             return btn[index].classList.contains(curentClass);
//         })
//     })
