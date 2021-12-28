const container = document.querySelector('.container');
const container2 = document.querySelector('container2')
let size = 0;
for (let i = 0; i < 256; i++) {
const content = document.createElement('div');
content.classList.add('content');
content.style.width = "110px";
container.appendChild(content);
}


let click = document.querySelectorAll('button')

click.forEach((button) => {
  

 button.addEventListener('click', () => {
   
      size = prompt("Enter Grid Size (z * z)");
      
      if (size >= 1 && size <= 100 ){
        container.replaceChildren();
        let newWidth = 1760 / size;
        let newHeight = 1600 / size
        

        for (i = 1; i <= size * size; i++) {   
          content = document.createElement('div');
          content.classList.add('content');
          content.style.width = newWidth + "px";
          content.style.height = newHeight + "px";
          container.appendChild(content);
        }
       refreshedGrid();
       
       

      }
     
        
      
  

 });
});




let test  = document.querySelectorAll('.content')
test.forEach((div) => {

function backgroundUpdate(){
  div.style.cssText = "background-color: white";
}

function backgroundRevert(){
  div.style.cssText = "background-color: peachpuff";

}

div.addEventListener('mouseover', backgroundUpdate);
div.addEventListener('mouseout', backgroundRevert);

});

function refreshedGrid(){
let testtest  = document.querySelectorAll('.content')
testtest.forEach((div) => {
  let newWidth = 1760 / size;
  let newHeight = 1600 / size;

function backgroundUpdate2(){
div.style.cssText = "background-color: white";
div.style.width = newWidth + "px";
div.style.height = newHeight + "px";

}

function backgroundRevert2(){
div.style.cssText = "background-color: peachpuff";
div.style.width = newWidth + "px";
div.style.height = newHeight + "px";

}

div.addEventListener('mouseover', backgroundUpdate2);
div.addEventListener('mouseout', backgroundRevert2);

});
}



