
let operator = '';
let prev_Value = '';
let current_Value = '';
const operators = document.querySelectorAll(".operator");
const buttons = document.querySelectorAll(".key");
const enter = document.querySelector(".operator_enter");
const clear = document.querySelector(".clear");
const prev_Num = document.querySelector(".prev-num");
const current_Num = document.querySelector(".current-num");

//it makes all the number show up in the display when clicked
buttons.forEach((button) => button.addEventListener('click', function(e){
handleNumber(e.target.textContent)
current_Num.textContent = current_Value;
}));


//store the numbers to the variable current_Value
function handleNumber(num){
    current_Value += num;
};

////it makes all the operators show up in the display when clicked
operators.forEach((op) => op.addEventListener('click', function(e){
    handleOperator(e.target.textContent);
    prev_Num.textContent = prev_Value + `${operator}`;
   current_Num.textContent = current_Value;
}));
//iT stores the operators to the variable operator
function handleOperator(op){
    operator = op;
    prev_Value = current_Value;
    current_Value = '';
    
};
// Its Clears the display
clear.addEventListener('click', function(){
    prev_Value = '',
    current_Value = '';
    operator = '';
    prev_Num.textContent = current_Value;
    current_Num.textContent = current_Value;
});


enter.addEventListener('click', function(){
    operate();
    prev_Num.textContent = '';
    current_Num.textContent = prev_Value;
});


//it makes the math
function operate(){
    prev_Value = Number(prev_Value);
    current_Value = Number(current_Value);
    if(operator === '+'){
       prev_Value += current_Value;
    } else if (operator === '-'){
       prev_Value -= current_Value;
    } else if (operator === '/'){
       prev_Value /= current_Value;
    } else if (operator === '*'){
        prev_Value *= current_Value;
    }

};

