const container = document.querySelector(".container_content");

const queryString = document.location.search;

console.log(queryString)

const params = new URLSearchParams(queryString);

console.log(params)

const author = params.get("author");
const title = params.get("title");
const description = params.get("description");

console.log(author)


const key = "138f1bf38f524142a0567e16b9cf6819";
const url = `https://newsapi.org/v2/everything?q=tesla&${author}&from=2023-01-08&sortBy=publishedAt&apiKey=${key}`;

async function getData (){
  
  const response = await fetch (url);
  const json = await response.json();

console.log(json);
 const data = json.articles



  createHtml(data);

  function createHtml() {
    container.innerHTML += `<div class="cards"> <h3>${data.name}</h3> <p>${description}</p><h5>${author}</h5> </div>`;
  
  }

}






getData ()