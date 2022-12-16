username = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");
var firebaseConfig = {
    apiKey: "AIzaSyBF6f6fSJvSoQrCYJMfL8jdDOiVNQrhWBc",
    authDomain: "kwitterproject-c9002.firebaseapp.com",
    databaseURL: "https://kwitterproject-c9002-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-c9002",
    storageBucket: "kwitterproject-c9002.appspot.com",
    messagingSenderId: "968797247096",
    appId: "1:968797247096:web:806f0620095bd8e7323f8d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//YOUR FIREBASE LINKS

function getData() { firebase.database().ref(room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}
function send(){
    message = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          message, msg,
          name : username,
          like : 0
    });
    document.getElementById("message").value = "";
}

