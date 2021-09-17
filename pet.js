const dogButton = document.getElementById("dogButton");
const catButton = document.getElementById("catButton");
const rabbitButton = document.getElementById("rabbitButton");
const petType = document.getElementById("petType");
const dog = document.getElementById("dog");
const cat = document.getElementById("cat");
const rabbit = document.getElementById("rabbit");
const choosePet = document.getElementById("choosePet");
const namePet = document.getElementById("namePet");
let input = document.getElementById("input");
const submit = document.getElementById("submit");
// let petsName = document.getElementById("petsName");
// const Pname = document.querySelector('petsName');
// let name = input.value;
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const sleep = document.getElementById("sleep");
const cuddle = document.getElementById("cuddle");
const bath = document.getElementById("bath");
const water = document.getElementById("water");
const cleanCage = document.getElementById("cleanCage");
const stats = document.getElementById("stats");

function changeText(text) {
    document.getElementById("namePet").innerHTML = text;
}

dog.addEventListener("click", () => {
    cat.style.display = "none";
    rabbit.style.display = "none";
    petType.style.display = "none";
    choosePet.style.display = "none";
    namePet.style.display = "block";
    input.style.display = "block";
    submit.style.display = "block";
    stats.style.display = "block";


});

cat.addEventListener("click", () => {
    dog.style.display = "none";
    rabbit.style.display = "none";
    petType.style.display = "none";
    choosePet.style.display = "none";
    namePet.style.display = "block";
    input.style.display = "block";
    submit.style.display = "block";
    stats.style.display = "block";
});

rabbit.addEventListener("click", () => {
    cat.style.display = "none";
    dog.style.display = "none";
    petType.style.display = "none";
    choosePet.style.display = "none";
    namePet.style.display = "block";
    input.style.display = "block";
    submit.style.display = "block";
    stats.style.display = "block";
});

submit.addEventListener("click", () => {
    // document.getElementById("petsName").value;
    // namePet.textContent = (`Great Name! Time To Take Care Of ${petsName} Your New Friend`);

    input.style.display = "none";
    submit.style.display = "none";
    // show.textContent = name.value;

    // namePet.innerHTML = `${input.value}`;

    changeText(`Great Name! Time To Take Care Of ${input.value}, Your New Friend`);
});



feed.addEventListener("click", () => {
    usersPet.increaseHealth(10);
    usersPet.increaseHappiness(10);
    usersPet.increaseThirst(10);
    usersPet.increaseTiredness(10);
    usersPet.reduceHunger(10);
});

drink.addEventListener("click", () => {
    usersPet.increaseHealth(10);
    usersPet.increaseHappiness(10);
    usersPet.reduceThirst(10);
    usersPet.reduceTiredness(10);
});

sleep.addEventListener("click", () => {
    usersPet.increaseHealth(10);
    usersPet.increaseHappiness(10);
    usersPet.reduceTiredness(10);  
});

play.addEventListener("click", () => {
    usersPet.increaseHealth(10);
    usersPet.increaseHappiness(10);
    usersPet.increaseThirst(10);
    usersPet.increaseTiredness(10);
    usersPet.reduceHunger(10);
});

cuddle.addEventListener("click", () => {  
    usersPet.increaseHappiness(10);
    usersPet.increaseTiredness(10);
});

bath.addEventListener("click", () => {
    usersPet.increaseHealth(10);
    usersPet.increaseHappiness(10);
    usersPet.increaseTiredness(10);
});

cleanCage.addEventListener("click", () => {
    usersPet.increaseHealth(10);
    usersPet.increaseHappiness(10);
    usersPet.increaseTiredness(10);
});