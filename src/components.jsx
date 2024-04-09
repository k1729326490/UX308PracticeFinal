import {hello,celsius2fahrenheit, sf2acres} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("You") == "{hello('You')}"</p>
      <p>hello("Me") == "{hello('Me')}"</p>
      <p>hello("Everyone") == "{hello('Everyone')}"</p>
    </section>;
}

function Question2(){
    return <section>
2.Write a function that converts celsius to fahrenheit
<h2>reuslt</h2>
<p>celsius2fahrenheit(0) == "{celsius2fahrenheit(0)}"</p>
<p>celsius2fahrenheit(100) == "{celsius2fahrenheit(100)}"</p>
<p>celsius2fahrenheit(36) == "{celsius2fahrenheit(36)}"</p>
    </section>
}

function Question3(){
    return <section>
3. There are 43,560 square feet per acre. Write a program that converts square feet to acres. Test at least 3 conversions.
    <h2>Results</h2>
    <p>sf2acres(10000) == {sf2acres(10000)}</p>
    </section>
}

export {Question1, Question2, Question3}
