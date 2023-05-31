const criterion = [
  {
    class: "reaction",
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg"
  },

  {
    class: "memory",
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg"
  },

  {
    class: "verbal",
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg"
  },

  {
    class: "visual",
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg"
  }
];

let criterionBox = document.getElementById('criterion');
let i = 0;

for(i = 0; i < criterion.length; i++) {
criterionBox.innerHTML += 
`
 <div class="${criterion[i].class}">
   <div>
     <img src="${criterion[i].icon}" alt="">
     <p>${criterion[i].category}</p>
   </div>
   <p>${criterion[i].score} <span>/ 100</span></p>
 </div>

`
};