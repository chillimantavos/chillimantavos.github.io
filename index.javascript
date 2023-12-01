document.addEventListener('DOMContentLoaded', function () {
    // Sample car data
    const cars = [
        { make: 'Toyota', model: 'Camry', price: 25000 },
        { make: 'Ford', model: 'Mustang', price: 35000 },
        // Add more cars as needed
    ];

    const carsSection = document.getElementById('cars');

    // Render cars
    cars.forEach(car => {
        const carElement = document.createElement('div');
        carElement.classList.add('car');
        carElement.innerHTML = `
            <h2>${car.make} ${car.model}</h2>
            <p>Price: $${car.price}</p>
            <button onclick="buyCar('${car.make} ${car.model}')">Buy Now</button>
        `;
        carsSection.appendChild(carElement);
    });
});

function buyCar(carName) {
    alert(`Congratulations! You've purchased a ${carName}.`);
}
