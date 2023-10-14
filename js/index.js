
$(document).ready(function(){
    $(".flip").click(function(){
      $(".video video").slideDown("slow");
    });
  });

  $(document).ready(function(){
    $(".stop").click(function(){
      $(".video video").slideUp("slow");
    });
  });