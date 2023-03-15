// code your solution here
function saturdayFun(activity="roller-skate") {

    return `This Saturday, I want to ${activity}!`
    
}


const mondayWork = function (activivty ="go to the office"){

    return `This Monday, I will ${activivty}.`
}
//console.log(mondayWork("work from home"))


function outer (greeting , msg=  "its a fine day to play "){

    return function (name, activity){
        return `${greeting} ${name} ${msg} ${activity}`
    }


}

//console.log(outer("hello")("erick" , "basketball"));


const array = (function(thingToAdd){
    const base = 3;
    return [
      function () {
         return base + thingToAdd

      },
      function(){

        return base;
      },

    ];

})(2);

console.log(array (5))