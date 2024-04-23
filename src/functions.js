

function colour_mix(rgb_colour1, rgb_colour2) {

  const mixMap = {
    "redblue": "fuchsia",
    "redgreen": "yellow",
    "greenblue": "aqua",
    "redred": "red",
    "blueblue": "blue",
    "greengreen": "green"
  };

  const colours = [rgb_colour1.toLowerCase(), rgb_colour2.toLowerCase()].sort().join("");

  if (!(colours in mixMap)) {
    return "Error";
  }


  return mixMap[colours];
}




function largest_product(val1, val2, val3) {
 
  const minVal = Math.min(val1, val2, val3);
  const minValIndex = [val1, val2, val3].indexOf(minVal);
  const vals = [val1, val2, val3];
  vals.splice(minValIndex, 1);
  const secondMinVal = Math.min(...vals);

  return Math.max(val1, val2, val3) * secondMinVal;
}


function day_of_the_week(day_num) {

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


  if (day_num < 1 || day_num > 7) {
    return "Error";
  }


  return daysOfWeek[day_num - 1];
}

function pay_raise(status, years, salary) {
  let raisePercentage;

  if (status === 'F') {
    if (years >= 10) {
      raisePercentage = 0.05;
    } else if (years < 4) {
      raisePercentage = 0.015;
    } else {
      raisePercentage = 0.02;
    }
  } else if (status === 'P') {
    if (years >= 10) {
      raisePercentage = 0.03;
    } else if (years < 4) {
      raisePercentage = 0.01;
    } else {
      raisePercentage = 0.02;
    }
  } else {
    return "Error: Invalid employment type";
  }


  const raiseAmount = salary * raisePercentage;
  const newSalary = salary + raiseAmount;

  return newSalary.toFixed(2);
}


function is_leap(year) {

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}



export default {colour_mix, largest_product, day_of_the_week, pay_raise, is_leap};


