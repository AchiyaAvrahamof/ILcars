// WORK
// https://data.gov.il/he/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=5&q=7777774
// רכב קיים

function checkInfo(carNum) {
    // let carNum = document.getElementById('carId').value;
    console.log(carNum);
    let urlToCheck = "https://data.gov.il/he/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=5&q=" + carNum;
    try {
        fetch(urlToCheck)
            .then((res) => res.json()).
            then((carInfo) => {
                console.log(urlToCheck);
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