$(function(){

    $("#search-field").ghostHunter({
        results: "#results",
        onKeyUp: true
    });

    
    console.log($("#search-field"));
    $("#search-button").click(function(){
        alert("The paragraph was clicked.");
    });
});
