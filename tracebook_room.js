// Your web app's Firebase configuration
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

username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome "+ username + " !";

function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding roomname"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "tracebook_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Start code
        console.log("Room name = " + room_name);
        row = "<div class='room_name' id="+Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "tracebook_page.html";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
          window.location.replace("index.html");
}
