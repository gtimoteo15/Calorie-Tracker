//get food nutrient data from query
//uses FoodData Central API from fdc.nal.usda.gov
//prints data onto console, next iteration will output onto app dynamically

const fetch = require("node-fetch");

const params = {
    api_key: 'fAzg1XPbecDcFUIgnq0JQu2FBaE52RagYu82mULv',
    query: 'chicken',
    //test query, will allow user inputted query in future iteration
    dataType:["Survey (FNDDS)"],
    //specifies the average survey version of queried food rather than branded
    pagesize: 1,
}

const api_url = 
`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`
// og: `https://api.nal.usda.gov/fdc/v1/foods...{encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`
//working e.g.: https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=3WXEQZGOWTgLsqsSArGB7xgNYd5zRj7QRfdhskOc


function getData() {
    return fetch(api_url)
    .then(response => response.json())
}


    console.log(params.query + " nutrients:");
    //prints food nutrient header to console

    getData().then(data => console.log(data.foods[0].foodNutrients[1].value + data.foods[0].foodNutrients[1].unitName))
    //print nutrient value and unit(grams) from JSON payload
    //will convert grams to kcal in future iteration, 1g = 7.716179 kcal
    getData().then(data => console.log(data.foods[0].foodNutrients[1].nutrientName))
    //print nutrient name in console

 
