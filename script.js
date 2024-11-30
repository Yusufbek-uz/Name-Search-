const div = document.getElementById("div");
const input = document.getElementById("name");
const btn = document.getElementById("btn");
const ul = document.getElementById("result-l");

async function getUser(ism) {
    const javob = await fetch(`https://api.nationalize.io/?name=${ism}`);
    const data = await javob.json();
    ul.innerHTML='';
    // console.log(data);
    data.country.forEach(e => {
        const img = document.createElement("img");
        const div = document.createElement("div");
        const li = document.createElement("li");
        img.src=`https://flagcdn.com/16x12/${e.country_id.toLowerCase()}.png`;
        li.textContent = e.country_id + " " + (Math.round(e.probability * 1000) / 10) + "%";
        div.style="display:flex;align-items:center;text-align:center;margin: 0 12vw;gap:90px;font-size:20px;"

        div.appendChild(img);
        div.appendChild(li);
        ul.appendChild(div);
    });
}

btn,input.addEventListener("input", ()=>{
    if (input.value.trim().length < 1) {
        alert("Iltimos biror narsa yozing!!");
    } else {
        getUser(input.value.trim());
    }
})
// btn.addEventListener("click", () => {
// });