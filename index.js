document.querySelectorAll(".bar-container").forEach(bar => {
    bar.addEventListener("click", addActive => {
        const activeBar = document.querySelector(".left-bar.active");
        activeBar.classList.remove("active");
         const left = bar.firstElementChild;
         if(left.classList.contains("active")){
             left.classList.remove("active");
         }else{
             left.classList.add("active");
         }
    })
})