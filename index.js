// code your solution here

//default function
function saturdayFun(activity="roller-skate") {

    return `This Saturday, I want to ${activity}!`
    
}

const mondayWork = function (activivty ="go to the office"){

    return `This Monday, I will ${activivty}.`
}

// level scope
function outer (greeting , msg=  "its a fine day to play "){

    return function (name, activity){
        return `${greeting} ${name} ${msg} ${activity}`
    }


}
//scope chain
function wrapAdjective (flair ='*'){
 return function (adjective = 'special'){
    return `You are ${flair}${adjective}${flair}!`
 }
}
console.log(wrapAdjective()("a hard worker") )