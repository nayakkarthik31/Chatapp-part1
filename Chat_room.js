var firebaseConfig = {
    apiKey: "AIzaSyA73w_2CYkTipVwmMISBhObkHh6X8gbbaw",
    authDomain: "kwitter-4bd46.firebaseapp.com",
    databaseURL: "https://kwitter-4bd46-default-rtdb.firebaseio.com",
    projectId: "kwitter-4bd46",
    storageBucket: "kwitter-4bd46.appspot.com",
    messagingSenderId: "830281532495",
    appId: "1:830281532495:web:ae3071564b59fe6fc1963a"
  };
  firebase.initializeApp(firebaseConfig);
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();
