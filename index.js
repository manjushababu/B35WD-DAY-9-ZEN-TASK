var res = fetch('https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
res.then((data) => {
    return data.json();
}).then((data) => {
    console.log('result ', data);
    result(data);
})

function result(data) {
    var asia = data.filter((val) => val.region === 'Asia');
    console.log('Asia using filter ', asia);

    var popLessThan = data.filter((val) => val.population <= 2000);
    popLessThan.forEach((val) => console.log('population less than 2000 ', val.name));

    data.forEach((val) => {
        console.log(`Flag: ${val.flag}, Capital: ${val.capital}, name: ${val.name}`);
    });

    const currencies = data.map(val =>
        val.currencies.filter(val => val.code === 'USD') && val);
    currencies.forEach(val => console.log('countries based on USD currencies ', val.name));

    let sumValue = asia.reduce((sum, ele) => sum + ele.population, 0);
    console.log('total population using reduce ', sumValue);
}
