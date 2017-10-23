$(document).ready(function(){
  $("#formGroc").submit(function(event){
    debugger;
    var grocOne = $("#grocFirst").val();
    var grocOneCaps = grocOne.charAt(0).toUpperCase() + grocOne.slice(1);
    var grocTwo = $("#grocSecond").val();
    var grocTwoCaps = grocTwo.charAt(0).toUpperCase() + grocTwo.slice(1);
    var grocThree = $("#grocThird").val();
    var grocThreeCaps = grocThree.charAt(0).toUpperCase() + grocThree.slice(1);
    var grocFour = $("#grocFourth").val();
    var grocFourCaps = grocFour.charAt(0).toUpperCase() + grocFour.slice(1);
    var grocFive = $("#grocFifth").val();
    var grocFiveCaps = grocFive.charAt(0).toUpperCase() + grocFive.slice(1);
    //store variables
    var grocsCaps = [grocOneCaps, grocTwoCaps, grocThreeCaps, grocFourCaps, grocFiveCaps];
    var grocsCapsAlph = grocsCaps.sort();
    alert(grocsCapsAlph);
    grocsCapsAlph.forEach(function(grocCapsAlph){
      $(".display").append("<li>" + grocCapsAlph + "</li>");
    });//end foreach function


    $(".show").hide();
    $(".hide").show();

    //create arrays, capitalize first letter, alphabetize
    event.preventDefault();
  });//end submit function
});//ready function end
