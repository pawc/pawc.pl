$(document).ready(() => {

    if(myLogin == null) $("#content").attr("src", "/signup");

    $("#usersLink").click(function(event){
        event.preventDefault(); 
        $("#content").attr("src", "/users");
        setActive('users');
    });

    $("#profileLink").click(function(event){
        event.preventDefault(); 
        $("#content").attr("src", "/profile");
        setActive('profile');
    });

    $("#boardLink").click(function(event){
        event.preventDefault(); 
        $("#content").attr("src", "/board");
        setActive('board');
    });

    $("#logoutLink").click(function(event){
        setActive(null);
    })

});

function setActive(link){
    $("#profileNav").removeClass("active");
    $("#usersNav").removeClass("active");
    $("#boardNav").removeClass("active");

    if(link == 'users'){
        $('#usersNav').addClass("active");
    }

    if(link == 'profile'){
        $('#profileNav').addClass("active");
    }

    if(link == 'board'){
        $('#boardNav').addClass("active");
    }

}