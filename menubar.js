function switchMenu() {
    var elements = document.getElementById("mobile_header_menu");
    if (elements.style.display === "flex") {
        elements.style.display = "none";
    } else {
        elements.style.display = "flex";
    }
  }