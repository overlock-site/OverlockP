function menu() {

    var evn = document.getElementById("Menu");
   
    
    if (evn.style.display == "") {
      
      evn.style.display = "none";
      
    }
    
    else if(evn.style.display == "none") {

      evn.style.display = "block"

    }
    
    else if(evn.style.display == "block") {

      evn.style.display = "none";
     
    }
   
  }

  function coisa() {

    document.getElementById("Menu").id = "Menu-z"

    document.getElementById("btn1").id = "btn1-z"

    document.getElementById("btn2").id = "btn2-z"

  }

  function coisa1() {

    document.getElementById("Menu-z").id = "Menu"

    document.getElementById("btn1-z").id = "btn1"

    document.getElementById("btn2-z").id = "btn2"

  }

  function login() {
    
    document.getElementById("Form").id = "Form2"
    
  }

  function x_login() {

    document.getElementById("Form2").id = "Form"
 
  }
