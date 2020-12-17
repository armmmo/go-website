
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
    

    function openPlanBW2020(elementIdToShow, idScrollTo) {
        var i;
        var tabs = document.getElementsByClassName("pricing-table-tab-content");
        var buttons = document.getElementsByClassName("pricing-table-tab-button");
        var mobileInputText = document.getElementById("pricing-table-tab-button-text");
        var mobileInputTextAb = document.getElementById("pricing-table-tab-button-text-ab");

        for (i = 0; i < tabs.length; i++) {
            tabs[i].id === elementIdToShow ?
                tabs[i].classList.remove('d-none') :
                tabs[i].classList.add('d-none');
        }
        for (i = 0; i < buttons.length; i++) {
            if (buttons[i].dataset.id === elementIdToShow) {
                if (idScrollTo === 'pricing-table-scroll-to-new-cw-ab') {
                    mobileInputTextAb.innerHTML = buttons[i].innerText;
                } else {
                    mobileInputText.innerHTML = buttons[i].innerText;
                }
                buttons[i].classList.add('bg-red');
            } else {
                buttons[i].classList.remove('bg-red');
            }
        }
        this.scrollToTargetWithNavigationOffset(idScrollTo, -20)
    }

