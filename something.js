var bgcArray = ["#673AB7", "#00BCD4", "#03A9F4", "#3F51B5", "#4CAF50", ];
var animals = new Array();
animals[0] = new Array("Elephant", "images/elephant6.svg");
animals[1] = new Array("Cat", "images/cat19.svg");
animals[2] = new Array("Cow", "images/cow9.svg");
animals[3] = new Array("pig", "images/pig4.svg");
animals[4] = new Array("Bird", "images/gull.svg");



var currentVar = 3;





var ranBG = Math.floor(Math.random() * bgcArray.length);
console.log(Please.make_color());

$(function () {

    $('body').css("background-color", bgcArray[ranBG]);
    $("h1").html(animals[currentVar][0]);
    $("img").attr('src', animals[currentVar][1]);
});




$(function () {

    $("body").on("swiperight", function () {
        currentVar = (currentVar + 1) % animals.length;
        animals;
        var curr = currentVar;
        var colorrrr = bgcArray[ranBG];


        var Card = animals[currentVar][0];
        var img = animals[currentVar][1];

        console.log(currentVar);
        $("h1").html(Card);
        $("img").attr('src', img);

        $("body").css("backgroundColor", Please.make_color());





    });

});


$(function () {

    $("body").on("swipeleft", function () {
        animals.reverse();
        currentVar = (currentVar + 1) % animals.length;
        var curr = currentVar;


        var Card = animals[currentVar][0];
        var img = animals[currentVar][1];

        console.log(currentVar);
        $("h1").html(Card);
        $("img").attr('src', img);

        $("body").css("backgroundColor", Please.make_color());





    });

});