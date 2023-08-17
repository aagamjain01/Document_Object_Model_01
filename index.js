// document.addEventListener('click', function(){
//     console.log("I am clicked on page");
// })

//addEventListener.....
// function eventFunction(){
//     console.log("My name is aagam jain");
// }

// document.addEventListener('click',eventFunction);

//removeEventListener.....
//  function print(){
//     console.log('hi');
//  }

//  document.addEventListener('click', print);
//  document.removeEventListener('click',print);

//Event Object...
// const content = document.querySelector('#wrapper');

// content.addEventListener('click',function(event){
//     console.log(event);
// })


//Prevent Default Action.......
// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click',function(event){
//     event.preventDefault();
//     alert("3rd link is not working");
// })


//Avoid Too many events.........
// let myDiv = document.createElement('div');

// function paraStatus(event){
//     console.log("Para " + event.target.textContent );
// }

// myDiv.addEventListener('click', paraStatus);


// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = "This is a Para" + i;

//     myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);


//Article under Para under Span......
let element = document.querySelector('#wrapper');
element.addEventListener('click',function(event){
    if(event.target.nodeName === "SPAN"){
        console.log('Para ' + event.target.textContent);
    }
})