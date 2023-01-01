function checkCar() {
    // https://data.gov.il/he/api/3/action/datastore_search?resource_id=0866573c-40cd-4ca8-91d2-9dd2d7a492e5&limit=5000
    var data = {
        resource_id: '053cea08-09bc-40ec-8f7a-156f0677aff3', // the resource id
        limit: 5, // get 5 results
        q: 'jones' // query for 'jones'
    };
    $.ajax({
        url: 'https://data.gov.il/api/3/action/datastore_search',
        data: data,
        dataType: 'jsonp',
        success: function (data) {
            alert('Total results found: ' + data.result.total)
        }
    });
}

function checkInfo(carNum) {
    // let carNum = document.getElementById('carId').value;
    console.log(carNum);
    try {
        fetch("https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=8266376")
            .then((res) => res.json()).
            then((carInfo) => {
                console.log(carInfo);
                document.getElementById('divi').innerHTML += `done
                car num ${carNum}
                ${carInfo.result.fields[1].info.label}
                    `
            })
            .catch((e) => console.log(e));
    } catch (error) {

    }
}