var firebaseConfig = {
    apiKey: "AIzaSyBrX1DXGcj6mh17AYx8uBTN3jkx4ymCxgc",
    authDomain: "trisha-cw.firebaseapp.com",
    databaseURL: "https://trisha-cw-default-rtdb.firebaseio.com",
    projectId: "trisha-cw",
    storageBucket: "trisha-cw.appspot.com",
    messagingSenderId: "202433578736",
    appId: "1:202433578736:web:19cfb47b9ee9fe282a6435"
};
firebase.initializeApp(firebaseConfig);
userName = localStorage.getItem("userName");

function addRoom() {
    roomName = document.getElementById("roomInput").value;
    localStorage.setItem("roomName", roomName);
    firebase.database().ref("/").child(roomName).update({
        key: "value"
    });
    window.location = "page3.html";
}