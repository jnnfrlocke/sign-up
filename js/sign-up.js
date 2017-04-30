$(".contactTxt,#mtgInfo,.contactSubmit,#emailField,#favTool").hide();

// About Sections
$(".more").click(function() {
    // Hide 1st Section, Show 2nd
    $("#contactBtns").hide();
    $(".contactTxt").show();
    // Progress Circles
    $("#progCirc2").removeClass("fa-circle-o");
    $("#progCirc2").addClass("fa-circle");
    // Auto focus on first field
    $(':input:enabled:visible:first').focus();
})

// Meet Me Section
$("#meet").click(function() {
    // Hide 1st Section, Show 2nd
    $("#contactBtns").hide();
    $("#mtgInfo").show();
    // Progress Circles
    $("#progCirc2").removeClass("fa-circle-o");
    $("#progCirc2").addClass("fa-circle");
    // Auto focus on first field
    $(':input:enabled:visible:first').focus();
})

// Web Meeting Tool Hide/Show
$("select").change(function() {
    if ($("select").val() == "remote") {
        $("#favTool").show();
    } else {
        $("#favTool").hide();
    }
})

// Continue Button
$(".btnContinue").click(function() {
    // Hide 2nd Section, Show 3rd
    $("#mtgInfo,.contactTxt").hide();
    $(".contactSubmit").show();
    // Progress Circles
    $("#progCirc3").removeClass("fa-circle-o");
    $("#progCirc3").addClass("fa-circle");
    // Auto focus on first field
    $(':input:enabled:visible:first').focus();
})

// Show/Hide Email/Phone Section
$("#visitor").on("keyup", function(event) {
    $("#emailField").show();
    // Auto focus on first field
    $(':input:enabled:visible:first').focus();
    // Dynamically add Name to text
    var visitorName = event.target.value;
    $("#autoName").text(visitorName);
});