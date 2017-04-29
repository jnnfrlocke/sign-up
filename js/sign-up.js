$(".more").click(function() {
    $("#contactBtns").addClass("hide");
    $(".contactTxt").removeClass("hide");
})

$("#meet").click(function() {
    $("#contactBtns").addClass("hide");
    $("#mtgInfo").removeClass("hide");
})

$(".btnContinue").click(function() {
    $("#mtgInfo,.contactTxt").addClass("hide");
    $(".contactSubmit").removeClass("hide");
})

$("#nameBtn").click(function() {
    $("#emailField").removeClass("hide");
    $("#visitor,#nameBtn").addClass("hide");
    var visitorName = $("#visitor").val();
    $("p").append(visitorName + ", could I please have your email address?");

})