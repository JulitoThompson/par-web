jQuery(document).ready(function() {
    var $myGroup = $('#accordion');
    $myGroup.on('show.bs.collapse', '.collapse', function() {
        $myGroup.find('.collapse.show').collapse('hide');
    });
});