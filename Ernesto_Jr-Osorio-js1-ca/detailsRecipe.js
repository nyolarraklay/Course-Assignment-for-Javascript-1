const container = document.querySelector(".details");
const title = document.querySelector("title")

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

console.log(params)

const id = params.get("id");

console.log(id)

const key = "daf0594025214320ab5b190b445c944e";
const url = `https://api.spoonacular.com/food/menuItems/${id}?&apiKey=${key}`;

async function getFood (){
  
  try {
    const response = await fetch (url);
    const chicken = await response.json();
   
    console.log(chicken)

    container.innerHTML = "";

    createHtml(chicken);
    
  }
  catch(error) {
    console.log(error);
    container.innerHTML = message("error", error);
 }

}
getFood ();
 
  
  function createHtml(chicken) {
  title.innerHTML = `${chicken.title}`;
  container.innerHTML += `<h1>${chicken.title}</h1> 
  <div class="content-container">
  <p> <span>Restaurant:</span> ${chicken.restaurantChain} </p>
  <img src="${chicken.image}" alt="delicious burger from ${chicken.restaurantChain}"/></div>
  <div class="description">
  <h3>Nutrition</h3><li>Calories: ${chicken.nutrition.calories}</li>
  <li>Carbs: ${chicken.nutrition.carbs}</li>
  <li>Fats:${chicken.nutrition.fat}</li>
  <li>Protein:${chicken.nutrition.protein}</li>
  </div>
  </div>`
  }








