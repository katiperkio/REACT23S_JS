/*
let temperature = parseInt(prompt('What is the outdoor temperature in Celsius?'));

if (temperature < 15 && temperature > 0) {
    console.log('You should wear a jacket');
} else if (temperature <= 0 && temperature > -50) {
    console.log('It is freezing, wear enough clothes');
} else if (temperature >= 16 && temperature < 25) {
    console.log('No need for a jacket');
} else if (temperature >= 25 && temperature < 50) {
    console.log('You should wear light clothes and preferably stay in shade');
} else if (temperature >= 50 || temperature <= -50) {
    console.log('Just try to survive');
}
*/

let season = prompt('What is your favorite season?').toLowerCase();

console.log(season);

switch (season) {
    case 'spring':
        console.log('Spring blossom');
        break;
    case 'summer':
        console.log('Long days of warm sunshine');
        break;
    case 'fall':
        console.log('Cozy vibes in fall colors');
        break;
    case 'winter':
        console.log('Winter sports in sparkling snow');
        break;
    default:
        console.log('Did you enter a season?');
        break;
}