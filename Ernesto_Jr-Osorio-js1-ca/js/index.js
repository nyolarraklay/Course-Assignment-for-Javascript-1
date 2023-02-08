const resultContainer = document.querySelector(".results");

const key = "138f1bf38f524142a0567e16b9cf6819";
const url = `https://newsapi.org/v2/everything?q=tesla&from=2023-01-08&sortBy=publishedAt&apiKey=${key}`;

async function getData (){
  
  const response = await fetch (url);
  const json = await response.json();

console.log(json);
 const data = json.articles

for(i=0; i < data.length; i++){
  if(!data[i].title) {
    continue;
  }

  resultContainer.innerHTML += `<a href="details.html?author=${data[i].author}" class="cards"><h4>${data[i].title}</h4> <p>${data[i].content}</p><h5>${data[i].author}</h5> </a>`;
}

}

getData ()