const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const result = document.getElementById('answerNum')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+';

plusBtn.onclick = function () {
    action = '+'
};

minusBtn.onclick = function () {
    action = '-'
};


// submitBtn.onclick = function () {
//     if (action == '+') {
//         const sum = Number(input1.value) + Number(input2.value);
//         result.textContent = sum
//     } else if (action == '-') {
//         const sum = Number(input1.value) - Number(input2.value);
//         result.textContent = sum
//     }
// };


let sum = Number(input1.value) + Number(input2.value);
result.textContent = sum;

submitBtn.onclick = function() {
    switch(action) {
        case '+': {
            const sum = Number(input1.value) + Number(input2.value);
            result.textContent = sum
            break;
        }
        case '-': {
            const sum = Number(input1.value) - Number(input2.value);
                result.textContent = sum
        }
    };
};

    



