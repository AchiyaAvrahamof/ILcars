// WORK
// https://data.gov.il/he/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=5&q=7777774
// רכב קיים


// function checkInfo() {
//     let carNum = document.getElementById('carId').value;
//     console.log(carNum);
//     let urlToCheck = `https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=5&q=${carNum}`;

//     fetch(urlToCheck, { mode: "no-cors" })
//         .then((res) => res.json())
//         .then((carInfo) => {
//             console.log(urlToCheck);
//             console.log(carInfo);
//             document.getElementById('divi').innerHTML += `done
//                 car num ${carNum}
//                 car num ${carInfo.records.mispar_rechev}
//                 ${carInfo.result.fields[1].info.label}
//                     `
//         })
//         .catch((e) => console.log(e));
// }

async function checkInfo() {
    let carNum = document.getElementById('carId').value;
    console.log(carNum);
    let urlToCheck = `http://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=5&q=${carNum}`;

    try {
        let res = await axios.get(urlToCheck, { headers: { 'Access-Control-Allow-Origin': true } });
        console.log(res.data);

    } catch (error) {
        console.log(error);
    }

}