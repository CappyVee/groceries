$(document).ready(function(){
  $("#formGroc").submit(function(event){
    var grocOne = $("input#grocFirst").val();
    var grocOneCaps = grocOne.charAt(0).toUpperCase() + grocOne.slice(1);
    var grocTwo = $("input#grocSecond").val();
    var grocTwoCaps = grocTwo.charAt(0).toUpperCase() + grocTwo.slice(1);
    var grocThree = $("input#grocThird").val();
    var grocThreeCaps = grocThree.charAt(0).toUpperCase() + grocThree.slice(1);
    var grocFour = $("input#grocFourth").val();
    var grocFourCaps = grocFour.charAt(0).toUpperCase() + grocFour.slice(1);
    var grocFive = $("input#grocFifth").val();
    var grocFiveCaps = grocFive.charAt(0).toUpperCase() + grocFive.slice(1);
    //store variables
    var grocsCaps = [grocOneCaps, grocTwoCaps, grocThreeCaps, grocFourCaps, grocFiveCaps];
    alert(grocsCaps);
    event.preventDefault();
  });//end submit function
});//ready function end
