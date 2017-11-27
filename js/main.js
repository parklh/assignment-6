    function openNav() {
      document.getElementById("top-nav").style.width = "250px";
    }

    function closeNav() {
      document.getElementById("nav").style.width = "100px";
    }

    $('#menu').click(function(){
        if ($(this).hasClass('open')) {
            closeNav();
            $(this).removeClass('open');
            $('#top-nav').removeClass('open');
        } else {
            openNav();
            $(this).addClass('open');
            $('#top-nav').addClass('open');
        }

    });