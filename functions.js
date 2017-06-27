$(document).ready(function(){
  $('#addClass').click(function(){
    $('#addRed').addClass("red");
  });

  $('#slide').click(function(){
    $('#ditto').slideToggle("slow");
  });

  $('button.append').click(function(){
    $('p.append').append("<p>This paragraph was appended.</p>")
  });

  $('button.hide').click(function(){
    $('p.hide').hide();
  });

  $('button.show').click(function(){
    $('p.hide').show();
  });

  $('button.slidedown').click(function(){
    if($('p.slidedown').is(":hidden")) {
      $('p.slidedown').slideDown("slow");
    } else {
      $('p.slidedown').hide();
    }

  });

  $('button.slideUp').click(function(){
    if($('p.slideUp').is(":hidden")) {
      $('p.slideUp').show("slow");
    } else {
      $('p.slideUp').slideUp();
    }

  });


});
