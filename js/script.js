function onDismissCookies() {
    document.getElementsByClassName('cookie-consent-banner')[0].innerHTML = ''; 
    console.log("google maps won't be displayed")
}

function onAcceptCookies() {
    document.getElementsByClassName('cookie-consent-banner')[0].innerHTML = ''; 
    document.getElementsByClassName('google-maps')[0].innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1132.6891185348409!2d14.267452438826817!3d47.528786731667395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8377bad3590964b5!2sHeilmasseurin+Sonja+Greimel!5e0!3m2!1sde!2sat!4v1542909143244' width='100%'' height='300' frameborder='0' style='border:0' allowfullscreen></iframe>";
}