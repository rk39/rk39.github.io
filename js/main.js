

  // d-flex flex-nowrap justify-content-center d-sm-none d-md-none d-lg-flex d-xl-flex
  
    // document.querySelector(".bar6").addEventListener("click", function(){
    //   var y = document.querySelector(".nav-menu-ul");
    //   if (y.style.display === "none") {
    //     y.style.display = "flex";
    //     console.log("clicked kent")
    //   } else {
    //     y.style.display = "none";
    //     y.style.backgroundColor = "red";
    //     console.log("clicked luw")
    //   }
    // })
  

    var forAddClasses = ["flex-column"];
    var forRemoveClasses = [""];

    document.querySelector(".bar6").addEventListener("click", function clickChanger(){
      var elem = document.querySelector(".nav-menu-ul");
      elem.classList.toggle(...forAddClasses, ...forRemoveClasses);
    })