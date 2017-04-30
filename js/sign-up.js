// About Sections
$(".more").click(function() {
    $("#contactBtns").addClass("hide");
    $(".contactTxt").removeClass("hide");
    // Progress Circles
    $("#progCirc2").removeClass("fa-circle-o");
    $("#progCirc2").addClass("fa-circle");
    // Auto focus on first field
    $(':input:enabled:visible:first').focus();
})

// Meet Me Section
$("#meet").click(function() {
    $("#contactBtns").addClass("hide");
    $("#mtgInfo").removeClass("hide");
    // Progress Circles
    $("#progCirc2").removeClass("fa-circle-o");
    $("#progCirc2").addClass("fa-circle");
    // Auto focus on first field
    $(':input:enabled:visible:first').focus();
})

// Web Meeting Tool Hide/Show
$("#favTool").hide();

$("select").change(function() {
    if ($("select").val() == "remote") {
        $("#favTool").show();
    } else {
        $("#favTool").hide();
    }
})

// Continue Button
$(".btnContinue").click(function() {
    $("#mtgInfo,.contactTxt").addClass("hide");
    $(".contactSubmit").removeClass("hide");
    // Progress Circles
    $("#progCirc3").removeClass("fa-circle-o");
    $("#progCirc3").addClass("fa-circle");
    // Auto focus on first field
    $(':input:enabled:visible:first').focus();
})

// Show/Hide Email/Phone Section
$("#visitor").on("keyup", function(event) {
    $("#emailField").removeClass("hide");
    // Auto focus on first field
    $(':input:enabled:visible:first').focus();
    // Dynamically add Name to text
    var visitorName = event.target.value;
    $("#autoName").text(visitorName);
});