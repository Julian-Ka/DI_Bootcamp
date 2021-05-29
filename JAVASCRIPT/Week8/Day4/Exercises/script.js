//Exercise 1

// fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&limit=25&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
// .then(response => response.json())
// .then(data => console.log(data));


//Exercise 2 retrieving 10 gifs about sun

// fetch('https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
// .then(response => response.json())
// .then(data => console.log(data));

//Daily Challenge
// let sec1;
const getUserInput = () => {
    let p = document.getElementById('searchInput').value;
    document.getElementById('searchInput').value='';

    fetch(`https://api.giphy.com/v1/gifs/search?q=${p}&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
 .then(response => response.json())
 .then(data => {
     console.log(data)

     let sec1 = document.createElement('section') //create section
     sec1.setAttribute('id', 'test'); //declare id of section to robobox
     document.body.append(sec1)

        let img = document.createElement('img');
         img.setAttribute('id', 'test')
         img.src = data.data[0].images.original.url
         sec1.appendChild(img);
         let btn = document.createElement('BUTTON');
       btn.innerText = 'Delete';
       btn.onclick = function () {
        sec1.remove();
       };
       sec1.appendChild(btn);
       
 });
}

const deleteAll = () => {

   location.reload();
}