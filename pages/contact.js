

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCP3iLucZbbSlobVJmf_NcgTwglrhdTrLo",
    authDomain: "e-shop-a4af0.firebaseapp.com",
    projectId: "e-shop-a4af0",
    storageBucket: "e-shop-a4af0.appspot.com",
    messagingSenderId: "878014936021",
    appId: "1:878014936021:web:a5bdae679e37ef8cbe435c",
    measurementId: "G-D9S7DB3JD6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
     const auth=getAuth(app);

  var firstName=document.getElementById("firstName");
  var lastName=document.getElementById("lastName");
  var email=document.getElementById("email");
  var pass=document.getElementById("pass");

  window.signup=function(e){
    e.preventDefault();
    var obj ={
      firstName:firstName.value,
      lastName:lastName.value,
      email:email.value,  
      pass:pass.value,
    }
    createUserWithEmailAndPassword(auth, obj.email,obj.pass)
    .then(function(success){
      alert("Signup Successfully")
    })
    .catch(function(err){
      alert("error" + err)
    })
    console.log(obj)
  };
 











 
