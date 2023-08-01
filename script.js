// function fetchData() {
//   const xhttp = new XMLHttpRequest();
//   const url = "https://pokeapi.co/api/v2/pokemon?limit=10";
//   const httpMethod = "GET";
//   xhttp.onload = function () {
//     // Apa yang kita lakukan ketika response telah tersedia

//     //document.getElementById("pokemon").innerHTML = this.responseText;
//     const response = JSON.parse(this.responseText);
//     const results = response.results;
//     console.log(results);

//     let data = "";
//     for (let i = 0; i < results.length; i++) {
//       data = data + `<p>${results[i].name}</p>`;
//     }
//     document.getElementById("pokemon").innerHTML = data;
//   };
//   xhttp.open(httpMethod, url);
//   xhttp.send();
// }

async function fetchData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {
        method: "GET"
    });
  
    const json = await response.json();
    let id = json.id;
    let name = json.name;
    let image = json.sprites.front_default;
    let types = json.types[0].type.name;

      console.log(image);
      
    
  
    // document.getElementById("pokemon").innerHTML =`<p>${id}</p>
    // <p>${name}</p>
    // <img src="${image}" >
    // <p>${types}</p>
    // `;

    const divPoke = document.getElementById("pokemon");
    let p1 = document.createElement("p");
    p1.innerHTML = `${id} : ${name}`;
    let img = document.createElement("img");
    img.src = `${image}`;
    let p2 = document.createElement("p");
    p2.innerHTML = `type: ${types}`;
    divPoke.append(p1,img,p2);
  }