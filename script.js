let sub = document.getElementById("sub");
let unsub = document.getElementById("unsub");
let subExtra = document.getElementById("sub-ex");
let subExtraLab = document.getElementById("sub-ex-lab");
let subAdd = document.getElementById("sub-add");
let endlessSub = document.getElementById("endless-subs")

sub.addEventListener("click", () =>{
if (sub.checked == false){
    changeClass("addSubBox", "addSubBox")
    subAdd.checked = true;
}
else{
    endlessSub.innerHTML = "";
    changeClass("addSubBox", "hidden");
}
});

unsub.addEventListener("click", () =>{
    if (unsub.checked == true){
        unsub.checked = false;
        changeClass("sub-ex", "visible");
        changeClass("sub-ex-lab", "visible");
        subExtra.checked = true;
    }
    });

subExtra.addEventListener("click", () =>{

    });

subAdd.addEventListener("click", () =>{
    subAdd.checked = true;
    let subDiv = document.createElement("div")
    let newSub = document.createElement("input")
    newSub.type = "checkbox";
    // newSub.checked = true;
    let newSubLab = document.createElement("label");
    newSubLab.for = "sub";
    newSubLab.innerHTML = "Subscribed"
    subDiv.appendChild(newSub);
    subDiv.appendChild(newSubLab);
    endlessSub.appendChild(subDiv)
    });






let guestBox = document.getElementById("guest-box");
let guestVisual = document.getElementById("guest-visual");
// let guestOutput = document.getElementById("slider-value");
let guestSlider = document.getElementById("guest-slider");
// guestOutput.innerHTML = guestSlider.value;
let nightsSlider = document.getElementById("nights-slider");
let nightsVisual = document.getElementById("nights-visual");

guestSlider.oninput = function () {
  guestVisual.innerHTML = "";

  for (let i = 0; i < this.value; i++) {
    let img = document.createElement("img");
    img.src = "./corn.svg";
    img.className = "guest-corn";
    guestVisual.appendChild(img);
  }
};

nightsSlider.oninput = function () {
  nightsVisual.innerHTML = `${this.value} Nights`;
(this.value == 1) ? changeClass("sleepover", "") 
    : changeClass("sleepover", "hidden"); 

};

function changeClass(id, cl){
    let item = document.getElementById(id);
    item.className = cl;
}



