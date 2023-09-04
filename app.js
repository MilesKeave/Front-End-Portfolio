


//Nav Bar add color on scroll

const nav = document.getElementsByClassName("nav-bar");
window.onscroll = function () { 
    console.log(document.documentElement.scrollTop);
    for(var i = 0; i < nav.length; i++) {
        if (document.documentElement.scrollTop >= 15 ) {
            nav[i].classList.add("nav-colored");
            nav[i].classList.remove("nav-transparent");
        } 
        else {
            nav[i].classList.add("nav-transparent");
            nav[i].classList.remove("nav-colored");
        }
    }

    
};

//page transitions


$(document).ready(function() { 

    MultiScreen.init(); 
    
    $('#topleft-via-top').click(function () {
    
        MultiScreen.switch_screens(
            {target_id: 'top-screen', enter_animation_command: 'top', exit_animation_command: 'bottom', chain_animation_options: 
                {target_id: 'topleft-screen', enter_animation_command: 'left', exit_animation_command: 'right'}
            });
    
    });
    
    $('#right-via-bottomright').click(function () {
    
        MultiScreen.switch_screens(
            {target_id: 'bottomright-screen', enter_animation_command: 'bottomright', exit_animation_command: 'topleft', chain_animation_options: 
                {target_id: 'right-screen', enter_animation_command: 'top', exit_animation_command: 'bottom'}
            });
    
    });
    
    $('#go-crazy').click(function () {
    
        // inception...
        MultiScreen.switch_screens(
            {target_id: 'bottomright-screen', enter_animation_command: 'bottomright', exit_animation_command: 'topleft', chain_animation_options: 
                {target_id: 'right-screen', enter_animation_command: 'top', exit_animation_command: 'bottom',
                    chain_animation_options: 
                    {target_id: 'topright-screen', enter_animation_command: 'top', exit_animation_command: 'bottom',
                        chain_animation_options: 
                        {target_id: 'top-screen', enter_animation_command: 'left', exit_animation_command: 'right',
                            chain_animation_options: 
                            {target_id: 'topleft-screen', enter_animation_command: 'left', exit_animation_command: 'right',
                                chain_animation_options: 
                                {target_id: 'left-screen', enter_animation_command: 'bottom', exit_animation_command: 'top',
                                    chain_animation_options: 
                                    {target_id: 'bottomleft-screen', enter_animation_command: 'bottom', exit_animation_command: 'top',chain_animation_options: 
                                        {target_id: 'bottom-screen', enter_animation_command: 'right', exit_animation_command: 'left',chain_animation_options: 
                                            {target_id: 'center-screen', enter_animation_command: 'top', exit_animation_command: 'bottom'}
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
    
    });
    
    }); 

