var firebaseConfig = {
    apiKey: "AIzaSyBf88MK-FWedgIYG_Se_YCogD_a4unRylg",
    authDomain: "lets-chat-a.firebaseapp.com",
    databaseURL: "https://lets-chat-a-default-rtdb.firebaseio.com",
    projectId: "lets-chat-a",
    storageBucket: "lets-chat-a.appspot.com",
    messagingSenderId: "582012823728",
    appId: "1:582012823728:web:25733e2e30485c8934b375"
  };
  
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id' >#" + Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
        });});}
  getData();
  
        user_name = localStorage.getItem("user_name");
        document.getElementById("user_name").innerHTML = "Welcome   " + user_name;
   function addRoom()
   {
         room_name = document.getElementById("room_name").value;
  
         firebase.database().ref("/").child(room_name).update({
               purpose : "adding room name"
         });
         
         localStorage.setItem("room_name" , room_name);
  
         window.location = "lets_chat_page.html"
   }
   function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name" , name);
              window.location = "lets_chat_page.html";
  }