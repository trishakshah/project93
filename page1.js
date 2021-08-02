function addUser(){
    userName=document.getElementById("userNameInput").value;
    localStorage.setItem("userName",userName);
    window.location="page2.html";
}