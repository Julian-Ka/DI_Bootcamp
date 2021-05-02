let planets = ["Earth", "Venus", "Jupiter", "Uranus", "Neptune"];

//for each planet in the array create a <div> using createElement.
//this div should have a class named "planet"
for (let i = 0; i < planets.length; i++) {
    let planetName = planets[i];
    //creating a div
    let divPlanet = document.createElement("div");
    //adding a class
    //divPlanet.classList.add("planet");
    //append to each div the name of the Planet
    let planetTxt = document.createTextNode(planetName);

    
    
    divPlanet.appendChild(planetTxt)
    divPlanet.style.color = "white";
    divPlanet.classList.add("planet", planetName);
    let section = document.getElementsByClassName("listPlanets")[0];
    //append the div to the section
    section.appendChild(divPlanet);
}