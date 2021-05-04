let libButton = document.getElementById('lib-button');

let libIt = function() {
    let storyDiv = document.getElementById("story");
    let Noun = document.getElementById("noun").value;
    let Adjective = document.getElementById("adjective").value;
    let Person = document.getElementById("person").value;
    let Verb = document.getElementById("verb").value;
    let Place = document.getElementById("place").value;
storyDiv.innerHTML = `I took my ${Noun} and ${Adjective} it. ${Person} did not ${Verb} in ${Place}`;


 
};


libButton.addEventListener('click', libIt);
