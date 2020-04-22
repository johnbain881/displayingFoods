fetch("http://localhost:8008/food")
.then(foods => foods.json())
.then(parsedFoods => {
    parsedFoods.forEach(element => {
        const foodAsHTML = foodFactory(element)
        addFoodToDOM(foodAsHTML)
    });
    console.table(parsedFoods)
})

function foodFactory(object){
    return `<div><h1>${object.name}</h1>
    <p>${object.ethnicity}</p>
    <p>${object.category}</p></div>`
}

function addFoodToDOM(food) {
    document.querySelector("body").innerHTML += food
}