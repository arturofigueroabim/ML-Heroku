const resgisterButton = document.getElementById('register');
resgisterButton.addEventListener('click', printValues);


function printValues(event) {
    event.preventDefault();

    const data = {
        cylinders: parseInt(document.getElementById('cylinders').value),
        displacement: parseInt(document.getElementById('displacement').value),
        horsepower: parseInt(document.getElementById('horsepower').value),
        weight: parseInt(document.getElementById('weight').value),
        acceleration: parseInt(document.getElementById('acceleration').value),
        modelYear: parseInt(document.getElementById('modelYear').value),
        germany: parseInt(document.getElementById('germany').value),
        india: parseInt(document.getElementById('india').value),
        usa: parseInt(document.getElementById('usa').value)
    };

    console.log(data);

    console.log('Calling service');
    let response = fetch('https://ml-keroku-app.herokuapp.com/predict', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(function(response) {
            console.log("Response: " + response);
            return response.json();
        })
        .catch(function(error) {
            console.log("Error: " + error);
        });

    response.then(function(result) {
        window.alert(result.mpg_prediction)
        console.log(result.mpg_prediction) // "Some User token"
    })
}