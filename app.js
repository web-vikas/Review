const reviews = [
  {
    id: 1,
    name: "Vikas Patel",
    job: "Web Developer",
    img: "./vikas.jpg",
    text: "Many of life’s failures are people who did not realize how close they were to success when they gave up",
  },
  {
    id: 2,
    name: "Emma Watson",
    job: "Designer",
    img: "./person1.jpg",
    text: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
  },
];

const names = document.querySelector("#author");
const image = document.querySelector("#img");
const job = document.querySelector("#job");
const des = document.querySelector("#des");

const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
let index = 0;
window.addEventListener("DOMContentLoaded", () => {
  loadContent();
});

nextBtn.addEventListener("click", () => {
  if (index < (reviews.length-1)) index++;
  else index = 0;
  loadContent();
});
prevBtn.addEventListener("click", () => {
  if (index > 0) index--;
  else index = reviews.length - 1;
  loadContent();
});

function loadContent() {
  const item = reviews[index];
  image.setAttribute("src", item.img);
  names.innerText = item.name;
  job.innerText = item.job;
  des.textContent = item.text;
}
