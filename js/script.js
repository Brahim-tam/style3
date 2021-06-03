   //لفتح القائمة الجانبية 
   function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  //لغلق القائمة الجانبية 
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  $(function() {
    var header = $("#headerr");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            header.removeAttr('id','headerr').attr('id', 'header');
            $("#branding").removeAttr("style");
            
            $( ".dFixed" ).removeClass( ".dFixed" ).addClass( "Fixedn" );
            $( ".nFixed" ).removeClass( ".nFixed" ).addClass( "Fixedd" );
        } else {
            header.removeAttr('id','header').attr('id', 'headerr');
            $("#branding").attr("style","flex-grow:8;");
            
            $(".Fixedn").removeClass("Fixedn");
            $(".Fixedn").removeClass("Fixedd");
        }
    });
});

$(function checkPosition() {
  if (window.matchMedia('(max-width: 530px)').matches) {
      alert('here');
    $('#mySidenav').prepend(' <a class="lLink hide" href="index.html"><li class="current lItem ">الصفحة الرئيسية</li></a>')
      $('#mySidenav').prepend(' <a class="lLink hide" href="index.html"><li class="current lItem ">معرض الأعمال</li></a>')
      
  } else {
    alert('back')
    $('#mySidenav').remove('.lItem')
  }

  $('#toUp').click(()=>{
    $("html,body").animate({scrollTop:0},2700);
    return false ;
  })

});

