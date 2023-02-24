const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesContainer =document.getElementById('all-countries');
    // console.log(countries);
    // for (const country of countries){
    //     console.log(countries);
    // }
    countries.forEach(country => {
        // console.log(country.cca2);
        const countryDiv =document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name :${country.name.common}</h3>
        <p>Capital:${country.capital ? country.capital[0] : 'no capital'}</p>
        <button onclick = "loadCountryDetails('${country.cca2}')">Details</button>
        
        `;
        countriesContainer.appendChild(countryDiv);
    });
}
const loadCountryDetails = code =>{
    // https://restcountries.com/v2/alpha/{code}
    const url = `https://restcountries.com/v2/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data))
}

const showCountryDetails = country =>{
console.log(country.name);
const detailsContainer =document.getElementById('const details');
detailsContainer.innerHTML =`
<h3>Name:${country.name} </h3>
<img src = "${country.flags.png}">
`

}
loadCountries();