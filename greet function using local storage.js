function greet(){
   name = localStorage.getItem("EG_name");
   if (name == null || name == "null"){
     alert("Hi, Stranger!");
     name = prompt("What is your name?");
     localStorage.setItem("EG_name", name);
   } else {
     alert ("Hi, " + name + "!");
   } // end greet
 } // end function
