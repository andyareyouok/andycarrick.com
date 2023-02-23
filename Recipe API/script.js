const recipeList = document.getElementById('display');
const searchInput = document.getElementById('search-input');
const defaultInput = 'thai';
const url = `https://api.edamam.com/search?q=`;
const url2 = `&app_id=0a632c71&app_key=ba9608ccef36ce5288c844cb14509336`;
const pagination = `&?from=0?&to=50`;

const findRecipes = (food) => {

    fetch(url + food + url2 + pagination, {

            method: 'get',

        })
        .then(function (res) {

            return res.json();

        })
        .then(function (data) {

            var obj = data.hits

            recipeList.innerHTML = obj.map(function (result) {

                //            return '<h1>' + result.recipe.label + '</h1>';

                return `

            
                <div class="recipe" style="background-image: linear-gradient(to right, rgba(0, 0, 0, 9), rgba(0, 0, 0, 0.1)), url('${result.recipe.image}'); ">

                    <div class="content">

                            <img id="poster" src="${result.recipe.image}">

                            <a class="a2" href="${result.recipe.url}"><h3 class="head" id="title">${result.recipe.label}</h3></a>
                            <strong class="myButton">${result.recipe.dietLabels}</strong>
                            <p><strong>Cooking Time: ${result.recipe.totalTime} Minutes</strong></p>

                            <div class="data-block">
                                <h3>Ingredients</h3>
                                <ul>
                                ${result.recipe.ingredientLines.map((line) => 
                                                                        
                                    `<li>${line}</li>`
                                                                        
                                    ).join('')}

                                </ul>

                            </div>

                    </div>
                </div>
        
            `;

            }).join('');

        })
        .catch(function (err) {
            console.log("error");
        });
};

findRecipes(defaultInput);

searchInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13 && searchInput.value) findRecipes(searchInput.value);
});
