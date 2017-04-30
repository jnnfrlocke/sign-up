$(".more").click(function() {
    $("#contactBtns").addClass("hide");
    $(".contactTxt").removeClass("hide");
    $("#progCirc2").removeClass("fa-circle-o");
    $("#progCirc2").addClass("fa-circle");
    $(':input:enabled:visible:first').focus();
})
$("#favTool").hide();

$("#meet").click(function() {
    $("#contactBtns").addClass("hide");
    $("#mtgInfo").removeClass("hide");
    $("#progCirc2").removeClass("fa-circle-o");
    $("#progCirc2").addClass("fa-circle");
    $(':input:enabled:visible:first').focus();
})

$("select").change(function() {
    if ($("select").val() == "remote") {
        $("#favTool").show();
    } else {
        $("#favTool").hide();
    }
})

$(".btnContinue").click(function() {
    $("#mtgInfo,.contactTxt").addClass("hide");
    $(".contactSubmit").removeClass("hide");
    $("#progCirc3").removeClass("fa-circle-o");
    $("#progCirc3").addClass("fa-circle");
    $(':input:enabled:visible:first').focus();
})

$("#visitor").on("keyup", function(event) {
    $("#emailField").removeClass("hide");
    $(':input:enabled:visible:first').focus();
    var visitorName = event.target.value;
    $("#autoName").text(visitorName);
});