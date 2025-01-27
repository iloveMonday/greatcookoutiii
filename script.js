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
let sub = document.getElementById("sub");
let unsub = document.getElementById("unsub");
let subExtra = document.getElementById("sub-ex");
let subExtraLab = document.getElementById("sub-ex-lab");
let subAdd = document.getElementById("sub-add");
let endlessSub = document.getElementById("endless-subs")

let guestBox = document.getElementById("guest-box");
let guestVisual = document.getElementById("guest-visual");
let guestSlider = document.getElementById("guest-slider");
let nightsSlider = document.getElementById("nights-slider");
let nightsVisual = document.getElementById("nights-visual");
let maybe = document.getElementById("maybe-select");

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
    newSubLab.innerHTML = " Subscribed"
    subDiv.appendChild(newSub);
    subDiv.appendChild(newSubLab);
    endlessSub.appendChild(subDiv)
    });


guestSlider.oninput = function () {
  guestVisual.innerHTML = "";

  for (let i = 0; i < this.value; i++) {
    let img = document.createElement("img");
    img.src = "./corn.svg";
    img.className = "guest-corn"
    guestVisual.appendChild(img);
  }
};

guestBox.addEventListener("click",(e) =>{
    let x = rand();
    e.target.src = `./icons/${x}.svg`
    e.target.className = randomColor();
})

function randomColor(){
    let x = rand();
    if (x == 0){
        return "hotpink"
    }
    if (x == 1){
        return "blue"
    }
    if (x ==2){
        return "green"
    }
    if (x==3){
        return "hotpurple"
    }
    if (x==4){
        return "red"
    }
    if (x==5){
        return "glacier"
    }
    if (x==6){
        return "pea"
    }
    if (x==7){
        return "white"
    }
    if (x==8){
        return "orange"
    }
    if (x==9){
        return "teal"
    }
    else{
        return "guest-corn"
    }

}


nightsSlider.addEventListener("input", () =>{
    slider();
})

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
        nightsVisual.innerHTML = "idkmaybe";
              changeClass("maybe", "");
              return "may" ;

    }
}


maybe.addEventListener("click", () => {
    if (maybe.value == "penny"){
        changeClass("pennywisehunk", "")
    }
})


function getBring(){
    let box = document.getElementsByName("box")
    let boxChecked = [];

    for (let i = 0; i < box.length; i++){
        if (box[i].checked){
            boxChecked.push(box[i].value);
        }
    }
    return boxChecked.join(", ");
}

const prompts = [
    'how can we ensure this party rocks?',
    'do u like my website?',
    'what makes your life better?',
    'where don’t you want to be?',
    'what if?',
    'what does success look like?',
    'how have our past cookouts failed?',
    'how have you made space in life for what you want?',
    'fuck, marry, kill?'
]

function randomPrompt(){
    const randomIndex = Math.floor(Math.random() * prompts.length);
    return prompts[randomIndex];}


function displayPrompt(){
    let promptBox = document.getElementById("prompt");
    promptBox.innerHTML = "";
    promptBox.innerHTML = randomPrompt();
}

const getPrompt = document.getElementById("get-prompt");

getPrompt.addEventListener("click", () => {
    displayPrompt();
})




const images = [
    './animals/senator.jpg',
    './animals/magicians.jpg',
    './animals/armadillo.jpg',
    './animals/mandrill.jpg',
    './animals/elephant.jpg',
    './animals/camel.jpg',
    './animals/clownfish.jpg', 
    './animals/albatross.jpg', 
    './animals/sloth.jpg', 
    './animals/orca.jpg', 
    './animals/spidercrab.jpg', 
    './animals/necklizard.jpg', 
    './animals/wombat.jpg', 
    './animals/grizzly.jpg', 
    './animals/plattypus.jpg', 
    './animals/rhinobeetle.jpg', 
    './animals/ayeaye.jpg', 
    './animals/prayingmantis.jpg', 
    './animals/parrotfish.jpg', 
    './animals/okapi.jpg', 
    './animals/jerboa.jpg', 
    './animals/flamingo.jpg', 
    './animals/viper.jpg', 
    './animals/monkey.jpg', 
    './animals/frog.jpg', 
    './animals/dolphin.jpg', 
    './animals/mousedeer.jpg', 
    './animals/hippo.jpg', 
    './animals/cassowary.jpg', 
    './animals/puffin.jpg', 
    './animals/axolotl.jpg', 
    './animals/hummer.jpg', 
    './animals/puffer.jpg', 
    './animals/quokka.jpg', 
    './animals/sunbear.jpg', 
    './animals/wolf.jpg'
];

let liked = [];
let source = ""

function getRandomImage() {
    if (images.length > 0){
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];}
    else {
        return './media/gcoddish.jpg'
    }
}

function displayRandomImage() {
    const imgElement = document.getElementById('random-image');
    source = getRandomImage();
    imgElement.src = source;
}

function addLike(arr, src){
    if (!arr.includes(src)){
        arr.push(src);
    }
}

function removeItem(arr, src){
    const index = arr.indexOf(src);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}

let like = document.getElementById("heart-button");
let dislike = document.getElementById("x-button");

like.addEventListener("click", () =>{
    addLike(liked, source);
    removeItem(images, source);
    displayRandomImage();
    displayTinderPicks(liked);
})

dislike.addEventListener("click", () =>{
    removeItem(images, source);
    displayRandomImage();
    displayTinderPicks(liked);
})

displayRandomImage();

function displayTinderPicks(likelist){
    var tinCont = document.getElementById("tinder-friends");
    tinCont.innerHTML = "";
    likelist.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        tinCont.appendChild(img);
    })
};


function displayRSVP(){
    let infoBox = document.getElementById("info");
    let info = document.getElementById("info-body");
    let iname = document.getElementById("iname");
    let rsvp = rsvpForm.querySelector('input:checked');
    let comment = document.getElementById("comment");
    let nighty = slider();
    let bring = getBring();
    let lastWord = comment.value;
    let emer = emergency.value
    if (name.value == ""){
        alert("what is your name my dear boy?")
        return
    }
    if(comment.value == ""){
        lastWord = "you look great.";
    }
    if(emergency.value == ""){
        emer = "http.kate.biz"
    }

    info.innerHTML = `Hey thanks for the invite! 
        This is my RSVP to inform you that I am ${rsvp.value} to your cookout.
        I know it's totally optional, but I plan on bringing ${bring} 
        and, of course, my signature wicked 'tude. 
        I  probably ${nighty} be wanting to sleep over, and if I do I am aware there is but 1 couch, 
        and even fewer pillows. I am prepared; both for these obstacles and to have the time of my life. 
        With me I will be bringing about ${guestSlider.value} more friends who will surely enrich the 
        social climate of this gathering. 
        As always, I can be reached at my email ${email.value} and, to cover all my bases, 
        you may contact @${emer} incase of emergency. 
        Oh, and one last thing: ${lastWord}`;
    iname.innerHTML = name.value;

    infoBox.classList.remove("hidden");
    // displayTinderPicks(liked);
}




let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    event.preventDefault();
    displayRSVP();

})




