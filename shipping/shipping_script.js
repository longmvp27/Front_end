document.getElementById('shipping-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    // Get the input value
    var street_number = document.getElementById('street_number').value;
    var street_name = document.getElementById('street_name').value;
    var country = document.getElementById('shipping_country').value; 
    var country_id = document.getElementById('shipping_countryID').value;
    console.log(street_number);
    console.log(street_name);
    console.log(country);
    console.log(country_id);
    fetch('http://localhost:3000/shipping', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            street_number: street_number,
            street_name: street_name,
            country: country,
            country_id: country_id
        })
    }) 
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            alert(data.message);
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.log('Error: ', error);
    })

});