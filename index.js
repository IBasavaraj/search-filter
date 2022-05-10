const input = document.getElementById("input");
const search = document.getElementById("search");
const getMessage = document.querySelector("h3"); 
const getMovies = document.querySelectorAll(".movie__container .movie");
search.addEventListener('click', (e) => {
    getMovies.forEach(hide => hide.style.display = "none");
    let imageCount = 0;
    getMessage.innerHTML = "";
    let term = input.value.toLowerCase();
    getMovies.forEach((movie) =>{
        let title = movie.getAttribute("data-title");       
        if(title.includes(term)) {
            movie.style.display =  "block";
            ++imageCount;
        }         
});  
     if(imageCount <= 0) {
         getMessage.innerHTML = "Movie doesn't exist!! Search other movies";
     }  
});
    
