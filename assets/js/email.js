function sendEmail(feedbackForm) {
    emailjs.send("service_ze2p865", "tictactoe-form", {
            "from_name": feedbackForm.name.value,
            "from_email": feedbackForm.email.value,
            "project_feedback": feedbackForm.message.value
        })
        .then(
            function (response) {
                let thanks = document.getElementById("thanks-for-feedback");
                thanks.innerText = "Thank you for the feedback!";
                var form = document.getElementById("form");
                form.reset();
            },
            function (error) {
                let errorMessage = document.getElementById("error");
                errorMessage.innerText = "Something went wrong, try again!";
                console.log("ERROR");
            }
        );
    return false;
};