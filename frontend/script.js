async function init() {
    await fetchFruits();
    renderFruits();
}

let fruits = [];

async function fetchFruits() {
    const url = "http://127.0.0.1:8000/fruits/";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        fruits.push(...result);
        console.log(fruits);
    } catch (error) {
        console.error(error.message);
    }
}

function renderFruits() {
    list = document.getElementById('fruit-list');
    list.innerHTML = '';
    for (let i = 0; i < fruits.length; i++) {
        list.innerHTML += getFruitTemplate(i);
    }
}

function getFruitTemplate(i) {
    return `<li style="font-size:1.2rem"><b>${fruits[i].name}</b></li>
            <li>${fruits[i].weight} kg</li>
            <li>${fruits[i].color}</li>
            <br>`
}