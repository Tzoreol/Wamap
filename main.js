/**
 * Created by A534712 on 05/08/14.
 */

$(document).ready(function() {

    mobileMenuDisplayed = false;

    $("#menuButton").click(function() {
        if(mobileMenuDisplayed) {
            $('#mobileMenu').animate({
                width: '0%'
            });

            mobileMenuDisplayed = false;
        } else {
            $('#mobileMenu').animate({
                width: '50%'
            });

            mobileMenuDisplayed = true;
        }
    });
});
