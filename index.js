const pageContent = document.getElementById('page-content');
const pageSections = document.getElementsByClassName('page-section');
const barContainer = document.getElementsByClassName('bar-container');

pageContent.scrollTop = 0;

for(let i = 0; i < barContainer.length; ++i){
    barContainer[i].addEventListener('click', scrollContent => {
        console.log(i);
        
    })
}

document.querySelectorAll(".bar-container").forEach(function(bar, i) {
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

    bar.addEventListener("click", scrollContent => {
        pageContent.scrollTop = pageContent.scrollTop + document.getElementById(i+1).offsetTop;
    })
})