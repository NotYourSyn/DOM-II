// Your code goes here

// mouseover / mouseleave on h2's
const head2 = document.querySelectorAll('h2');
head2.forEach((item) =>{
    item.addEventListener('mouseover', (e) =>{
        e.target.style.color = 'red';
    });
    item.addEventListener('mouseleave', (e) =>{
        e.target.style.color = 'blue';
    });
});

// load page notification 
window.addEventListener('load', (e) =>{
    alert('Welcome To Fun Bus');
});

// click on header to enlarge
const head1 = document.querySelectorAll('h1');
head1.forEach((item) =>{
    item.addEventListener('click', (e) =>{
        e.target.style.fontSize = '7rem';
    });
    item.addEventListener('mouseleave', (e) =>{
        e.target.style.fontSize ='4rem';
    });
});

// double click on img to enlarge 

const growImg = document.querySelectorAll('img');
growImg.forEach((item) =>{
    item.addEventListener('dblclick', (e) =>{
        e.target.style.transform = 'scale(2)';
        e.target.style.transition = '5s';
    });
    item.addEventListener('mouseleave', (e) =>{
        e.target.style.transform = 'scale(1)';
    });
});

// scroll event 
window.addEventListener('scroll', ()=>{
    document.body.style = 'color:red;background-color:black;'
   
});

// keydown 
document.addEventListener('keydown', (e) =>{
    if(e.key==='z'){
        document.body.style = 'color:yellow;background-color:black;'
    }else if(e.key === 'q'){
        document.body.style = 'color:orange;background-color:blue;'
        
    }
});

