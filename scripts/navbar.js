var $els = $('.menu a, .menu header');
        var count = $els.length;
        var grouplength = Math.ceil(count/3);
        var groupNumber = 0;
        var i = 1;
        $('.menu').css('--count',count+'');
        $els.each(function(j){
            if ( i > grouplength ) {
                groupNumber++;
                i=1;
            }
            $(this).attr('data-group',groupNumber);
            i++;
        });

        $('.menu footer button').on('click',function(e){
            e.preventDefault();
            $els.each(function(j){
                $(this).css('--top',$(this)[0].getBoundingClientRect().top + ($(this).attr('data-group') * -15) - 25);
                $(this).css('--delay-in',j*.05+'s');//decrease that .1 to increase speed of closing
                $(this).css('--delay-out',(count-j)*.0005+'s');//decrease that .1 to increase speed of opening(YOUR SOLN IS .0005)
                $(this).css('--left',$(this)[0].getBoundingClientRect().left - (document.documentElement.clientWidth));

                //works till here
                $(this).css('--ntop',$(this)[0].getBoundingClientRect().top + ($(this).attr('data-group') * -8.5) - 15);
            });
            $('.menu').toggleClass('closed');
            e.stopPropagation();
        });



        $( document ).ready(function() {
          $els.each(function(j){
            $(this).css('--top',$(this)[0].getBoundingClientRect().top + ($(this).attr('data-group') * -15) - 25);
            $(this).css('--delay-in',-1+'s');
            $(this).css('--delay-out',-1+'s');
            $(this).css('--left',$(this)[0].getBoundingClientRect().left - (document.documentElement.clientWidth));

            //added later
            $(this).css('--ntop',$(this)[0].getBoundingClientRect().top + ($(this).attr('data-group') * -8.5) - 10);    
        });
        $('.menu').toggleClass('closed');
        e.stopPropagation();
      });
        
      /*on click link nav disappears*/
      $('.menu li a ').on('click',function(e){
        $els.each(function(j){
            $(this).css('--top',$(this)[0].getBoundingClientRect().top + ($(this).attr('data-group') * -15) - 25);
            $(this).css('--delay-in',j*.05+'s');
            $(this).css('--delay-out',(count-j)*.0005+'s');
            $(this).css('--left',$(this)[0].getBoundingClientRect().left - (document.documentElement.clientWidth));

            //works till here
            $(this).css('--ntop',$(this)[0].getBoundingClientRect().top + ($(this).attr('data-group') * -8.5) - 15);
        });
        $('.menu').toggleClass('closed');
    });
