$("#a").click(function() {
  document.getElementById("combo").value = "rrr";
  document.getElementById("horos").innerHTML = "eeeeeeee";
});

$("#b").click(function() {
  document.getElementById("combo").value = "yyy";
  document.getElementById("horos").innerHTML = "hhhhhhhhee";
});
// $("#green").on("click", e => {
//   document.getElementById("combo").value = s;
// });

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCAD3ZJnPRSBXSIlNKzhjNrQHLWvpAQRKw",
  authDomain: "jjjjjj-230e5.firebaseapp.com",
  databaseURL: "https://jjjjjj-230e5.firebaseio.com",
  projectId: "jjjjjj-230e5",
  storageBucket: "jjjjjj-230e5.appspot.com",
  messagingSenderId: "759750339022",
  appId: "1:759750339022:web:167219a05329cf32"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
// var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  //Get value
  var name = getInputVal("text");

  var message = getInputVal("text2");
  var com = getInputVal("combo");

  console.log(name);
  // Save message
  saveMessage(name, message, com);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get form value
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, message, com) {
  var messagesRef = firebase.database().ref("messages");
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    text: name,

    text2: message,

    text4: com
  });
}
console.log(combo.value);
