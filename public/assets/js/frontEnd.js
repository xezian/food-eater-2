$(document).ready(function(){
    console.log("hello I am frontEnd.js");
    $("#cookname").click(function(event) {
        event.preventDefault();
        const cook = $("#new-cook").val().trim();
        const newCook = {
            cook_name: cook,
        };
        $.ajax("/api/cooks", {
            type: "POST",
            data: newCook
        }).then(function(){
            location.reload();
        })
    });
    $("#submit").click(function(event) {
        event.preventDefault();
        let cookID = $("#cookSelector").find(":selected").attr("data-id");
        let cookName = $("#cookSelector").find(":selected").attr("cook");
        console.log(cookID);
        if(!cookID){
            return;
        } else {
            const newFood = {
                food_name: $("#new-food").val().trim(),
                cook_name: cookName,
                CookId: cookID
            };
            $.ajax("/api/foods", {
                type: "POST",
                data: newFood
            }).then(function(){
                location.reload();
            })
        };
    });
    $(".eat").click(function(event) {
        event.preventDefault();
        $.ajax(`/api/eat/${$(this).attr("id")}`, {
            type: "PUT",
        }).then(function() {
            location.reload();
        })
    });
    $(".eaten").click(function(event) {
        event.preventDefault();
        $.ajax(`/api/uneat/${$(this).attr("id")}`, {
            type: "PUT",
        }).then(function() {
            location.reload();
        })
    });
});