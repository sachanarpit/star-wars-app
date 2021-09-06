var output = document.getElementById("results");
var popupshow = document.getElementById("popupshow");

async function showResult() {
  output.innerHTML = null;
  let query = document.getElementById("inputBox").value;
  let res = await fetch(`https://swapi.dev/api/people/?search=${query}`);
  let data = await res.json();
  console.log(data.results);

  data.results.forEach(
    ({
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender,
    }) => {
      let div = document.createElement("div");
      div.setAttribute("class", "res");
      div.onclick = () => {
        div.innerHTML = null;
        div.innerHTML = `<h3>${name}</h3>
<p><b>gender</b> = ${gender}</p>
        <p><b>birth-year</b> = ${birth_year}</p>
              <p><b>height</b> = ${height}</p>
              <p><b>mass</b> = ${mass}</p>
              <p><b> hair-color</b> = ${hair_color}</p>
              <p><b>skin-color</b> = ${skin_color}</p>
              <p><b>eye-color</b> = ${eye_color}</p>
              `;
      };
      div.onmouseout = () => {
        div.innerHTML = `
              <h3>${name}</h3>
               `;
      };
      div.innerHTML = `
              <h3>${name}</h3>
               `;
      output.append(div);
    }
  );
}

// popup html
// </div><button id="popupBtn" onclick="togglePopup()">Show Popup</button>
//               <div class="popup" id="popup-1">
//   <div class="overlay"></div>
//   <div class="content">
//     <div class="close-btn" onclick="togglePopup()">&times;</div>
//     <h1>${name}</h1>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur laborum rem sed laudantium excepturi veritatis voluptatum architecto, dolore quaerat totam officiis nisi animi accusantium alias inventore nulla atque debitis.</p>
//   </div>

// function openPopup(
//   name,
//   height,
//   mass,
//   hair_color,
//   skin_color,
//   eye_color,
//   birth_year,
//   gender
// ) {
//   var popup = document.getElementById("popupshow");
//   popup.innerHTML = ` `;
// }
function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}
