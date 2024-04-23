function hello(name){
    return(`hello ${name}`);
}

function computeAirQuality(number){
    let air;
    if(number < 50){
      air = 'Good';
    } else if(number < 100){
      air = 'Moderate';
    } else if(number < 150){
      air = 'Unhealthy for Sensitive Groups';
    } else if(number < 200){
      air = 'Unhealthy';
    } else if(number < 300){
      air = 'Very Unhealthy';
    } else {
      air = 'Hazardous';
    }
  
    return `If the air quality index is ${number} AQI, the air quality is ${air}`;
  }

function sf2acres(sf){
    const acres = sf/43560
    return(acres);
}

function calculateSlope(x1, y1, x2, y2) {
    const rise = y2 - y1;
    const run = x2 - x1;
  
    if (run === 0) {
      return "Infinity";
    }
  
    const slope = rise / run;
    return slope;
  }

export {hello, computeAirQuality, sf2acres, calculateSlope}
