function hello(name){
    return(`hello ${name}`);
}

function celsius2fahrenheit(celsius){
    const fahrenheit = celsius *9 /5 + 32;
    return(fahrenheit);
}

function sf2acres(sf){
    const acres = sf/43560
    return(acres);
}

export {hello, celsius2fahrenheit, sf2acres}
