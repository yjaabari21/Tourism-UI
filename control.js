$(document).ready(function(){
    $('.itemOne').click(function(){
        $('#output').load('offers.html');
    });

    $('.itemTwo').click(function(){
        $('#output').load('ourTrips.html');
    });

    $('.itemThree').click(function(){
        $('#output').load('Reviews.html');
    });

    $('.itemFor').click(function(){
        $('#output').load('ourStaff.html');
    });

});