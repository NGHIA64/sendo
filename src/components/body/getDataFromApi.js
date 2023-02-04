let database = []

fetch('https://sendo-58uy.onrender.com/products')
.then(response => response.json())
.then(data => {
    database.push(data)
    console.log(database)
})