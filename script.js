
let txtimput= document.querySelector("#imp");

let textMeme = document.querySelector("#meme-text");

txtimput.addEventListener("keyup", function(){
  
  let cont = textMeme.innerHTML.length

  if(textMeme.innerHTML.length < 60){
    textMeme.innerHTML = txtimput.value;
  }
  console.log(textMeme.innerHTML.length);  
});

//---------------------------------------------------------
let clearText = document.querySelector("#limpar");
clearText.addEventListener("click", function(){
textMeme.innerHTML = "";
txtimput.value = "";
}); 