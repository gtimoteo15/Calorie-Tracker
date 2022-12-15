//get food nutrient data from query
//uses FoodData Central API from fdc.nal.usda.gov
//prints data onto console, next iteration will output onto app dynamically

const fetch = require("node-fetch");
const params = {
    api_key: 'fAzg1XPbecDcFUIgnq0JQu2FBaE52RagYu82mULv',
    query: document.getElementById("userInput").value,
    //test query, will allow user inputted query in future iteration
    dataType:["Survey (FNDDS)"],
    //specifies the average survey version of queried food rather than branded
    pagesize: 1,
}
const api_url = 
    `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`


function returnText(){
    let input = document.getElementById("userInput").value;
    alert(input)

    function getData() {
        return fetch(api_url)
        .then(response => response.json())
        alert(params.query + " nutrients:")
        //alert food nutrient header to webpage
        alert(d)
        let nutrientData = getData.then.foods[0].foodNutrients[1].value + getData.then.foods[0].foodNutrients[1].unitName
        alert(nutrientData)
        //alert nutrient value and unit(grams) from JSON payload

        let nutrientData2 = getData.then.foods[0].foods[0].foodNutrients[1].nutrientName
        alert(nutrientData2)
        //alert nutrient name on webpage
        //will convert grams to kcal in future iteration, 1g = 7.716179 kcal
        
    }

}
