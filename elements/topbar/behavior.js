//special thanks: https://stackoverflow.com/questions/30074246/how-to-create-ripple-effect-on-click-material-design
//ripple effect for touch.
jQuery(function($) {

    // MAD-RIPPLE // (jQ+CSS)
    $(document).on("mousedown", "[data-ripple]", function(e) {
    
        var $self = $(this);
        
        if($self.is(".btn-disabled")) {
            return;
        }

        if($self.closest("[data-ripple]")) {
            e.stopPropagation();
        }
        
        var initPos = $self.css("position"),
            offs = $self.offset(),
            x = e.pageX - offs.left,
            y = e.pageY - offs.top,
            dia = Math.min(this.offsetHeight, this.offsetWidth, 100), // start diameter
            $ripple = $('<div/>', {class : "ripple",appendTo : $self });
        
        if(!initPos || initPos==="static") {
            $self.css({position:"relative"});
        }
        
        $('<div/>', {
            class : "rippleWave",
            css : {
            background: $self.data("ripple"),
            width: dia,
            height: dia,
            left: x - (dia/2),
            top: y - (dia/2),
            },
            appendTo : $ripple,
            one : {
            animationend : function(){
                $ripple.remove();
            }
            }
        });
    });
});

function nextScreen() {
    document.getElementById('back-btn-actived').style.margin = "5px";

    document.getElementById('back-btn').style.minWidth = "";
    document.getElementById('back-btn').style.minHeight = "";

    document.getElementById('back-btn-i').style.height = "";
    document.getElementById('back-btn-i').style.width = "";
    
    document.getElementById('topBar-title').style.opacity = "0";

    document.getElementById('topBar-subtitle').style.opacity = "0";

    document.getElementById('heart-i-btn').style.display = '';

    document.getElementById('search-i').style.opacity = '0';

    setTimeout(function() {
        document.getElementById('topBar-subtitle').style.display = 'none';
    },600)

    setTimeout(function() {
        document.getElementById('back-btn-i').style.opacity = "1";

        document.getElementById('topBar-title').style.opacity = "1";
        document.getElementById('topBar-title').innerText = "Screen title";

        document.getElementById('heart-i-btn').style.opacity = '1';

        document.getElementById('notification-i').style.opacity = '1';
    },800)
}

function backScreen() {
    document.getElementById('back-btn-i').style.opacity = "0";

    document.getElementById('topBar-title').style.opacity = "0";

    document.getElementById('heart-i-btn').style.opacity = '0';

    document.getElementById('notification-i').style.opacity = '0';
    

    setTimeout(function() {
        document.getElementById('back-btn-actived').style.margin = "15px"; 

        document.getElementById('back-btn').style.minWidth = "0";
        document.getElementById('back-btn').style.minHeight = "0";

        document.getElementById('back-btn-i').style.height = "0";
        document.getElementById('back-btn-i').style.width = "0";
        
        document.getElementById('topBar-title').innerText = "App Title";
        document.getElementById('topBar-title').style.opacity = "1";

        document.getElementById('topBar-subtitle').style.display = 'block'

        document.getElementById('heart-i-btn').style.display = 'none';

        document.getElementById('search-i').style.opacity = '1';
    },600)

    setTimeout(function() {
        document.getElementById('topBar-subtitle').style.opacity = '1';
    },1200)
}
