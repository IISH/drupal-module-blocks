    jQuery(document).ready(function($){     
      $('.browse-menu li.browse-leaf .browse-link').click(function() {
				if($(this).parent().hasClass('open')) {
				  $(this).parent().removeClass('open');
				}
				else {
				  $('.browse-menu li.browse-leaf').removeClass('open');
				  $(this).parent().addClass('open');
				}	
        
        $(this).parent().siblings().children('.browse-menu-content').hide();        
        $(this).siblings('.browse-menu-content').toggle().pause();       
        return false;
      });
    }); 
