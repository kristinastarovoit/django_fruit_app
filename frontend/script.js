async function init() {
    await fetchFruits();
    // renderFruits();
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