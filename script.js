const memeInput = document.getElementById("meme-insert");
const memeImage = document.getElementById("meme-image");
memeInput.addEventListener("input", function(){
  memeImage.src = URL.createObjectURL(this.files[0]);
});