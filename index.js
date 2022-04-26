// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return(`This Saturday, I want to ${activity}!`);
}

function mondayWork (workActivity = 'go to the office'){
    return (`This Monday, I will ${workActivity}.`);
}

function wrapAdjective(param="*") {
    const part1 = "You are"
    return function innerFunction(param2="a hard worker") {
return `${part1} ${param}${param2}${param}!`
    };
}

wrapAdjective('||', 'a dedicated programmer')