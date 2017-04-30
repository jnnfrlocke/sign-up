$(".more").click(function() {
    $("#contactBtns").addClass("hide");
    $(".contactTxt").removeClass("hide");
    $("#progCirc2").removeClass("fa-circle-o");
    $("#progCirc2").addClass("fa-circle")
})

$("#meet").click(function() {
    $("#contactBtns").addClass("hide");
    $("#mtgInfo").removeClass("hide");
    $("#progCirc2").removeClass("fa-circle-o");
    $("#progCirc2").addClass("fa-circle")
})

$(".btnContinue").click(function() {
    $("#mtgInfo,.contactTxt").addClass("hide");
    $(".contactSubmit").removeClass("hide");
    $("#progCirc3").removeClass("fa-circle-o");
    $("#progCirc3").addClass("fa-circle")
})

$("#nameBtn").click(function() {
    $("#emailField").removeClass("hide");
    $("#visitor,#nameBtn").addClass("hide");
    var visitorName = $("#visitor").val();
    $("p").append(visitorName + ", could I please have your email address?");

})