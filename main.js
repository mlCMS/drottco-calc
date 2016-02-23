/* FOR LOCAL DEV */
/*
400 SEK / h - CALC SUPPLIED VALUE
1 h / 25 m2 - CALC SUPPLIED VALUE
400 SEK / 25 m2 - CALC SUPPLIED VALUE
16 SEK / m2 - PRICE PER SQUARE METER
*/
console.log("Local JS from html initiated after document loaded.");
jQuery.noConflict();
jQuery(document).ready(function($) {
console.log('jQuery initiated in no conflict mode.');
/* functions to calculcate and display price */
/*  function unusedFunc() {
    var str = $("#inum").val();
    $("#displayBlock").text(areaVal);
  }
*/

/* event listeners */

/* $('#displayBlock').change(function () {
    var aT52 = $('#everyWeek').val();
    var aT26 = $('#everyOtherWeek').val();
    var aT13 = $('#onceAMonth').val();
    $('#everyWeekRut').text(Math.round(aT52 / 2));
    $('#everyOtherWeekRut').text(Math.round(aT26 / 2));
    $('#onceAMonthRut').text(Math.round(aT13 / 2));
  })
  .change();
*/

/* event listeners v2 */
$('#inum')[0].oninput = function () {
  var areaVal = $("#inum").val();
  var f52W = $('[name="52Week"').val();
  var f26W = $('[name="26Week"').val();
  var f13W = $('[name="13Week"').val();
  var priceMod = $('[name="pMod"').val();
  // To get price per month, divide by 12
  // To get a rounded price use Math.round()
  $('#displayBlock').text(Math.round(areaVal * priceMod / 12));
  $('#everyWeek').text(Math.round(areaVal * f52W * priceMod / 12));
  $('#everyOtherWeek').text(Math.round(areaVal * f26W * priceMod / 12));
  $('#onceAMonth').text(Math.round(areaVal * f13W * priceMod / 12));
  // After tax-relief
  $('#everyWeekRut').text(Math.round(areaVal * f52W * priceMod / 12 / 2));
  $('#everyOtherWeekRut').text(Math.round(areaVal * f26W * priceMod / 12 / 2));
  $('#onceAMonthRut').text(Math.round(areaVal * f13W * priceMod / 12 / 2));
}
$("#inum")[0].oninput();
});
