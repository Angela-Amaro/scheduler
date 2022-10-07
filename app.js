$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var figureitem = $(this).siblings("#typecontent").val(),


            savedTime = $(this).parent().attr("id")
        // localStorage.setItem(figureitem.savedTime, figureitem.savedText);
        localStorage.setItem(savedTime, figureitem);
        settext();
    })
})

//saves text so it doesnt dissapear after I refresh the page
function settext() {
    var lastEntry = JSON.parse(localStorage.getItem("figureitem"));
    var id = $(".time").attr("id");
    if (id == lastEntry.savedTime) {
        $("#textcontent").text(lastEntry.savedText);
    }
}

function savetoWebsite() {
    for (i = 8; i < 18; i++) {
        $("#" + i).children().eq(1).text(localStorage.getItem(i));
    }
}
savetoWebsite();
var currentDay = moment();
//displays current day in the format I choose
;
$("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY"));



function backgroundcolor() {
    var currentcolor = moment().hour();
    console.log(currentcolor);
    $(".time").each(function () {
        //compares time to id of time in html by making it an integer
        var idTime = parseInt($(this).attr("id"));
        console.log(idTime);
        if (idTime === currentcolor) {

            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else if (idTime < currentcolor) {

            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else {

            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    }
    )
}
backgroundcolor();
