let input = document.getElementById('input');
// const conversion = document.getElementById('conversion');
// const select1 = document.getElementById('select1');


const arrows = document.getElementById('arrows');


select1.addEventListener('change', convert);
// select2.addEventListener('change', myConversion);

// arrows.addEventListener('click');

// function myConversion (){
//     // conversion.value = input.value;

// }

// function localStorage(){
    
// }



let select1 = kmToMiles;

let kmToMiles = (input * 0.62137);
let milesToKm = (input * 1.6);
let feetToMeters = (input * 0.3048);
let metersToFeet = (input * 3.28);
let cmToInches = (input * 0.39);
let inchesToCm = (input * 2.54);
console.log(input);



function convert(){
    if (select1 === km ) {
        return kmToMiles = ( {$input} * 0.6213 + miles);
    } else if (select1 === miles) {
        return milesToKm = ( {$input} * 1.6  + kilometers);
    } else {
        console.log("NONE");
    }
    
}


// const miles = document.getElementById('miles').addEventListener('click');
// const foot = document.getElementById('foot').addEventListener('click');
// const meters = document.getElementById('meters').addEventListener('click');
// const cm = document.getElementById('cm').addEventListener('click');
// const inches = document.getElementById('inches').addEventListener('click');

