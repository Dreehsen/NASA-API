// Først fanger jeg 'article'en i vores html, som har fået class'en "apod", og lægger den i en variabel, jeg kalder apod:

const apod = document.querySelector(".apod");

// Jeg skal nu hente data fra NASA med API. Vores key er: dW187elRdzCb8UAeAbDre9JrzqR4gcj7um75SVXM

//Jeg bruger her en fetch-request, som er en indbygget funktion i Javascript, som kan bruges til at hente data fra en webserver eller en lokal json-fil. I dette tilfælde henter jeg data fra NASAs webserver om dagens astronomi-billede, APOD.

fetch("https://api.nasa.gov/planetary/apod?api_key=dW187elRdzCb8UAeAbDre9JrzqR4gcj7um75SVXM")

// Herefter bruger jeg .json-metoden til at pakke NASAs data ud med. Jeg har brugt en arrow function, da der bruges anonyme variabler.

.then((res) => res.json())
.then((data) => {

/* Jeg logger data til konsollen for at tjekke, at det er pakket korrekt ud og ikke stadig er i strings.

    console.log(data)

Jeg har modtaget følgende data fra NASA. 

    {
        date: "2023-04-03"
        explanation: "What causes this unusual curving structure near the center of our Galaxy? The long parallel rays slanting across the top of the featured radio image are known collectively as the Galactic Center Radio Arc and point out from the Galactic plane.  The Radio Arc is connected to the Galactic Center by strange curving filaments known as the Arches.  The bright radio structure at the bottom right surrounds a black hole at the Galactic Center and is known as Sagittarius A*.  One origin hypothesis holds that the Radio Arc and the Arches have their geometry because they contain hot plasma flowing along lines of a constant magnetic field.  Images from NASA's Chandra X-ray Observatory appear to show this plasma colliding with a nearby cloud of cold gas."
        hdurl: "https://apod.nasa.gov/apod/image/2304/GalCenRadioArc_MeerKat_1080.jpg"
        media_type: "image"
        service_version: "v1"
        title: "The Galactic Center Radio Arc"
        url: "https://apod.nasa.gov/apod/image/2304/GalCenRadioArc_MeerKat_1080.jpg" 
        
Det er et Javascript-object med syv properties, hvoraf jeg har valgt at jeg gerne vil bruge values fra fire keys. Det er explanation, title, date og url*/

// Jeg laver et nyt h2-element, som jeg tildeler variablen nasaTitle:

    const nasaTitle = document.createElement("h2");

// Jeg giver variablen title tekstindholdet fra title-property'en i vores data fra NASA

nasaTitle.textContent = data.title

// Jeg laver nu et billed-element i HTML'en, som jeg tildeler sourcen, der ligger i "url"-property'en i vores data fra NASA:

const nasaImage = document.createElement("img");
nasaImage.src = data.url;

//Jeg laver nu en paragraph til beskrivelsen af billedet og lægger beskrivelsen fra NASA deri:

const nasaDescription = document.createElement("p");
nasaDescription.textContent = data.explanation;

//Jeg gør nu det samme med 'date', som jeg lægger ind i en h3.

const date = document.createElement("h3");
date.textContent = data.date;

// Nu appender jeg de skabte elementer til min apod-article:

apod.append(nasaTitle);
apod.append(date);
apod.append(nasaImage);
apod.append(nasaDescription);
})

// Til sidst bruger jeg .catch-metoden til at give brugeren en fejl-besked, hvis API-kaldet fejler og dagens billede ikke kan vises.
.catch(error => alert("Der er sket en fejl"));