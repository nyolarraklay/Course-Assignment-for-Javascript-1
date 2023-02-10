const resultContainer = document.querySelector(".results");



const key = "10160084970342798";


const url = `https://www.superheroapi.com/api.php/${key}/search/flash`;

async function getData (){
  
  const response = await fetch (url);
  const json = await response.json();

console.log(json);

 const data = json.results;

 console.log(data)

 data.forEach(function(superHero) {
  resultContainer.innerHTML += `<a href="details.html?id=${superHero.id}" class="cards"><h2>${superHero.name}</h2>  </a>`;
 });
  

 }




getData ()