!function(t){t((function(){var e=t(window).width();t(".dynamic-color .col").each((function(){t(this).children().each((function(){var e=t(this).css("background-color"),o=t(this).attr("class");t(this).html(function(t){if(/^#[0-9A-F]{6}$/i.test(t))return t;if(null===(t=t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)))return"N/A";function e(t){return("0"+parseInt(t).toString(16)).slice(-2)}return"#"+e(t[1])+e(t[2])+e(t[3])}(e)+" "+o),(o.indexOf("darken")>=0||t(this).hasClass("black"))&&t(this).css("color","rgba(255,255,255,.9")}))})),setTimeout((function(){var e=t(".toc-wrapper .table-of-contents").length?t(".toc-wrapper .table-of-contents").height():0,o=(t("body > footer").first().length?t("body > footer").first().offset().top:0)-95-e-260;t("nav").length?t(".toc-wrapper").pushpin({top:t("nav").height(),bottom:o}):t("#index-banner").length?t(".toc-wrapper").pushpin({top:t("#index-banner").height(),bottom:o}):t(".toc-wrapper").pushpin({top:0,bottom:o})}),100);var o=t(".buysellads"),a=3;!function e(){if(!o.find("#carbonads").length)if((a-=1)>=0)setTimeout(e,500);else{var n=t('<div id="carbonads"><span><a class="carbon-text" href="#!" onclick="document.getElementById(\'paypal-donate\').submit();"><img src="images/donate.png" /> Help support us by turning off adblock. If you still prefer to keep adblock on for this page but still want to support us, feel free to donate. Any little bit helps.</a></form></span></div>');o.append(n)}}(),t(".buysellads.buysellads-demo .close").on("click",(function(){t(this).parent().remove()})),t(".github-commit").length&&t.ajax({url:"https://api.github.com/repos/dogfalo/materialize/commits/master",dataType:"json",success:function(o){var a=o.sha,n=jQuery.timeago(o.commit.author.date);e<1120&&(a=a.substring(0,7)),t(".github-commit").find(".date").html(n),t(".github-commit").find(".sha").html(a).attr("href",o.html_url)}}),t("#flow-toggle").click((function(){t("#flow-text-demo").children("p").each((function(){t(this).toggleClass("flow-text")}))}));var n=t("#container-toggle-button");n.click((function(){t("body .browser-window .container, .had-container").each((function(){t(this).toggleClass("had-container"),t(this).toggleClass("container"),t(this).hasClass("container")?n.text("Turn off Containers"):n.text("Turn on Containers")}))})),function(){try{return document.createEvent("TouchEvent"),!0}catch(t){return!1}}()&&t("#nav-mobile").css({overflow:"auto"});var i=document.getElementById("indeterminate-checkbox");null!==i&&(i.indeterminate=!0),t(".pushpin-demo-nav").length&&t(".pushpin-demo-nav").each((function(){var e=t(this),o=t("#"+t(this).attr("data-target"));e.pushpin({top:o.offset().top,bottom:o.offset().top+o.outerHeight()-e.height()})})),t("#scale-demo").length&&t("#scale-demo-trigger").length&&t("#scale-demo-trigger").click((function(){t("#scale-demo").toggleClass("scale-out")})),t("#tabs-swipe-demo").length&&t("#tabs-swipe-demo").tabs({swipeable:!0}),t(".carousel.carousel-slider").carousel({fullWidth:!0}),t(".carousel").carousel(),t(".slider").slider(),t(".parallax").parallax(),t(".modal").modal(),t(".scrollspy").scrollSpy(),t(".button-collapse").sideNav({edge:"left"}),t(".datepicker").pickadate({selectYears:20}),t(".timepicker").pickatime(),t("select").not(".disabled").material_select(),t("input.autocomplete").autocomplete({data:{Apple:null,Microsoft:null,Google:"http://placehold.it/250x250"}}),t(".chips").material_chip(),t(".chips-initial").material_chip({readOnly:!0,data:[{tag:"Apple"},{tag:"Microsoft"},{tag:"Google"}]}),t(".chips-placeholder").material_chip({placeholder:"Enter a tag",secondaryPlaceholder:"+Tag"}),t(".chips-autocomplete").material_chip({autocompleteOptions:{data:{Apple:null,Microsoft:null,Google:null}}})}))}(jQuery);