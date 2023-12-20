/*//1
fetch("country-flag.json")
.then(response => response.json())
.then(data => showInfo(data));

function showInfo(data) {
    console.table(data.countries);
}

console.log(countries[0])
*/

/*//2
const URL = "https://gist.github.com/20ded7151103bb30737e2ab1b336eb02.git";

async function fetchData() {
    const response = await fetch(URL);
    console.log(response)
}

fetchData()
*/

//3
let flagindex = (Math.floor(Math.random()*261))
console.log(flagindex)

let divcountries = document.querySelector("#countries")

fetch("countryflag.json").then((response) => {

    response.json().then((countries) => {
      let flag = `<img src="${countries.countries[flagindex].flag}">`
      divcountries.innerHTML = flag
      console.log(countries.countries[flagindex].country)

      let playerguess = document.getElementById("guess");
      playerguess.addEventListener("keyup", function(event){
        console.log(playerguess.value)
        if (playerguess.value.toLowerCase() == countries.countries[flagindex].country.toLowerCase()){
            //playerguess.style.color = "green";
            if (confirm("Correct answer!")){
            window.location.reload()}}
      })

      let reveal = document.getElementById("reveal")
      reveal.addEventListener("click", function(event){
        playerguess.value = countries.countries[flagindex].country
        setTimeout(function() {
            if (confirm("Click OK to go to the next country flag")){
                window.location.reload()}
          }, 1000);
        });
    }) 
})
