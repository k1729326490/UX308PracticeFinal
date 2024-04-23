import {colour_mix, largest_product, day_of_the_week, pay_raise, is_leap} from './function';


function Question1() {
    return mixMap[colours];
  };

  const colour1 = "green";
  const colour2 = "red";
  const result1 = colour_mix(colour1, colour2);

  const colour3 = "blue";
  const colour4 = "red";
  const result2 = colour_mix(colour3, colour4);

  const colour5 = "green";
  const colour6 = "blue";
  const result3 = colour_mix(colour5, colour6);


  return (
    <section>
      <div>
        <h1>Colour Mixing</h1>
        <p>Colour mix of {colour1} and {colour2}: {result1}</p>
        <p>Colour mix of {colour3} and {colour4}: {result2}</p>
        <p>Colour mix of {colour5} and {colour6}: {result3}</p>
      </div>
    </section>
  );


  


  function Question2() {
    const val1 = 3;
    const val2 = 7;
    const val3 = 2;
    const result = largest_product(val1, val2, val3);
  
    return (
      <section>
        <div>
          <h1>Largest Product Calculation</h1>
          <p>Largest product of {val1}, {val2}, and {val3} is: {result}</p>
        </div>
      </section>
    );
  }
  



  function Question3() {
    const dayNumber = 3;
    const dayName = day_of_the_week(dayNumber);
  
    return (
      <section>
        <div>
          <h1>Day of the Week Calculation</h1>
          <p>Day of the week for day number {dayNumber} is: {dayName}</p>
        </div>
      </section>
    );
  }



function Question4() {
  const status1 = 'F';
  const years1 = 2;
  const salary1 = 25000;
  const newSalary1 = pay_raise(status1, years1, salary1);

  const status2 = 'P';
  const years2 = 5;
  const salary2 = 30000;
  const newSalary2 = pay_raise(status2, years2, salary2);

  return (
    <section>
      <div>
        <h1>Pay Raise Calculation</h1>
        <p>New salary for Full Time employee with 2 years service: ${newSalary1}</p>
        <p>New salary for Part Time employee with 5 years service: ${newSalary2}</p>
      </div>
    </section>
  );
}




function Question5() {

  const year1 = 1999;
  const result1 = is_leap(year1);

  const year2 = 2000;
  const result2 = is_leap(year2);

  return (
    <section>
      <div>
        <h1>Leap Year Test</h1>
        <p>Is year {year1} a leap year? {result1.toString()}</p>
        <p>Is year {year2} a leap year? {result2.toString()}</p>
      </div>
    </section>
  );
}



export {Question1, Question2, Question3, Question4, Question5}
