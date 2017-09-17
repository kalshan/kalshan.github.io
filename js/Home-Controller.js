var Letters=['A','B','C','D','E','F','G','H'];
var numbers=[1, 2, 3, 4, 5, 6, 7, 8];
var scoresnum=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

var currentPossition;
var suares;
var chesspieces;

var pondCount;
var CountArray= new Array(9);

$(document).ready(function () {
    suares=$('.square');
    chesspieces=$('.chesspieces');
    pondCount=0;
    for(var i=0;i<CountArray.length;i++){
        CountArray[i]=0;
    }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.chesspieces').on("click",function (eventData) {
    currentPossition=$(this);
    console.log(currentPossition);

    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('blackpond')){
        pondCount=0;
        pathofBlackpond(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('whitepond')){
        pondCount=0;
        pathofWhitekpond(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('Rook')){
        pathofRook(currentPossition);

    }
});
//////////////////////////////////////////////////
//
//
// function pathofWhiteRook(parameters) {
//
//     currentPossition = eventData;
//     suares.removeClass('selectpath');
//     chesspieces.removeClass('clickpiece');
//     suares.removeClass('crosspiece');
//     var currentId = currentPossition.parent().attr('id');
//     var letter = currentId.charAt(0);
//     var no = currentId.charAt(1);
//     var LettersArrayPossition = ($.inArray(letter, Letters));
//     var numArrayPossition = ($.inArray(parseInt(no), numbers));
//     var tempId = Letters[LettersArrayPossition] + numbers[numArrayPossition + 1];
//
//     var x = LettersArrayPossition;
//     for (var y = numArrayPossition + 1; y < 8; y++) {
//         tempId = Letters[x] + numbers[y];
//         if (!($("#" + tempId).children().hasClass('chesspieces'))) {
//             $("#" + tempId).addClass('selectpath');
//             currentPossition.addClass('clickpiece');
//         }
//         else {
//             break;
//         }
//     }
//
//     var x1 = numArrayPossition;
//     for (var y = LettersArrayPossition + 1; y < 8; y++) {
//         tempId = Letters[y] + numbers[x1];
//         if (!($("#" + tempId).children().hasClass('chesspieces'))) {
//             $("#" + tempId).addClass('selectpath');
//             currentPossition.addClass('clickpiece');
//         }
//         else {
//             break;
//         }
//     }
//
//     var x2 = numArrayPossition;
//     for (var y = LettersArrayPossition - 1; y >= 0; y--) {
//         tempId = Letters[y] + numbers[x2];
//         if (!($("#" + tempId).children().hasClass('chesspieces'))) {
//             $("#" + tempId).addClass('clickpiece');
//             currentPossition.addClass('clickpiece');
//         }
//         else {
//             break;
//         }
//     }
//     for (var y = numArrayPossition - 1; y >= 0; y--) {
//         tempId = Letters[x] + numbers[y];
//         if (!($("#" + tempId).children().hasClass('chesspieces'))) {
//             $("#" + tempId).addClass('selectpath');
//             currentPossition.addClass('clickpices');
//         }
//         else {
//             break;
//         }
//     }
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofRook(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    suares.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];



    var x=LettersArrayPossition;
    for (var y=numArrayPossition+1;y<8;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    var x1=numArrayPossition;
    for (var y=LettersArrayPossition+1;y<8;y++){
        tempId=Letters[y]+numbers[x1];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    var x2=numArrayPossition;
    for (var y=LettersArrayPossition-1;y>=0;y--){
        tempId=Letters[y]+numbers[x2];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    for (var y=numArrayPossition-1;y>=0;y--){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else{
            break;
        }
    }


}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofBlackpond(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    suares.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var tempId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var x=LettersArrayPossition;

    for (var y=numArrayPossition+1;y<4;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    if (!($("#"+tempId).children().hasClass('chesspieces'))){
        $("#"+tempId).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }
    if ($("#"+tempId1).children().hasClass('white')){
        $("#"+tempId1).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if ($("#"+tempId2).children().hasClass('white')){
        $("#"+tempId2).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function pathofWhitekpond(eventData) {

    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    var currentId=currentPossition.parent().attr('id');
    console.log(currentId);
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var tempId2=Letters[LettersArrayPossition]+numbers[numArrayPossition-2];

    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId4=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];
    switch(currentPossition.attr('id')){
        case "im17" :CountArray[0]++; break;
        case "im18" :CountArray[1]++; break;
        case "im19" :CountArray[2]++; break;
        case "im20" :CountArray[3]++; break;
        case "im21" :CountArray[4]++; break;
        case "im22" :CountArray[5]++; break;
        case "im23" :CountArray[6]++; break;
        case "im24" :CountArray[7]++; break;
    }

    if (CountArray[0]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
    if (CountArray[1]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
    if (CountArray[2]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
    if (CountArray[3]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
    if (CountArray[4]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
    if (CountArray[5]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
    if (CountArray[6]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
    if (CountArray[7]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
    if (CountArray[8]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

var IdW=$("#firstRow").children().first().attr('id');
var IdB=$("#firstRowB").children().first().attr('id');

$(".square").on("click",function (eventData) {
    var currentSquar=$(this);
    var currentpiece=$(".chesspieces.clickpiece");
    if ($(currentSquar).hasClass('selectpath')) {
        currentSquar.append(currentpiece);
        chesspieces.removeClass('clickpiece');
        suares.removeClass('selectpath');
        suares.removeClass('crosspiece');
    }
    if ($(currentSquar).hasClass('crosspiece')) {
        var y=$(currentpiece).clone();
        $(currentpiece).remove();

        console.log(IdB);
        if(currentpiece.hasClass('Black')){
            var x=$(currentSquar).children().clone();
            $("#"+IdW).append(x);
            IdW++;
        }else{
            var x=$(currentSquar).children().clone();
            $("#"+IdB).append(x);
            IdB++;
        }
        $(currentSquar).children().remove();
        currentSquar.append(currentpiece);
        suares.removeClass('selectpath');
        chesspieces.removeClass('clickpiece');
        suares.removeClass('crosspiece');
    }
});









