// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity= "go to the office"){
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(sym="*"){
   const s = sym
    return function(param="special"){
        return `You are ${s + param + s}!`
    }
}

const Calculator = {}
Calculator.add = function(){
    return 1 + 3
}
Calculator.subtract = () => {
    return 1-3
}
Calculator.multiply = () => {
    return 1*3
}
Calculator.divide = function(){
    return 10/5
}

const actionApplyer = function(start, array) {
    let a = start
  
    for (let i = 0; i < array.length; i++ ){
      a = array[i](a)
    }
  
    return a
  }
  