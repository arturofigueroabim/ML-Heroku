const resgisterButton = document.getElementById('register');
resgisterButton.addEventListener('click', printValues);



function printValues(event) {
    event.preventDefault();
    let germany = 0;
    let india = 0;
    let usa = 0

    let originList = document.getElementById('origin');
    var origin = originList.options[originList.selectedIndex].value;

    if (origin == "germany") {
        germany = 1
    } else if (origin == "india") {
        india = 1
    } else if (origin == "usa") {
        usa = 1
    }

    const data = {
        cylinders: parseInt(document.getElementById('cylinders').value),
        displacement: parseInt(document.getElementById('displacement').value),
        horsepower: parseInt(document.getElementById('horsepower').value),
        weight: parseInt(document.getElementById('weight').value),
        acceleration: parseInt(document.getElementById('acceleration').value),
        modelYear: parseInt(document.getElementById('modelYear').value),
        germany: germany,
        india: india,
        usa: usa
    };

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
        window.alert(`The Vehicle will aprox consume: ${Math.round(result.mpg_prediction)} MPG`)
            //console.log(result.mpg_prediction)
    })
}