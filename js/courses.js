document.getElementById("search").addEventListener("click", function(event){
    search = document.getElementById("course");
    console.log("Search:", search.value);
    window.location.href = "#" + search.value;
});