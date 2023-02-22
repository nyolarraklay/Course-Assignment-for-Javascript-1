const container = document.querySelector(".details");
const title = document.querySelector("title");
const breadcrumb = document.querySelector(".breadcrumbs");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const key = "daf0594025214320ab5b190b445c944e";
const url = `https://api.spoonacular.com/food/menuItems/${id}?&apiKey=${key}`;

  async function getFood (){
    try {
      const response = await fetch (url);
      return await response.json();
    }
      catch(error) {
        console.log(error);
        container.innerHTML = message("error", error);
   }
      
  }
 

  

function createHtml (chicken) {
  
  title.innerHTML = `${chicken.title}`;
  const a = document.createElement("a");
  a.href = "index.html";
  a.innerText = `back to chicken menu`;
  const chickenName = document.createElement("h1");
  chickenName.innerText = chicken.title;
  const divContent = document.createElement("div");
  divContent.classList.add("content-container");
  const restaurant = document.createElement("p");
  const span = document.createElement("span");
  span.innerText = `Restaurant:`;
  restaurant.innerText = " " + chicken.restaurantChain;
  const imageDetails = document.querySelector("div");
  imageDetails.innerHTML = `<img>`;
  imageDetails.querySelector("img").src = chicken.image;

  const divNutrients = document.createElement("div");
  divNutrients.classList.add("description");
  const nutrition = document.createElement("h3");
  nutrition.innerText = "Nutrition";

  const ol = document.createElement("ul");
  const li1 =document.createElement("li");
  li1.innerText = `Calories: ${chicken.nutrition.calories}`;
  const li2 =document.createElement("li");
  li2.innerText = `Carbs: ${chicken.nutrition.carbs}`;
  const li3 =document.createElement("li");
  li3.innerText =  `Fats: ${chicken.nutrition.fat}`;
  const li4 =document.createElement("li");
  li4.innerText =  `Protein: ${chicken.nutrition.protein}`;
  ol.append(li1, li2, li3, li4);


  divContent.append(a, chickenName, restaurant, imageDetails);
  restaurant.prepend(span )
  divNutrients.append(nutrition, ol)

  document.body.prepend(divContent, divNutrients);
  
}

async function postsPage(){
  const posts = await getFood(url);
  createHtml(posts);
  return "All data has been fetched and rendered!";
}

postsPage().then(console.log)








