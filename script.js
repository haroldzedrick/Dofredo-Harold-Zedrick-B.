$(document).ready(function () {

    // Fade in effect
    $(".webpage").hide().fadeIn(1000);

    $("#loginSubmit").on("click", function () {

        let username = $("#username").val().trim();
        let password = $("#password").val().trim();

        // BOTH EMPTY
        if (username === "" && password === "") {
            Swal.fire({
                icon: "warning",
                title: "Missing Information",
                text: "Please enter your username and password.",
                confirmButtonColor: "#5fd1ff"
            });
        }

        // USERNAME ONLY
        else if (username !== "" && password === "") {
            Swal.fire({
                icon: "warning",
                title: "Password Required",
                text: "You entered a username but forgot your password.",
                confirmButtonColor: "#5fd1ff"
            });
        }

        // PASSWORD ONLY
        else if (username === "" && password !== "") {
            Swal.fire({
                icon: "warning",
                title: "Username Required",
                text: "Please enter your username.",
                confirmButtonColor: "#5fd1ff"
            });
        }

        // SUCCESS
        else {
            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "Welcome to Nebula!",
                confirmButtonColor: "#5fd1ff"
            }).then(() => {
                window.location.href = "index.html";
            });
        }

    });

    // ENTER KEY SUPPORT
    $("#username, #password").on("keypress", function (e) {
        if (e.which === 13) {
            $("#loginSubmit").click();
        }
    });

});
