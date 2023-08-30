// const hexColorGenerator= () =>{
//     const red = Math.floor(Math.random() * 256).toString(16).padStart(2,'0');
//     const green = Math.floor(Math.random() * 256).toString(16).padStart(2,'0');
//     const blue = Math.floor(Math.random() * 256).toString(16).padStart(2,'0');

//     const hexColor =  `#${red}${green}${blue}`;
//     return hexColor;
// };

// const container = document.querySelector(".container");
// const input = document.querySelector("#input");
// const copyBtn = document.querySelector("#copy-btn");
// const generateBtn = document.querySelector("#generate-btn");

// generateBtn.addEventListener("click",function(){
//     const color = hexColorGenerator();

//     container.style.background = color;
//     input.value = color;
//     copyBtn.textContent = "Copy";
//     copyBtn.style.background = "#000000";
// });

// copyBtn.addEventListener("click",function(){

//     copyBtn.textContent = "Copied";
//     copyBtn.style.background = "none";
//     input.select();
//     document.execCommand("copy");
// })

window.onload = () => {
  main();
};

function main() {
  const container = document.querySelector(".container");
  const h2 = document.querySelector("#h2");
  const input = document.querySelector("#input");
  const copyBtn = document.querySelector("#copy-btn");
  const generateBtn = document.querySelector("#generate-btn");

  generateBtn.addEventListener("click",function(){
    const color = hexColorGenerator();
    container.style.background = color;
    input.value = color;
    copyBtn.textContent = "Copy";
    copyBtn.style.background = "#000000";
});

copyBtn.addEventListener("click",function(){

  copyBtn.textContent = "Copied";
  copyBtn.style.background = input.value;
  input.select();
  document.execCommand("copy");
})

}


const hexColorGenerator= () =>{
  const red = Math.floor(Math.random() * 256).toString(16).padStart(2,'0');
  const green = Math.floor(Math.random() * 256).toString(16).padStart(2,'0');
  const blue = Math.floor(Math.random() * 256).toString(16).padStart(2,'0');

  const hexColor =  `#${red}${green}${blue}`;
  return hexColor;
};
