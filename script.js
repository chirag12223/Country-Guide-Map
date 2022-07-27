let searchBtn =document.getElementById("SearchBtn");
let country=document.getElementById("Country");
searchBtn.addEventListener('click',()=>{
    let Countryname=country.value;
    let url=`https://restcountries.com/v3.1/name/${Countryname}?fullText=true`;
    fetch(url).then((response)=>response.json())
    .then((data)=>{
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);   
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(Object.values(data[0].languages).toString().split(",").join(", "));
        result.innerHTML=`
            <img src="${data[0].flags.svg}"
            class="flag">
            <h2>${data[0].name.common}</h2>
            <h4>Capital: ${data[0].capital[0]}</h4>
            <h4>Continent: ${data[0].continents[0]}</h4>
            <h4>Population: ${data[0].population}</h4>
            <h4>Currency: ${Object.keys(data[0].currencies)[0]}</h4>
            <h4>Languages: ${Object.values(data[0].languages).toString().split(",").join(", ")}</h4>
        `
    })
})