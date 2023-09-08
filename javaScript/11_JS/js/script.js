window.addEventListener("load", ()=>{

    const y =document.querySelector("h2"); //sustituye getElementByTagName

 

    const x = document.querySelectorAll("#intro");//sustituye getElementById
    
     
    
    const z = document.querySelectorAll(".intro");//sustituye getElementByClassName
    
     
    
    
    /*
    querySelector retorna el primero que encuentra
    
     
    
    querySelectorAll retorna un Array con todos los elmentos que encuentra
    */
    
     
    
    document.getElementById("demo1").innerHTML = 
    'The first paragraph (index 0) with class="intro" is: ' + y.innerHTML;
    
     
    
    document.getElementById("demo2").innerHTML = 
    'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;
    
     
    
    document.getElementById("demo3").innerHTML = 
    'The first paragraph (index 0) with class="intro" is: ' + z[1].innerHTML;
})
