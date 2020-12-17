
<script>
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos && currentScrollPos != 0) {
            document.getElementById("nav").style.top = "0";
            document.getElementById("nav").style.boxShadow = "0px 0px 8px 0px rgba(22,35,72,.35)";
        } else if (currentScrollPos > 2000) {
            document.getElementById("nav").style.top = "-100px";
        } else if (currentScrollPos != 0) {
            document.getElementById("nav").style.boxShadow = "0px 0px 8px 0px rgba(22,35,72,.35)";
            document.getElementById("nav").style.padding = "0px 0";
        } else {
            document.getElementById("nav").style.boxShadow = "none";
            document.getElementById("nav").style.padding = "7.5px 0";
        }
        prevScrollpos = currentScrollPos;
    } 
    
</script>