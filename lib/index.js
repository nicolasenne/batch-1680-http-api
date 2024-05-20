// TODO - Fetch an activity with the Bored API - Let's psuedocode!

const url = 'https://www.boredapi.com/api/activity/'
const button = document.querySelector('.btn-warning');
const h2 = document.getElementById('activity');

const activity = (data) => {
  h2.innerText = data.activity;
};

button.addEventListener("click", (event) => {
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    activity(data);
  });
});

// button.addEventListener("click", (event) => {
//   fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     h2.innerText = data.activity;
//   });
// });
