//This EmailJS script is from on of codeinstitute.net lessons with some modifications. Thanks!

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
                // https://stackoverflow.com/questions/15343890/clear-input-fields-on-form-submit/15344007
                // For reseting the form after submitting.
                var form = document.getElementById("form");
                form.reset();
            },
            function (error) {
                let errorMessage = document.getElementById("error");
                errorMessage.innerText = "Something went wrong, try again!";
            }
        );
    return false;
};