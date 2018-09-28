        // Slidebars
        var slidebars = function(){var t = $("[canvas]"), e = {}, i = !1, n = !1, s = ["top", "right", "bottom", "left"], r = ["reveal", "push", "overlay", "shift"], o = function(i){var n = $(), s = "0px, 0px", r = 1e3 * parseFloat(e[i].element.css("transitionDuration"), 10); return("reveal" === e[i].style || "push" === e[i].style || "shift" === e[i].style) && (n = n.add(t)), ("push" === e[i].style || "overlay" === e[i].style || "shift" === e[i].style) && (n = n.add(e[i].element)), e[i].active && ("top" === e[i].side?s = "0px, " + e[i].element.css("height"):"right" === e[i].side?s = "-" + e[i].element.css("width") + ", 0px":"bottom" === e[i].side?s = "0px, -" + e[i].element.css("height"):"left" === e[i].side && (s = e[i].element.css("width") + ", 0px")), {elements:n, amount:s, duration:r}}, c = function(t, i, n, s){return a(t)?!1:void(e[t] = {id:t, side:i, style:n, element:s, active:!1})}, a = function(t){return e.hasOwnProperty(t)?!0:!1}; this.init = function(t){return i?!1:(n || ($("[off-canvas]").each(function(){var t = $(this).attr("off-canvas").split(" ", 3); return t && t[0] && - 1 !== s.indexOf(t[1]) && - 1 !== r.indexOf(t[2])?void c(t[0], t[1], t[2], $(this)):!1}), n = !0), i = !0, this.css(), $(f).trigger("init"), void("function" == typeof t && t()))}, this.exit = function(t){if (!i)return!1; var e = function(){i = !1, $(f).trigger("exit"), "function" == typeof t && t()}; this.getActiveSlidebar()?this.close(e):e()}, this.css = function(t){if (!i)return!1; for (var n in e)if (a(n)){var s; s = "top" === e[n].side || "bottom" === e[n].side?e[n].element.css("height"):e[n].element.css("width"), ("push" === e[n].style || "overlay" === e[n].style || "shift" === e[n].style) && e[n].element.css("margin-" + e[n].side, "-" + s)}this.getActiveSlidebar() && this.open(this.getActiveSlidebar()), $(f).trigger("css"), "function" == typeof t && t()}, this.open = function(t, n){if (!i)return!1; if (!t || !a(t))return!1; var s = function(){e[t].active = !0, e[t].element.css("display", "block"), $(f).trigger("opening", [e[t].id]); var i = o(t); i.elements.css({"transition-duration":i.duration + "ms", transform:"translate(" + i.amount + ")"}), setTimeout(function(){$(f).trigger("opened", [e[t].id]), "function" == typeof n && n()}, i.duration)}; this.getActiveSlidebar() && this.getActiveSlidebar() !== t?this.close(s):s()}, this.close = function(t, n){if ("function" == typeof t && (n = t, t = null), !i)return!1; if (t && !a(t))return!1; if (t || (t = this.getActiveSlidebar()), t && e[t].active){e[t].active = !1, $(f).trigger("closing", [e[t].id]); var s = o(t); s.elements.css("transform", ""), setTimeout(function(){s.elements.css("transition-duration", ""), e[t].element.css("display", ""), $(f).trigger("closed", [e[t].id]), "function" == typeof n && n()}, s.duration)}}, this.toggle = function(t, n){return i && t && a(t)?void(e[t].active?this.close(t, function(){"function" == typeof n && n()}):this.open(t, function(){"function" == typeof n && n()})):!1}, this.isActive = function(){return i}, this.isActiveSlidebar = function(t){return i && t && a(t)?e[t].active:!1}, this.getActiveSlidebar = function(){if (!i)return!1; var t = !1; for (var n in e)if (a(n) && e[n].active){t = e[n].id; break}return t}, this.getSlidebars = function(){if (!i)return!1; var t = []; for (var n in e)a(n) && t.push(e[n].id); return t}, this.getSlidebar = function(t){return i && t && t && a(t)?e[t]:!1}, this.events = {}; var f = this.events; $(window).on("resize", this.css.bind(this))};
        // Sidebar DOM
        (function ($) {
        // Create a new instance of Slidebars
        var controller = new slidebars();
                // Initialize Slidebars
                controller.init();
                // Left Slidebar controls
                $('.js-toggle-left-slidebar').on('click', function (event){
        event.stopPropagation();
                controller.toggle('slidebar-1');
        });
                // Close any
                $(controller.events).on('opened', function (){
        $('[canvas="container"]').addClass('js-close-any-slidebar');
        });
                $(controller.events).on('closed', function (){
        $('[canvas="container"]').removeClass('js-close-any-slidebar');
        });
                $('body').on('click', '.js-close-any-slidebar', function (event){
        event.stopPropagation();
                controller.close();
        });
        }) (jQuery);
        
        
// Scroll to top
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });
        
        $('.scroll-to-top').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop : 0}, 800);
        });
        
        $('.btnLogin').on('click', function(e) {
            window.location.href = "https://id.zalo.me/account/login?continue=" + window.location.href;
        });
        
        function detectSupportNewSersion() {
            var url = "";
            if (navigator.userAgent.indexOf("WOW64") != - 1 ||
                            navigator.userAgent.indexOf("Win64") != - 1) {
                url = "http://res.zaloapp.com/hybrid/Zalo%20Setup.exe ";
            } else {
                url = "http://res.zaloapp.com/hybrid/Zalo%20Setup-32bit.exe"
            }
            
            var ua = navigator.userAgent.toLowerCase();
            var isWinXP = ua.indexOf('windows nt 5.1') > 0;
            if (!isWinXP) {
                return url;
            }
            return "";
        }
        var url = detectSupportNewSersion();
        (function () {
        var pgwBrowser = $.pgwBrowser();
        switch (pgwBrowser.os.group) {
            case "Windows":
                $("#mac").css("display", "none");
                $("#ubuntu").css("display", "none");
                $("#compatmac").css("display", "none");
                $("#compatubuntu").css("display", "none");
                break;
            case "Mac OS":
                $("#menu-containerId").css("font-family", 'Roboto, "Helvetica Neue", sans-serif');
                $("#windows").css("display", "none");
                $("#ubuntu").css("display", "none");
                $("#compatwindows").css("display", "none");
                $("#compatubuntu").css("display", "none");
                break;
            case "Linux":
                $("#windows").css("display", "none");
                $("#mac").css("display", "none");
                $("#compatwindows").css("display", "none");
                $("#compatmac").css("display", "none");
                $("#ubuntu").css("display", "none");
                break;
            case "iOS": 
                $("#link-android").css("display", "none");
                $("#link-nokia").css("display", "none");
                $("#link-window").css("display", "none");
                break;
            case "Windows Phone":
                $("#link-iphone").css("display", "none");
                $("#link-android").css("display", "none");
                $("#link-nokia").css("display", "none");
                break;
            case "Android":
                $("#link-iphone").css("display", "none");
                $("#link-nokia").css("display", "none");
                $("#link-window").css("display", "none");
                break;
            default :
                $("#link-window").css("display", "none");
                $("#link-iphone").css("display", "none");
                $("#link-iphone").css("display", "none");
        }})()

        function isIE(userAgent) {
            userAgent = userAgent || navigator.userAgent;
            return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;
         }

        var userAgent = window.navigator.userAgent;
        if (isIE(userAgent)) {
            $('#web').css("display", "none");
        }

