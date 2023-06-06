$(document).ready(function () {
    $("#moves_in_square").click(function (e) {
        $("#moves_in_square").click(function (e) { 
            e.preventDefault();
            let box = $('#box');
            box.animate({
                left: 150
            })
            box.animate({
                top: 150
            })
            box.animate({
                left: 0
            })
            box.animate({
                top: 0
            })
        });
    });

    $("#moves_in_triangle").click(function (e) { 
        e.preventDefault();
        let box = $('#box');
        box.animate({
            left: 50,
            top: 86
        })
        box.animate({
            left: -50,
            top: 86
        })
        box.animate({
            left: 0,
            top: 0
        })
    });
    let is_box_active = false
    $("#object_increases").click(function (e) { 
        e.preventDefault();
        let box = $('#box');
        if(!is_box_active){
            box.animate({
                height: 400,
                width: 400,
                opacity: 0
            })
            is_box_active = true
        }
        else{
            box.animate({
                height: 50,
                width: 50,
                opacity: 1
            })
            is_box_active = false
        }
    });
})