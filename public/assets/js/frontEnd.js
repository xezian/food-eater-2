// listening to the completely ready document!
$(document).ready(function(){
    console.log("hello I am frontEnd.js");
    // listener for click submission of a new cook
    $("#cookname").click(function(event) {
        event.preventDefault();
        const cook = $("#new-cook").val().trim();
        // cook name will be all caps (I know I break convention here)
        const COOK = cook.toUpperCase()
        const newCook = {
            cook_name: COOK,
        };
        // post the new cook to the api/cooks route
        $.ajax("/api/cooks", {
            type: "POST",
            data: newCook
        }).then(function(){
            // refresh
            location.reload();
        })
    });
    // when someone clicks submit new food button
    $("#submit").click(function(event) {
        event.preventDefault();
        let cookID = $("#cookSelector").find(":selected").attr("data-id");
        let cookName = $("#cookSelector").find(":selected").attr("cook");
        console.log(cookID);
        if(!cookID){
            return;
        } else {
            // object containing info to make a new food out of
            const newFood = {
                food_name: $("#new-food").val().trim(),
                cook_name: cookName,
                CookId: cookID
            };
            // post it to the api/foods route
            $.ajax("/api/foods", {
                type: "POST",
                data: newFood
            }).then(function(){
                // refresh
                location.reload();
            })
        };
    });
    // click a food to eat it
    $(".eat").click(function(event) {
        event.preventDefault();
        // this puts the id from the button clicked on the api url
        $.ajax(`/api/eat/${$(this).attr("id")}`, {
            type: "PUT",
        }).then(function() {
            // refresh
            location.reload();
        })
    });
    // click on a food to un-eat it
    $(".eaten").click(function(event) {
        event.preventDefault();
        $.ajax(`/api/uneat/${$(this).attr("id")}`, {
            type: "PUT",
        }).then(function() {
            location.reload();
        })
    });
});