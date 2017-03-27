/**
 * Created by FREDERIC on 24/03/2017.
 */
$( document ).ready(function() {




    $("#vid1").on("click", function() {
        console.log("Clicked one")

    })

    $("#vid2").on("click", function() {
        console.log("Clicked two")
    })

    $("#vid3").on("click", function() {
        console.log("Clicked three")
    })

    $("#vid4").on("click", function() {
        console.log("Clicked four")
    })

    $("#vid5").on("click", function() {
        console.log("Clicked five")
    })

    $("#vid6").on("click", function() {
        console.log("Clicked six")
    })

    $(".return").on("click", function() {                   /* goes back to previous page if return-class is tapped (make sure this class is broader than just the video */
        console.log("Clicked return")
        parent.history.back()
    })

    $('video').on('ended',function(){                       /* goes back to previous page if the video ended */
        console.log('End');
        parent.history.back()
    });
    $(".return").css("cursor", "none");                     /* deletes cursor */

});


