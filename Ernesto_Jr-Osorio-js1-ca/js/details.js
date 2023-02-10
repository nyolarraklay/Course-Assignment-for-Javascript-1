const container = document.querySelector(".container_content");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

console.log(params)

const id = params.get("id");

console.log(id)



const key = "10160084970342798";
const url = `https://www.superheroapi.com/api.php/${key}/${id}`;

async function getData (){
  
  const response = await fetch (url);
  const json = await response.json();
 
console.log(json)


const dataImage = json.image;
const dataDescription = json.appearance;
const dataBiography =json.biography;



  createHtml(json);




  function createHtml(json) {


    container.innerHTML += `<h1>${json.name}</h1> <div class="content-container">
    <img class="image" 
        src="${dataImage.url}";</div>
    <div class="description">
    <p>Gender: ${dataDescription.gender}</p>
    <p>Race: ${dataDescription.race}</p>
    <p>Aliases: ${dataBiography.aliases}</p>
    <p>Publisher: ${dataBiography.publisher}</p>
    </div>
    
    </div>`

  }}

  getData ()