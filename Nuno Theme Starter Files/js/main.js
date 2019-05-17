ScrollOut({
  once: true
});
$(function() {
  $("#dg-container").gallery();
});

$("#btnSignup").click(function() {
  var x = document.getElementById("gethim2");

  x.style.display = "block";
});

$("#btnLogin").click(function() {
  var x = document.getElementById("gethim");

  x.style.display = "block";
});

$(".close2").click(function() {
  var x = document.getElementById("gethim2");

  x.style.display = "none";
});

$(".close").click(function() {
  var x = document.getElementById("gethim");

  x.style.display = "none";
});
// WebAuthentication

var firebaseConfig = {
  apiKey: "AIzaSyBenLRqrAjiFkSCyltPtr-Hpd6ufhgedn0",
  authDomain: "vjgvgvg-51a5d.firebaseapp.com",
  databaseURL: "https://vjgvgvg-51a5d.firebaseio.com",
  projectId: "vjgvgvg-51a5d",
  storageBucket: "vjgvgvg-51a5d.appspot.com",
  messagingSenderId: "112037169526",
  appId: "1:112037169526:web:847b2c1c740ddac2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//get elements:
const txtE = document.getElementById("email");
const txtP = document.getElementById("password");
const txtE2 = document.getElementById("email2");
const txtN2 = document.getElementById("name2");
const txtP2 = document.getElementById("password2");
const txtA2 = document.getElementById("adress2");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");

//add signup event
signSubmit.addEventListener("click", e => {
  const email2 = txtE2.value;
  const name2 = txtN2.value;
  const pass2 = txtP2.value;

  const auth = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(email2, pass2);
  promise.catch(e => console.log(e.message));
});

//add login
loginSubmit.addEventListener("click", e => {
  const email = txtE.value;
  const pass = txtP.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

btnLogout.addEventListener("click", e => {
  firebase.auth().signOut();
});

//add a listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    btnLogout.classList.remove("hide");
    document.getElementById("navbar-brand").innerHTML = firebaseUser.email;
  } else {
    console.log("not loged");
    btnLogout.classList.add("hide");
    document.getElementById("navbar-brand").innerHTML = "";
  }
});
