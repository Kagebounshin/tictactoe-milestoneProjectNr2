function sendEmail(feedbackForm) {
    emailjs.send("service_ze2p865", "tictactoe-form", {
            "from_name": feedbackForm.name.value,
            "from_email": feedbackForm.email.value,
            "project_feedback": feedbackForm.message.value
        })
        .then(
            function (response) {
                console.log("YEASSSS", response);
            },
            function (error) {
                console.log("ERROR");
            }
        );
    return false;

};