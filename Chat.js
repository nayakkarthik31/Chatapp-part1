function add_user(){
    username=document.getElementById("username").value
    localStorage.setItem("Username:" , username)
    window.location="Chat_room.html"
}