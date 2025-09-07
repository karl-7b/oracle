const a1 = document.getElementById("a1");
a1.addEventListener('click', () => {
    var username = document.getElementById("textbox").value;
    localStorage.setItem("username", username);
    location.href("result.html");
});