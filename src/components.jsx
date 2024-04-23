import {hello,computeAirQuality, sf2acres, calculateSlope} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("You") == "{hello('You')}"</p>
      <p>hello("Me") == "{hello('Me')}"</p>
      <p>hello("Everyone") == "{hello('Everyone')}"</p>
    </section>;
}



function Question2() {
  return <section>
      <div>
        <h1>Air Quality</h1>
        <p>{computeAirQuality(25)}</p>
        <p>{computeAirQuality(75)}</p>
        <p>{computeAirQuality(125)}</p>
        <p>{computeAirQuality(175)}</p>
        <p>{computeAirQuality(250)}</p>
        <p>{computeAirQuality(350)}</p>
      </div>
    </section>;
}



function Question3(){
    return <section>
3. There are 43,560 square feet per acre. Write a program that converts square feet to acres. Test at least 3 conversions.
    <h2>Results</h2>
    <p>sf2acres(10000) == {sf2acres(10000)}</p>
    </section>
}



function Question4() {
    return (
      <section>
        <SlopeComponent />
      </section>
    );
  }
  
  class SlopeComponent extends React.Component {
    render() {

      const point1 = { x: 1, y: 2 };
      const point2 = { x: 3, y: 4 };
      const point3 = { x: 5, y: 3 };
      const point4 = { x: 7, y: 9 };
      const point5 = { x: 0, y: 0 };
      const point6 = { x: 0, y: 5 };
  
      return (
        <div>
          <h1>Slope Calculation</h1>
          <p>Slope of line (1, 2) to (3, 4): {calculateSlope(point1.x, point1.y, point2.x, point2.y)}</p>
          <p>Slope of line (5, 3) to (7, 9): {calculateSlope(point3.x, point3.y, point4.x, point4.y)}</p>
          <p>Slope of line (0, 0) to (0, 5): {calculateSlope(point5.x, point5.y, point6.x, point6.y)}</p>
        </div>
      );
    }
  }
  



export {Question1, Question2, Question3, Question4}
