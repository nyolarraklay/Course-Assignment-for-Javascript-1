const recipesContainer = document.querySelector(".recipes");
const cardContainer = document.querySelector(".cards");
const searchFood = document.querySelector(".search");

const key = "daf0594025214320ab5b190b445c944e";


const url = `https://api.spoonacular.com/food/menuItems/search?query=chicken&apiKey=${key}`;

async function getFood (){
  
  try {
    const response = await fetch (url);
    const json = await response.json();

    console.log(json);

    recipesContainer.innerHTML = "";

    const search = json.menuItems;
    
    console.log(search)

    search.forEach(function(chickens) {
      recipesContainer.innerHTML += `<a href="detailsRecipe.html?id=${chickens.id}" class="cards"><h2>${chickens.title}</h2><img src="${chickens.image}"/><h5>Restaurant Chain: ${chickens.restaurantChain}</h5></a>`;
     }); 
  }

  catch(error) {
    console.log(error);
    container.innerHTML = message("error", error);
 }  
}

getFood ();



