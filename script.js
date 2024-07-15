function rand(){
    return Math.floor(Math.random() * 10);
}

function changeClass(id, cl){
    let item = document.getElementById(id);
    item.className = cl;
}

let name = document.getElementById("name");
let emergency = document.getElementById("emergency");
let email = document.getElementById("email");
let rsvpForm = document.getElementById("rsvp");
// let rsvp = rsvpForm.querySelector('input:checked');
// let  = document.getElementById("");
// let  = document.getElementById("");
// let  = document.getElementById("");
// let  = document.getElementById("");
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
let maybe = document.getElementById("maybe-select");

guestSlider.oninput = function () {
  guestVisual.innerHTML = "";

  for (let i = 0; i < this.value; i++) {
    let img = document.createElement("img");
    img.src = "./corn.svg";
    img.className = "guest-corn";
    guestVisual.appendChild(img);
  }
};

guestBox.addEventListener("click",(e) =>{
    let x = rand();
    e.target.src = `./icons/${x}.svg`
})



nightsSlider.addEventListener("input", () =>{
    slider();
})


//nightsSlider.oninput =  function () {
//     if (this.value < 2){
//   nightsVisual.innerHTML = `${this.value} Nights`;

//     (this.value == 1) ? changeClass("breakfast", "") 
//         : changeClass("breakfast", "hidden");
//         changeClass("maybe", "hidden") 
//         changeClass("pennywisehunk", "hidden")
//     }
//     else {nightsVisual.innerHTML = "idk maybe";
//         changeClass("maybe", "")    
//     }
// };

function slider(){
    if (nightsSlider.value == 0){
        nightsVisual.innerHTML = `${nightsSlider.value} Nights`;
        changeClass("breakfast", "hidden");
          changeClass("maybe", "hidden") ;
          changeClass("pennywisehunk", "hidden");
        return "won't";        
    }
    else if (nightsSlider.value == 1){
        changeClass("breakfast", "");
        nightsVisual.innerHTML = `${nightsSlider.value} Night`;
        return "will";
    }
    else {
        nightsVisual.innerHTML = "idk maybe";
              changeClass("maybe", "");
              return "may" ;

    }
}


maybe.addEventListener("click", () => {
    if (maybe.value == "penny"){
        changeClass("pennywisehunk", "")
    }
})


function addRSVP(){
     let newGuest = new Guest(name)
}

function displayRSVP(){
    let info = document.getElementById("info-body");
    let iname = document.getElementById("iname");
    let rsvp = rsvpForm.querySelector('input:checked');
    let nighty = slider();
    // let  = document.getElementById("")

    info.innerHTML = `Thanks for the invite to your party! 
        This is my RSVP to inform you that I am ${rsvp.value} to your cookout.
        I plan on bringing (#checklist) 
        and, of course, (that smile.) 
        I  probably ${nighty} be wanting to sleep over, and if I do I am aware there is but 1 couch, and even fewer pillows. I am prepared. 
        With me I will be bringing about ${guestSlider.value} more friends who will surely enrich the social climate of this gathering. 
        As always, I can be reached at ${email.value} and, to cover all my bases, 
        you may contact @${emergency.value} incase of emergency.`;
    iname.innerHTML = name.value;


}







class Guest{
    constructor(name, emergency, email, guests, nights, rsvp){
        this.name = name;
        this.emergency = emergency;
        this.email = email;
        this.guests = guests;
        this.nights = nights;
        this.bring = [];
        this.rsvp = rsvp;
        this.info = function (){
            return
        }
        this.bringString = function(){
            return
        }

        // getName(){
        //     return this.name;
        // }

        // getBody(){
        //     return 
        // }
    }
}


let submit = document.getElementById("submit");



submit.addEventListener("click", () => {
    event.preventDefault();
    displayRSVP();
})