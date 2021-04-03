function saturdayFun(skate="roller-skate") {
    return (`This Saturday, I want to ${skate}!`);
}

function mondayWork(activity="go to the office") {
    return (`This Monday, I will ${activity}.`)
}

function wrapAdjective(empathic="*") {
    return function (result="special") {

    return `You are ${empathic}${result}${empathic}!`;
    }
}

const Calculator = {
    add: function(num1, num2){
        return num1 + num2;
    }, subtract: function(num1, num2){
        return num1 - num2;
    }, multiply: function(num1, num2){
        return num1 * num2;
    }, divide: function(num1, num2){
        return num1 / num2;
    },
}

function actionApplyer (start, array){
    let integer = start;
    for (let x = 0; x < array.length; x++) {
        integer = array[x](integer);
    }
    return integer;
}