jQuery(document).ready(function() {
    var $myGroup = $('#accordion');
    $myGroup.on('show.bs.collapse', '.collapse', function() {
        $myGroup.find('.collapse.show').collapse('hide');
    });


    /* jQuery('.icono').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated rotateInUpRight', // Class to add to the elements when they are visible
        offset: 100
    });
    jQuery('.icono1').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
        offset: 100
    });


    jQuery('.moneda').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
        offset: 100
    });

    jQuery('.rotDer').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated rotateInUpLeft', // Class to add to the elements when they are visible
        offset: 100
    });

    jQuery('.salta').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceIn', // Class to add to the elements when they are visible
        offset: 100
    });

    jQuery('.derecha').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
        offset: 100
    });

    jQuery('.gira').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated flip', // Class to add to the elements when they are visible
        offset: 100
    });
    jQuery('.baja').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInDown', // Class to add to the elements when they are visible
        offset: 100
    });
    jQuery('.hala').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated pullRight', // Class to add to the elements when they are visible
        offset: 100
    }); */


    /*  
     $('.icono').waypoint(function() {

         $('.icono').addClass("visible animated rotateInUpRight");
     }, {
         offset: '90%'
     }); */


    /* var waypoint = new Waypoint({
        element: document.getElementById('waypoint'),
        handler: function(direction) {
            console.log('Scrolled to waypoint!')
        }
    }); */

});

/* $("#element-to-animate").waypoint(function() {
    $('#element-to-animate).addClass('
        fadeInLeft ');
    }
}, { offset: '100%' });

InitWaypointAnimations({
delay: "0.5s",

offset: "100%",
});

}); */