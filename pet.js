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
    usersPet.increaseHealth();
    usersPet.increaseHappiness();
    usersPet.increaseThirst();
    usersPet.increaseTiredness();
    usersPet.reduceHunger();
});

drink.addEventListener("click", () => {
    usersPet.increaseHealth();
    usersPet.increaseHappiness();
    usersPet.reduceThirst();
    usersPet.reduceTiredness();
});

sleep.addEventListener("click", () => {
    usersPet.increaseHealth();
    usersPet.increaseHappiness();
    usersPet.reduceTiredness();
});

play.addEventListener("click", () => {
    usersPet.increaseHealth();
    usersPet.increaseHappiness();
    usersPet.increaseThirst();
    usersPet.increaseTiredness();
    usersPet.reduceHunger();
});

cuddle.addEventListener("click", () => {
    usersPet.increaseHappiness();
    usersPet.increaseTiredness();
});

bath.addEventListener("click", () => {
    usersPet.increaseHealth();
    usersPet.increaseHappiness();
    usersPet.increaseTiredness();
});

cleanCage.addEventListener("click", () => {
    usersPet.increaseHealth();
    usersPet.increaseHappiness();
    usersPet.increaseTiredness();
});