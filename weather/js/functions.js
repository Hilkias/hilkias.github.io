/* *************************************
*  Weather Site JavaScript Functions
************************************* */

console.log('My javascript is being read.');

// Variables for Function Use
const temp = 31;
const speed = 5;
const direction = "NNE"; //Set your own value
const phrase = "rain";
//call function
buildWC(speed, temp);

// Calculate the Windchill
function buildWC(speed, temp) {
    const feelTemp = document.getElementById('feelTemp');

    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

    // Round the answer down to integer
    wc = Math.floor(wc);

    // If chill is greater than temp, return the temp
    wc = (wc > temp) ? temp : wc;

    // Display the windchill
    console.log(wc);
    // wc = 'Feels like '+wc+'°F';
    feelTemp.innerHTML = wc;
}

//call function
windDial(direction);
// Wind Dial Function
function windDial(direction){
    // Get the container
    const dial = document.getElementById("dial");
    console.log(direction);
    // Determine the dial class
    switch (direction){
     case "North":
     case "N":
      dial.setAttribute("class", "n"); //"n" is the CSS rule selector
      break;
     case "NE":
     case "NNE":
     case "ENE":
      dial.setAttribute("class", "ne");
      break;
     case "NW":
     case "NNW":
     case "WNW":
      dial.setAttribute("class", "nw");
      break;
     case "South":
     case "S":
      dial.setAttribute("class", "s");
      break;
     case "SE":
     case "SSE":
     case "ESE":
      dial.setAttribute("class", "se");
      break;
     case "SW":
     case "SSW":
     case "WSW":
      dial.setAttribute("class", "sw");
      break;
     case "East":
     case "E":
      dial.setAttribute("class", "e");
      break;
     case "West":
     case "W":
      dial.setAttribute("class", "w");
      break;
    }
   }

const keyword = getCondition(phrase);
   function getCondition(pharse){
       if(pharse.includes("cloudy") || pharse.includes("party cloudy") || pharse.includes("overcast")){
            let keyword = "clouds";
            return keyword;
       }
       else if (pharse.includes("rain") || pharse.includes(rainy) ||pharse.includes("wet weather")){
            let keyword = "rain";
            return keyword;
       }
       else if (pharse.includes("snow") || pharse.includes(snowy) ||pharse.includes("wet weather")){
        let keyword = "snow";
        return keyword;
        }
        else if (pharse.includes("fog") || pharse.includes(foggy) ||pharse.includes("wet weather")){
            let keyword = "fog";
            return keyword;
        }
        else if (pharse.includes("clear") || pharse.includes(sunny) ||pharse.includes("wet weather")){
          let keyword = "clear";
          return keyword;
        }
   }

   changeSummaryImage(keyword);
   function changeSummaryImage(keyword){
       const sectionContainer = document.getElementById("weatherContent");
       switch (keyword){
        case "clouds":
        sectionContainer.setAttribute("class", "clouds"); //"n" is the CSS rule selector
         break;
        case "rain":
        sectionContainer.setAttribute("class", "rain");
         break;
        case "fog":
        sectionContainer.setAttribute("class", "snow");
         break;
        case "snow":
        sectionContainer.setAttribute("class", "fog");
         break;
        case "clear":
        sectionContainer.setAttribute("class", "clear");
         break;
       }
   }