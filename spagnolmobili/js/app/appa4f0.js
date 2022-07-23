var map;
var infoWindow;
var places = [];
var Maps = {
  lat: 45.65183799999999,
  lng: 13.776621999999975,
  markerSel: 0,
};

var markers2 = [
  [
    "Titolo 5",
    40.4368122,
    10.8425205,
    2,
    '<h2>Titolo</h2><p>Via del Lavoro 2<br/>37067 Valeggio sul Mincio<br/>Verona, Italy</p><a href="#">VEDI INFO</a>',
  ],
  [
    "Titolo 6",
    42.4368122,
    11.8425205,
    2,
    '<h2>Titolo</h2><p>Via del Lavoro 2<br/>37067 Valeggio sul Mincio<br/>Verona, Italy</p><a href="#">VEDI INFO</a>',
  ],
];

var position = $(window).scrollTop();

var doc = $(document);

App = {
  analytics: true,

  init: function () {
    App.CookiePolicy.showMessage();
    App.CookiePolicy.hideMessage();
    // App.PhoneMenu.init();

    setTimeout(function () {
      App.checkAnimationItem();
    }, 1500);

    // setTimeout( function(){
    // console.log('asd');
    // // App.showHideLoader();
    // }, 2000);

    App.openNav();
    App.closeNav();
    App.toggleSubMenu();
    App.toggleMenuFull();
    App.openCloseSearch();
    App.toggleMenuMobile();
    App.toggleSubFilter();
    App.playVideo();
    App.openFinishes();
    App.openShare();
    App.myFancybox();
    App.animateSvg();
    App.activeSlick();
    App.checkForm();
    App.GoTo.init();
    App.contactForm();
    App.newsletterForm();
    App.storesForm();
    App.switchLocale();
    App.openCloseLegal();

    App.checkSubMenuProductsList();

    $(window).scroll(function () {
      // clearTimeout($.data(this, 'scrollTimer'));
      // $.data(this, 'scrollTimer', setTimeout(function() {
      App.checkDirectionNavigation();

      setTimeout(function () {
        App.checkDirectionNavigation(1);
      }, 3000);
      // }, 0));

      // setTimeout( function(){
      //     App.checkAnimationItem();
      // }, 500);

      App.checkAnimationItem();

      // App.checkDirectionNavigation();
      //
      // setTimeout( function(){
      //     App.checkDirectionNavigation(1);
      // }, 3000);
      //
      // setTimeout( function(){
      //     App.checkAnimationItem();
      // }, 500);
    });

    $(window).on("touchend", App.checkAnimationItem());

    doc.ready(function () {
      // $('.tooltipped').tooltip({ 'position': 'bottom' });

      if ($(".isHomepage").length > 0) {
        $(".subMenuProducts").addClass("hidden");
      }

      if ($(".isHomepage").length > 0) {
        $(window).trigger("scroll");
      }

      // setTimeout( function() {
      //     // App.showHideLoader();
      // }, 500);

      $(this).on("click", ".goTop", function () {
        $("html,body").animate({ scrollTop: 0 }, 700);
      });

      $("select").formSelect();

      $(this).on(
        "change, focus",
        '.select-wrapper input[type="text"]',
        function () {
          var inputWidth = $(this).textWidth();
          $(this).css({
            width: inputWidth * 1.6 + 10,
          });
        }
      );
      $.fn.textWidth = function (text, font) {
        if (!$.fn.textWidth.fakeEl)
          $.fn.textWidth.fakeEl = $("<span>").hide().appendTo(document.body);
        $.fn.textWidth.fakeEl
          .text(text || this.val() || this.text() || this.attr("placeholder"))
          .css("font", font || this.css("font"));
        return $.fn.textWidth.fakeEl.width();
      };
      $(".select-wrapper input").each(function () {
        var inputWidth = $(this).textWidth();
        $(this).css({
          width: inputWidth * 1.6 + 10,
        });
      });

      $(this).on("click", ".noGallery", function (e) {
        e.preventDefault();
      });
      // $('.lazy').Lazy();

      $(this).on("click", ".viewItem", function (e) {
        e.preventDefault();
        $(".item_list.hide").removeClass("hide");
        $(this).slideUp();
      });

      $(this).on("click", ".selectMobile .select-dropdown", function (e) {
        e.preventDefault();
      });

      $(this).on("change", '.form--dashboard [name="country"]', function () {
        country = $(this).val();
        if (country == "IT") {
          $("#form--registration .zipcode-container").hide();
          $("#form--registration .province-container").show();
        } else {
          $("#form--registration .province-container").hide();
          $("#form--registration .zipcode-container").show();
        }
      });
      if ($('.form--dashboard [name="country"]').length > 0) {
        $('.form--dashboard [name="country"]').trigger("change");
      }

      $(this).on("click", ".shareProductWishlist", function (e) {
        e.preventDefault();

        var code = $(this).attr("data-code");
        $('.formShareProductWishlist input[name="code"]').val(code);
        $(".popupShareProductWishlist").addClass("isOpen");
        $(".popupShareProductWishlist .header__hamburger").addClass("active");
      });
      $(this).on(
        "click",
        ".popupShareProductWishlist .closeWishlist",
        function (e) {
          e.preventDefault();
          $(".popupShareProductWishlist").removeClass("isOpen");
          $(".popupShareProductWishlist .header__hamburger").removeClass(
            "active"
          );
        }
      );
      $(this).on("submit", ".formShareProductWishlist", function (e) {
        e.preventDefault();
        var qst = $(this);
        var datas = qst.serialize();

        var code = qst.find("input[name='code']").val();

        $.ajax({
          headers: {
            "X-CSRF-TOKEN": $('meta[name="_token"]').attr("content"),
          },
          url: Helper.Router.route("dashboard_profile_wishlist_post_share", {
            code: code,
          }), //'+code,
          method: "POST",
          dataType: "json",
          data: datas,
          error: function (error) {
            console.log(error);
          },
          beforeSend: function () {
            qst.find(".response").slideUp();
          },
          success: function (response) {
            console.log(response);

            qst.find(".response").html(response.message).slideDown();
            if (response.error == 1) {
            } else {
              setTimeout(function () {
                $(".popupShareProductWishlist").removeClass("isOpen");
              }, 4000);
            }
          },
          complete: function () {
            setTimeout(function () {
              qst.find(".response").slideUp();
            }, 4000);
          },
        });
      });

      $(this).on("click", ".dropdown-toggle-dashboard", function () {
        $(".dropdown-toggle-dashboard-menu").slideToggle();
      });

      $(this).on("click", ".deleteMyAccount", function (e) {
        e.preventDefault();

        $(".deleteAccount").addClass("isOpen");
      });
      $(this).on("click", ".closeDeleteAccount", function (e) {
        e.preventDefault();

        $(".deleteAccount").removeClass("isOpen");
      });
      $(this).on("click", ".arrow-down", function (e) {
        e.preventDefault();
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $(window).height(),
            },
            1000
          );
      });
    });

    // $(window).on( "load", function(){
    // $('.tooltipped').tooltip({ 'position': 'bottom' });
    // setTimeout( function(){
    //     $('html').css({ 'height': $(document).outerHeight() });
    //     $('body').css({ 'height': '100%' });
    // }, 2000);
    // });
  },

  checkForm: function () {
    if (
      $(".form--contacts").length > 0 ||
      $(".form--newsletter").length > 0 ||
      $(".form--dashboard").length > 0 ||
      $(".form--stores").length > 0
    ) {
      doc.on(
        "keyup, change, onAutoFillStart",
        ".form--contacts input, .form--contacts select, .form--newsletter input, .form--newsletter select, .form--stores input, .form--stores select, .form--dashboard input, .form--dashboard select",
        function () {
          var qst = $(this);
          var t = qst.val();
          if (t == "") {
            qst.closest(".input-group").removeClass("isNotEmpty");
          } else {
            qst
              .closest(".input-group")
              .addClass("isNotEmpty")
              .removeClass("error");
          }
        }
      );
      setTimeout(function () {});
    }
  },

  switchLocale: function () {
    $("#locale-select").on("change", function () {
      window.location.href = this.value;
    });
  },

  myFancybox: function () {
    $("[data-fancybox]").fancybox({
      infobar: true,
      toolbar: true,
      keyboard: true,

      margin: [-20, 0],

      buttons: [
        // 'slideShow',
        // 'fullScreen',
        // 'thumbs',
        // 'share',
        //'download',
        //'zoom',
        "close",
      ],
    });
  },

  checkSubMenuProductsList: function () {
    if ($(".subMenuProductsList").length > 0) {
      doc.on("click", ".subMenuProductsList a", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var id = $(this).attr("href");
        if (id == "#" || id == "" || id == "javascript: void(0);") {
          return;
        }

        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $(id).offset().top - 140,
            },
            1000
          );
      });
      $(window).scroll(function () {
        var scroll = $(this).scrollTop();

        $(".subMenuProductsList a").each(function () {
          var qst = $(this);
          var id = qst.attr("href");
          if (id == "#" || id == "") {
            qst.removeClass("active");
            return;
          } else if (id == "javascript: void(0);") {
          } else {
            $(this).removeClass("active");

            // console.log(id);
            var row = $(id);
            if (row.length > 0) {
              // console.log(id+" - "+qst.offset().top+" - "+scroll);
              if (row.offset().top - 150 < scroll) {
                // console.log("click: " + id);
                // qst.trigger("click");
                $(".subMenuProductsList a").removeClass("active");
                qst.addClass("active");
              }
            }
          }
        });

        if ($(".subMenuProductsList a.active").length == 0) {
          $(".subMenuProductsList a").first().addClass("active");
        }
      });
      $(window).trigger("scroll");

      doc.on("change", ".subMenuProducts select", function () {
        var val = $(this).val();
        if ($(this).hasClass("goto")) {
          if (val == "goTop") {
            $(".goTop").trigger("click");
          } else {
            $("html, body")
              .stop()
              .animate(
                {
                  scrollTop: $(val).offset().top - 140,
                },
                1000
              );
          }
        } else {
          window.location.href = val;
        }
      });
    }
  },

  animateSvg: function () {
    // if( $("#animate-svg").length > 0 ){
    //     var mySVG = new Vivus('animate-svg', {duration: 100});
    //     mySVG.reset().play(1);
    // }
  },

  checkAnimationItem: function () {
    // return;
    // if( $("body.mobile").length > 0 ){
    //     return;
    // }
    // var elem = "[data-animation]:not(.justAnimate)";
    var elem = ".hasEffect:not(.justAnimate)";
    $(elem).each(function (i) {
      var item = $(this);
      // console.log(item);
      if (item.visible(true)) {
        var classeAdd = item.attr("data-animation");
        var del = parseInt(item.attr("data-delay"));
        if (del > 0) {
          del = del / 1.5;
          setTimeout(function () {
            item.addClass(classeAdd + " justAnimate");
          }, del);
        } else {
          item.addClass(classeAdd + " justAnimate");
        }
      }
    });
  },

  checkAnimationItem2: function (classAnimation, $isVisible) {
    // return;
    // var elem = "[data-animation]:not(.justAnimate)";
    var elem = "." + classAnimation + ":not(.justAnimate)";
    $(elem).each(function (i) {
      var item = $(this);
      var classeAdd = item.attr("data-animation");
      var del = parseInt(item.attr("data-delay"));
      if ($isVisible == 1) {
        setTimeout(function () {
          item.addClass(classeAdd + " justAnimate");
        }, del);
      } else if (item.visible(true)) {
        if (del > 0) {
          setTimeout(function () {
            item.addClass(classeAdd + " justAnimate");
          }, del);
        } else {
          item.addClass(classeAdd + " justAnimate");
        }
      }
    });
  },

  checkAnimationItem2Reverse: function (classAnimation) {
    // return;
    var elem = "." + classAnimation;
    $(elem).each(function (i) {
      var item = $(this);
      // if( item.visible(true) ){
      var classeAdd = item.attr("data-animation");
      var del = parseInt(item.attr("data-delay"));
      // console.log(classeAdd);
      if (del > 0) {
        setTimeout(function () {
          item.removeClass(classeAdd + " justAnimate");
        }, del);
      } else {
        item.removeClass(classeAdd + " justAnimate");
      }
      // }
    });
  },

  openFinishes: function () {
    doc.on("click", ".openFinishes", function () {
      var qst = $(this);
      // $(this).closest(".container").find(".DesktopViewTablet .row").slideToggle();
      qst.closest(".container").find(".mobileViewTablet").slideToggle();
      if (qst.hasClass("closest")) {
        $(this).html($(this).attr("data-open"));
        qst.removeClass("closest");
      } else {
        $(this).html($(this).attr("data-close"));
        qst.addClass("closest");
      }

      // $(this).slideToggle();
    });

    doc.on("click", ".row--16 .filters a", function () {
      var filter = $(this).attr("data-filter");
      $(this).closest(".container").find(".mobileViewTablet").slideDown();
      $(".row--16 .filters a").removeClass("active");
      $(this).addClass("active");
      $(".openFinishes").slideUp();

      $(this).closest(".container").find(".contFinishes .square-color").hide();
      $(this).closest(".container").find("h5").hide();
      $(
        ".contFinishes .square-color." + filter + ", .contFinishes h5." + filter
      ).show();

      $(this)
        .closest(".row--16")
        .find("#fin2 .slick-track")
        .css({ transform: "translate3d(0px, 0px, 0px)" });
    });

    $(".row--16 .filters").each(function () {
      $(this).find("a").first().trigger("click");
    });
  },

  openShare: function () {
    doc.on("click", ".openShare", function () {
      $(this).closest(".row").find(".shareButton").slideToggle();
    });
  },

  openNav: function () {
    doc.on("click", ".openNav", function () {
      $(".nav").find(".hasEffectInView").removeClass("hasEffect justAnimate");
      setTimeout(function () {
        $(".nav").find(".hasEffectInView").addClass("hasEffect");

        $("body").addClass("navIsOpen");

        setTimeout(function () {
          App.checkAnimationItem();
        }, 100);
      }, 200);
    });
  },

  closeNav: function () {
    doc.on("click", ".closeNav", function () {
      $(".nav .hasEffectInView")
        .removeClass("slideLeftToRightSmall justAnimate")
        .promise()
        .done(function () {
          setTimeout(function () {
            $("body").removeClass("navIsOpen");
          }, 200);
        });
    });
  },

  checkDirectionNavigation: function (recheck) {
    var scroll = $(window).scrollTop();
    var header = $("header, div.header");
    var subMenuProducts = $(".subMenuProducts");
    if (scroll > 100) {
      header.addClass("isScroll").removeClass("isWhite");
    } else {
      header.removeClass("isScroll");

      if ($(".isHomepage").length > 0 && $(".submenuIsOpen").length > 0) {
        header.removeClass("isWhite");
      } else if (
        $(".isHomepage").length > 0 &&
        header.hasClass("scrolledDown")
      ) {
        header.addClass("isWhite");
      } else {
        if ($(".isHomepage").length > 0) {
          header.addClass("isWhite");
        } else {
          header.removeClass("isWhite");
        }
      }
    }

    if (
      scroll > position ||
      (header.hasClass("scrolledDown") && recheck == 1 && scroll > 100)
    ) {
      if ($(".header .menu-item.submenuIsOpen").length > 0) {
        $(".header .menu-item").removeClass("submenuIsOpen");
      }
      subMenuProducts.addClass("scrolledDown").removeClass("scrolledUp");
      // subMenuProducts.removeClass("scrolledUp");
      header.addClass("scrolledDown").removeClass("scrolledUp");
      // header.removeClass("scrolledUp");
    } else {
      header.addClass("scrolledUp").removeClass("scrolledDown");
      // header.removeClass("scrolledDown");
      subMenuProducts.addClass("scrolledUp").removeClass("scrolledDown");
      // subMenuProducts.removeClass("scrolledDown");
    }

    position = scroll;

    App.checkButtonProducts(subMenuProducts, position);
  },

  checkButtonProducts: function (subMenuProducts, position) {
    // console.log("checkButtonProducts");
    var config = $("#config");
    if (config.length > 0) {
      // console.log("checkButtonProducts - 1");
      if (config.offset().top < position) {
        // console.log("checkButtonProducts - 2");
        subMenuProducts.addClass("viewConfig");
      } else {
        // console.log("checkButtonProducts - 3");
        subMenuProducts.removeClass("viewConfig");
      }
    }
  },

  toggleSubMenu: function (submenuIsOpen) {
    doc.on("click", ".menu .menu-has-submenu .menu-title", function () {
      var qst = $(this);
      var attr = qst.attr("data-menu");
      var menu = $("." + attr);
      var setTime = 0;

      if ($("header").hasClass("isWhite")) {
        // console.log("1");
        setTimeout(function () {
          $(".header").addClass("beforeFull");
        }, 200);
        setTime = 200;
      }

      $("header, div.header").removeClass("isWhite");

      $(window).trigger("scroll");

      setTimeout(function () {
        if (qst.closest("li").hasClass("submenuIsOpen")) {
          // console.log("2");
          // close submenu
          menu.hide();
          qst.closest("li").toggleClass("submenuIsOpen");
          menu.closest("li").toggleClass("submenuIsOpen");
          $("header").removeClass("beforeFull");
          App.checkAnimationItem2Reverse("hasEffectInView");
        } else {
          // console.log("3");
          // open submenu
          menu.show();
          qst.closest("li").toggleClass("submenuIsOpen");
          menu
            .closest("li")
            .toggleClass("submenuIsOpen")
            .promise()
            .done(function () {
              setTimeout(function () {
                App.checkAnimationItem2("hasEffectInView");
              }, 900);
            });
          $("header").removeClass("isWhite");
        }

        $("body").toggleClass("submenuIsOpen");
      }, setTime);
    });
  },

  toggleMenuFull: function (submenuIsOpen) {
    // menu
    doc.on("click", ".openMenuFull", function () {
      var qst = $(this);
      $(".menuFull").show();
      $("body").addClass("isOpenMenuFull");
      setTimeout(function () {
        $(".menuFull").addClass("openBrown");

        setTimeout(function () {
          App.checkAnimationItem2("hasEffectInView", 1);
        }, 250);

        $(".menuFull .header__hamburger").addClass("active");
      }, 300);
    });
    doc.on("click", ".closeMenuFull", function () {
      var qst = $(this);
      // $(".menuFull").fadeOut("fast");
      $(".menuFull").fadeOut();
      $("body").removeClass("isOpenMenuFull");
      $(".menuFull").removeClass("openBrown");
      $(".menuFull .header__hamburger").removeClass("active");
    });

    // contacts
    doc.on("click", ".openContacts", function () {
      var qst = $(this);
      $(".form--contacts input[name='fromContact']").val(
        qst.attr("data-fromContact")
      );
      $(".menuFull2").show();
      $("body").addClass("isOpenMenuFull2");
      setTimeout(function () {
        $(".menuFull2").addClass("openBrown");

        setTimeout(function () {
          App.checkAnimationItem2("hasEffectInView", 1);
        }, 250);

        $(".menuFull2 .header__hamburger").addClass("active");
      }, 300);
    });
    doc.on("click", ".closeContacts", function () {
      var qst = $(this);
      $(".menuFull2").fadeOut();
      $("body").removeClass("isOpenMenuFull2");
      $(".menuFull2").removeClass("openBrown");
      $(".menuFull2 .header__hamburger").removeClass("active");
    });

    // newsletter
    doc.on("click", ".openNewsletter", function (e) {
      e.preventDefault();
      var qst = $(this);
      $(".menuFull3").show();
      $("body").addClass("isOpenMenuFull3");
      setTimeout(function () {
        $(".menuFull3").addClass("openBrown");

        setTimeout(function () {
          App.checkAnimationItem2("hasEffectInView", 1);
        }, 250);

        $(".menuFull3 .header__hamburger").addClass("active");
      }, 300);
    });
    doc.on("click", ".closeNewsletter", function () {
      var qst = $(this);
      $(".menuFull3").fadeOut();
      $("body").removeClass("isOpenMenuFull3");
      $(".menuFull3").removeClass("openBrown");
      $(".menuFull3 .header__hamburger").removeClass("active");
    });
  },

  toggleMenuMobile: function () {
    doc.on("click", ".openSideMenu", function () {
      if ($(".menuMobileSubMenu.menuMobileSubMenuIsOpen").length > 0) {
        $(".menuMobileSubMenu").removeClass("menuMobileSubMenuIsOpen");
      }

      $("body").toggleClass("menuMobileIsOpen");
    });
    doc.on("click", ".menuMobile-toggleSubMenu", function () {
      $(this)
        .closest(".menuMobile-subMenu")
        .find(".menuMobileSubMenu")
        .toggleClass("menuMobileSubMenuIsOpen");
    });
  },

  openCloseSearch: function () {
    doc.on("click", ".openSearch", function () {
      var setTim = 0;
      if ($(".menu-item").hasClass("submenuIsOpen")) {
        $(".menu-item.submenuIsOpen a").trigger("click");
        setTim = 800;
      }

      setTimeout(function () {
        var search = $(".search");
        search.addClass("searchIsOpen");
        setTimeout(function () {
          // console.log("2");
          search.addClass("searchIsOpen2");

          setTimeout(function () {
            // console.log("3");
            search.addClass("searchIsOpen3");

            setTimeout(function () {
              setTimeout(function () {
                App.checkAnimationItem2("hasEffectInView", 1);
              }, 150);

              $(".search .header__hamburger").addClass("active");

              $('input[name="search"]').focus();
            });
          }, 200);
        }, 100);
      }, setTim);
    });

    doc.on("click", ".closeSearch", function () {
      $(".search").removeClass("searchIsOpen3");
      setTimeout(function () {
        $(".search").removeClass("searchIsOpen2 searchIsOpen");
      }, 400);
      $(".search .header__hamburger").removeClass("active");

      // $(".search").removeClass("searchIsOpen3");
      // setTimeout( function(){
      //     $(".search").removeClass("searchIsOpen2");

      // setTimeout( function(){
      //     $(".search").removeClass("smenuearchIsOpen");

      // setTimeout( function(){
      App.checkAnimationItem2Reverse("hasEffectInView");
      // }, 500);

      // }, 300);
      // }, 400);
    });

    var req;
    doc.on("submit", ".search form", function (e) {
      e.preventDefault();

      var qst = $(this);
      var typingTimer;
      var datas = qst.serialize();
      var search = qst.find("input[name='search']").val();
      // console.log(data);
      // var place = $(".itemExample.hidden").closest();
      var place = $(".stampItem");

      if (req && req.readyState != 4) {
        req.abort();
      }

      req = $.ajax({
        url: Helper.Router.route("search_post"),
        type: "post",
        data: datas,
        dataType: "json",
        beforeSend: function () {
          // // App.showHideLoader();
          place.html("");
          $(".lanciSearch").slideUp();
          $(".noLanciSearch").slideDown();
        },
        error: function (xhr, error, status) {
          console.log("error", xhr);
        },
        success: function (data) {
          $(".search-half-2 .search-title span").html(data.search);
          if (data.error) {
            place.append(data.error);
            $(".viewMore").closest(".row").slideUp();

            // console.log(data.search);
            // console.log(search);
            window.dataLayer.push({
              event: "ricerca-libera",
              searchResult: "senza risultato",
              searchQuery: search,
            });
          } else if (data.results) {
            for (var i = 0; i < 6; i++) {
              var item = data.results[i];
              // console.log(item);
              if (item === undefined) {
                // console.log("undef.");
                continue;
              }

              var html = jQuery(".itemExample.hidden").clone();
              html.removeClass("hidden");
              html.find(".title").html(item.title);
              html.find(".subtitle").html(item.subtitle);
              html.find("img").attr("src", item.image);
              html.attr("href", item.url);
              place.append(html);
            }

            if (data.count > 6) {
              $(".viewMore").closest(".row").slideDown();
              $(".viewMore")
                .find("span")
                .html(data.count - 6);
              var href = $(".viewMore").attr("href");
              $(".viewMore").attr(
                "href",
                href.split("?")[0] + "?search=" + search
              );
            } else {
              $(".viewMore").closest(".row").slideUp();
            }

            window.dataLayer.push({
              event: "ricerca-libera",
              searchResult: "con risultato",
              searchQuery: search,
            });
            console.log("fine ricerca");
          }
        },
        complete: function () {
          // // App.showHideLoader();
        },
      });
    });

    doc.on("keyup", ".search form input", function () {
      var text = $(this).val();
      var typingTimer;
      if (text.length >= 3) {
        clearTimeout(typingTimer);
        // typingTimer = setTimeout( function(){
        $(".search form").trigger("submit");
        // }, 3000);
      }
    });
  },

  toggleSubFilter: function () {
    doc.on("click", ".openSubFilter", function () {
      $(".subFilter").slideToggle();
    });

    doc.on("change", "form.subFilter select", function () {
      $(this).parents("form").trigger("submit");
    });
  },

  activeSlick: function () {
    $(".slick").each(function () {
      var qst = $(this);
      var id = qst.attr("id");
      // console.log(id);

      if (qst.hasClass("slick-full")) {
        $("#" + id).slick({
          dots: false,
          arrows: true,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 990,
              settings: {
                centerMode: false,
              },
            },
          ],
        });
      } else if (qst.hasClass("slick-full-widthfix")) {
        $("#" + id).slick({
          dots: false,
          arrows: true,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: false,
          adaptiveHeight: true,
          responsive: [
            // {
            //     breakpoint: 990,
            //     settings: {
            //         centerMode: false
            //     }
            // }
          ],
        });
      } else if (qst.hasClass("slick-full-mobile")) {
        if ($(window).innerWidth() < 990) {
          $("#" + id).slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            adaptiveHeight: true,
            responsive: [
              {
                breakpoint: 990,
                settings: {
                  centerMode: false,
                },
              },
            ],
          });
        }
      } else if (qst.hasClass("slick-multiple-mobile")) {
        if ($(window).innerWidth() < 990) {
          // console.log("slick multiple > " + id);
          if ($("#" + id).hasClass("filters")) {
            $("#" + id).slick({
              dots: false,
              arrows: false,
              infinite: false,
              speed: 300,
              slidesToShow: 4,
              centerMode: false,
              variableWidth: true,
              adaptiveHeight: true,
            });
          } else {
            $("#" + id).slick({
              dots: false,
              arrows: false,
              infinite: false,
              speed: 300,
              slidesToShow: 4,
              centerMode: false,
              variableWidth: true,
              adaptiveHeight: true,
              responsive: [
                {
                  breakpoint: 990,
                  settings: {
                    slidesToShow: 3.5,
                    centerMode: false,
                    variableWidth: false,
                  },
                },
              ],
            });
          }
        }
      } else if (qst.hasClass("slick-full-auto")) {
        $(window).on("load", function (e) {
          setTimeout(function () {
            if (!$("body").hasClass("mobile")) {
              $("#" + id + " img").each(function () {
                var qst = $(this);
                qst.closest(".rowWidthHeight").css({
                  width: qst.outerWidth(),
                });
              });
            }

            if ($("body").hasClass("mobile")) {
              var minH = 100000;
              $("#" + id + " img").each(function () {
                var h = $(this).outerHeight();
                if (h < minH) {
                  minH = h;
                }
              });
              if (minH != 100000) {
                $("#" + id + " img").each(function () {
                  $(this).css({
                    height: minH,
                  });
                });
              }
            }
          }, 500);

          setTimeout(function () {
            $("#" + id).slick({
              dots: false,
              arrows: true,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              centerMode: false,
              variableWidth: true,
              adaptiveHeight: false,
              responsive: [
                // {
                //     breakpoint: 1700,
                //     settings: {
                //         slidesToShow: 2
                //     }
                // },
                // {
                //     breakpoint: 1300,
                //     settings: {
                //         slidesToShow: 2
                //     }
                // },
                // {
                //     breakpoint: 767,
                //     settings: {
                //         adaptiveHeight: false,
                //     }
                // }
              ],
            });

            setTimeout(function () {
              $(window).trigger("resize");
            }, 500);

            // $("#"+id).on('init', function(event, slick, currentSlide, nextSlide){
            //     $(window).trigger('resize');
            // });
          }, 1000);
        });
      }
    });
    // }, 2000);

    $(window).resize(function () {
      App.checkWidthForSlick();
    });

    $(window).on("load", function () {
      App.checkWidthForSlick();
    });

    // $(doc).load( function(){
    //     App.checkWidthForSlick();
    // });
  },

  checkWidthForSlick: function () {
    var nl = 0;
    var off = 10;
    if ($(".nav").is(":visible")) {
      nl = $(".nav").outerWidth();
      off = 0;
    }
    var l =
      ($(window).outerWidth() -
        nl -
        $(".container:visible").first().outerWidth()) /
      2;
    l = l - off;
    $(".slick-full-auto").css({ left: l });
    $(".slick-full-auto .slick-next").css({ right: l + 20 });

    if ($("body.mobile").length > 0) {
      $(".slick-full-auto").css({ left: 0 });
      $(".slick-full-auto .slick-next").css({ right: 0 });
    }

    // setTimeout( function(){
    //     $(window).trigger('resize');
    // }, 1500);
  },

  showHideLoader: function () {
    $(".loaderPage").toggleClass("loaderPageIsVisible");
    App.animateSvg();
  },

  playVideo: function () {
    $(window).resize(function () {
      var wWindow = $(this).outerWidth();
      var hWindow = $(this).outerHeight();
      if (wWindow < hWindow) {
        hWindow = hWindow - 56;
      }
      $("video").each(function () {
        if (wWindow > hWindow) {
          var h = (wWindow * 9) / 16;
          $(this).css({
            width: wWindow,
            height: h,
          });
        } else {
          var w = (hWindow * 16) / 9;
          $(this).css({
            width: w,
            height: hWindow,
          });
        }

        $(this).closest(".section").css({
          width: wWindow,
          height: hWindow,
        });
      });
    });

    doc.on("click", ".playVideo", function (e) {
      var qst = $(this);
      var video = "";

      /******/
      // qst.closest(".contPlayVideo").fadeOut(1000);
      // setTimeout( function(){

      if (qst.hasClass("imvideo")) {
        qst.hide();

        var iframe = qst.closest(".contVideo").find("iframe");
        video = iframe.attr("src");

        if (video.indexOf("vimeo") > 0) {
          var player = new Vimeo.Player(iframe);
          player.play();
        } else {
          iframe[0].src += "&autoplay=1";
          // var src = video + '&autoplay=1';
          // qst.closest('.contVideo').find('iframe').attr('src', src);
        }

        setTimeout(function () {
          qst.closest(".contPlayVideo").hide();
        }, 500);
      } else {
        if ($("body.mobile").length == 0) {
          qst.hide();
          video = qst.closest(".contVideo").find("video").attr("id");
          $(video).get(0).play();
        }
      }

      // var vid = document.getElementById("video");
      // vid.autoplay = true;
      // vid.load();
      // $(video).get(0).play();

      // }, 1000);
      // $(window).trigger('resize');
      /******/

      // if( qst.closest(".contVideo").hasClass("contVideoFull") ){
      //
      // }else{
      //     qst.fadeOut(1000);
      // var iframe = qst.closest(".contVideo").find('iframe');
      // var url = iframe.attr('src');
      // var code = iframe.attr('data-code');
      //
      // if( url.indexOf('vimeo') > 0 ){
      //     var player = new Vimeo.Player(iframe);
      //     player.play();
      // }else{
      //     var player = new YT.Player('contPlayVideo', {
      //         height: '360',
      //         width: '640',
      //         videoId: code,
      //         autoplay: 1,
      //         controls: 0,
      //         fs: 0,
      //         enablejsapi: 1
      //     });
      // }
      // }
    });

    $(window).on("load", function (e) {
      setTimeout(function () {
        var elem = $(".row--1 .playVideo");
        if (elem.length > 0) {
          elem.each(function () {
            $(this).trigger("click");
          });
        }
      }, 1000);

      setTimeout(function () {
        $(".videoViewOnLoad").addClass("isVisible");
      }, 1000);
    });
  },

  contactForm: function () {
    // doc.on( 'submit', '.form--contacts', function(e){
    //     e.preventDefault();
    //     var qst = $(this);
    //     var datas = qst.serialize();

    //     var userType        = 'input' + qst.find('input[name="tipology"]:checked').val() + '_contact';
    //     var checkNewsletter = qst.find('input[name="newsletter"]').prop('checked') ? 'yes' : 'no';
    //     // console.log(userType);
    //     console.log(checkNewsletter);

    //     $.ajax({
    //         url: Helper.Router.route('contactSubmit'),
    //         type: "post",
    //         data: datas,
    //         dataType: 'json',
    //         error: function (xhr, error, status) {
    //             console.log('error', xhr);
    //         },
    //         beforeSend: function(){
    //             // // App.showHideLoader();
    //             qst.find('.input-group').removeClass('error');
    //         },
    //         success: function (data) {
    //             // console.log(data);

    //             if( data.error == 1 ){
    //                 $.each(data.errors, function (index, value) {
    //                     qst.find("[name='"+index+"']").parents('.input-group').addClass('error');
    //                     console.log(index + ' --- ' + value);
    //                 });
    //             }else{
    //                 qst.find('fieldset').slideUp();
    //                 qst.find('.messageSuccess').slideDown();

    //                 if( $('.product_details').length > 0 ){
    //                     window.dataLayer.push({
    //                         'event': 'invio-form-prodotti',
    //                         'userType': userType,
    //                         'checkNewsletter': checkNewsletter
    //                     });
    //                 }else{
    //                     window.dataLayer.push({
    //                         'event': 'invio-form-contatti',
    //                         'userType': userType,
    //                         'checkNewsletter': checkNewsletter
    //                     });
    //                 }

    //                 setTimeout( function (){
    //                     $('.closeContacts').trigger('click');
    //                 }, 3000);
    //             }
    //         },
    //         complete: function(){
    //             // App.showHideLoader();
    //         }
    //     });
    // });

    $("#form--contacts--country").on("change", function (e) {
      $(".form--contacts .city-container").removeClass("col-md-8");
      $(".form--contacts .city-container").addClass("col-md-4");

      country = $(this).val();
      if (country == "IT") {
        $(".form--contacts .zipcode-container").hide();
        $(".form--contacts .province-container").show();
      } else {
        $(".form--contacts .province-container").hide();
        $(".form--contacts .zipcode-container").show();
      }
    });
  },

  newsletterForm: function () {
    // doc.on( 'submit', '.form--newsletter', function(e){
    //     e.preventDefault();
    //     var qst = $(this);
    //     var data = qst.serialize();

    //     $.ajax({
    //         url: Helper.Router.route('newsletterSubmit'),
    //         type: "post",
    //         data: data,
    //         dataType: 'json',
    //         error: function (xhr, error, status) {
    //             console.log('error', xhr);
    //         },
    //         beforeSend: function(){
    //             // App.showHideLoader();
    //             qst.find('.input-group').removeClass('error');
    //             qst.find(".errorForm").slideUp();
    //         },
    //         success: function (data) {
    //             console.log(data);

    //             if( data.error == 1 ){
    //                 $.each(data.errors, function (index, value) {
    //                     qst.find("[name='"+index+"']").parents('.input-group').addClass('error');
    //                     qst.find(".errorForm").html(value).slideDown();
    //                     console.log(index + ' --- ' + value);
    //                 });
    //             }else{
    //                 var type = qst.find('input[name="tipology"]:checked').val();
    //                 userType = '';
    //                 if( type > 0 ){
    //                     userType = 'input' + qst.find('input[name="tipology"]:checked').val() + '_contact';
    //                 }

    //                 window.dataLayer.push({
    //                     'event': 'iscrizione-newsletter',
    //                     'userType': userType
    //                 });

    //                 qst.find('fieldset').slideUp();
    //                 qst.find('.messageSuccess').slideDown();
    //                 $('.newsletterSuccess').html(data.user_email);

    //                 setTimeout( function (){
    //                     $('.closeNewsletter').trigger('click');
    //                 }, 3000);
    //             }
    //         },
    //         complete: function(){
    //             // App.showHideLoader();
    //         }
    //     });
    // });

    $("#form--newsletter--country").on("change", function (e) {
      $(".form--newsletter .city-container").removeClass("col-md-8");
      $(".form--newsletter .city-container").addClass("col-md-4");

      country = $(this).val();
      if (country == "IT") {
        $(".form--newsletter .zipcode-container").hide();
        $(".form--newsletter .province-container").show();
      } else {
        $(".form--newsletter .province-container").hide();
        $(".form--newsletter .zipcode-container").show();
      }
    });
  },

  storesForm: function () {
    doc.on("submit", ".form--stores", function (e) {
      e.preventDefault();
      var qst = $(this);
      var datas = qst.serialize();

      var colStore = $(".colStores");
      var colAgenti = $(".colAgenti");
      var type = qst.find('input[name="type"]').val();

      $.ajax({
        url: Helper.Router.route("storesSubmit"),
        type: "post",
        data: datas,
        dataType: "json",
        error: function (xhr, error, status) {
          console.log("error", xhr);
        },
        beforeSend: function () {
          // // App.showHideLoader();
          $(".noColStores").addClass("hidden");
          $(".siColStores").removeClass("hidden");
          qst.find(".input-group").removeClass("error");
          qst.find(".errorForm").slideUp();

          colStore.html("");
          colAgenti.html("");
        },
        success: function (data) {
          console.log(data);

          if (type == "italy") {
            var province = qst.find('select[name="province"]').val();

            var checkResult = "senza risultato";
            if (data.success) {
              checkResult = "con risultato";
            }
            window.dataLayer.push({
              event: "invio-form-negozi-ita",
              province: province,
              searchResult: checkResult,
              checkNewsletter: "no",
            });
          } else if (type == "foreign") {
            var checkResult = "senza risultato";
            if (data.success) {
              checkResult = "con risultato";
            }

            window.dataLayer.push({
              event: "invio-form-negozi-est",
              continent: data.continent,
              country: data.state,
              searchResult: checkResult,
              checkNewsletter: "no",
            });
          }

          if (data.error == 1) {
            $.each(data.errors, function (index, value) {
              qst
                .find("[name='" + index + "']")
                .parents(".input-group")
                .addClass("error");
              qst.find(".errorForm").html(value).slideDown();
              // console.log(index + ' --- ' + value);
            });
          } else {
            // console.log('stores 1');
            // qst.find('fieldset').slideUp();
            // qst.find('.messageSuccess').slideDown();
            if (data.stores) {
              // console.log('stores 2');
              console.log(data.stores);
              $("span.state").html(data.state);

              // console.log(data.stores);
              // console.log('Stores count: ' + data.stores_count);
              for (var i = 0; i < data.stores_count; i++) {
                // console.log('stores 22');
                var item = data.stores[i];
                // console.log(item);
                if (item === undefined) {
                  continue;
                }
                // console.log('stores 3');
                var html = jQuery(".emptyStore.hidden").clone();
                html.removeClass("hidden");
                html.find(".nameStore").html(item.name);
                html.find(".subcategoryStore").html(item.subcategoryStore);
                html.find(".macrocategoryStore").html(item.macrocategoryStore);
                if (item.macrocategoryStore) {
                  html
                    .find(".macrocategoryStore")
                    .css("background-color", "black")
                    .css("color", "white")
                    .css("padding", "1em");
                }
                html.find(".address1Store").html(item.address1Store);
                html.find(".address2Store").html(item.address2Store);
                html.find(".address3Store").html(item.address3Store);
                html.find(".popupStores .state").html(item.address3Store);
                if (item.phone == "undefined" || item.phone == "") {
                  html.find(".phoneStore").addClass("hide");
                } else {
                  html
                    .find(".phoneStore")
                    .html(item.phone)
                    .attr("href", "tel:" + item.phone)
                    .attr("data-url", item.track_web_site + "&source=phone");
                }

                if (item.email == "undefined" || item.email == "") {
                  html.find(".emailStore").addClass("hide");
                } else {
                  html
                    .find(".emailStore")
                    .html(item.email)
                    .attr("href", "mailto:" + item.email)
                    .attr("data-url", item.track_web_site + "&source=email");
                }

                if (
                  item.web_site == "undefined" ||
                  item.web_site == "null" ||
                  item.web_site == "" ||
                  item.web_site == null ||
                  item.web_site == undefined
                ) {
                  html.find(".websiteStore").addClass("hide");
                } else {
                  html
                    .find(".websiteStore")
                    .html(
                      item.web_site
                        .replace(/^http:\/\//, "")
                        .replace(/^https:\/\//, "")
                    )
                    .attr("href", item.web_site)
                    .attr("data-url", item.track_web_site + "&source=website");
                }

                if (
                  item.facebook == "undefined" ||
                  item.facebook == "null" ||
                  item.facebook == "" ||
                  item.facebook == null ||
                  item.facebook == undefined
                ) {
                  html.find(".facebookStore").addClass("hide");
                } else {
                  html.find(".facebookStore").attr("href", item.facebook);
                }

                if (
                  item.instagram == "undefined" ||
                  item.instagram == "null" ||
                  item.instagram == "" ||
                  item.instagram == null ||
                  item.instagram == undefined
                ) {
                  html.find(".instagramStore").addClass("hide");
                } else {
                  html.find(".instagramStore").attr("href", item.instagram);
                }

                if (item.type == 1) {
                  // console.log('stores 4');
                  colStore.append(html);
                } else {
                  // console.log('stores 5');
                  colAgenti.append(html);
                }
              }

              if ($(".colStores").html() == "") {
                $(".noColStores").removeClass("hidden");
                $(".siColStores").addClass("hidden");
              }

              $(".popupStores").slideDown();
              $("html,body").animate({ scrollTop: 0 }, 500);
            } else if (data.success) {
              // qst.find(".errorForm").addClass('.successForm').html(data.success).slideDown();
              qst.find('input[type="text"]').val("");
            }
          }
        },
        complete: function () {
          // // App.showHideLoader();
        },
      });
    });

    doc.on("click", ".closeStores", function () {
      $(".popupStores").fadeOut();
    });

    doc.on("change", '.form--stores [name="continent"]', function (e) {
      var qst = $(this);
      var v = qst.val();
      var options = "";

      $.ajax({
        url: Helper.Router.route("changeStates"),
        type: "post",
        data: {
          _token: Config.token,
          continent: v,
        },
        dataType: "json",
        error: function (xhr, error, status) {
          console.log("error", xhr);
        },
        beforeSend: function () {
          // // App.showHideLoader();
        },
        success: function (data) {
          // console.log(data);

          $.each(data, function (index, value) {
            options +=
              '<option value="' + index + '">' + value.name_en + "</option>";
          });
          // console.log(options);
          $('.form--stores [name="state"]').html(options);
        },
        complete: function () {
          $("select").formSelect();
          // // App.showHideLoader();
        },
      });
    });
  },

  openCloseLegal: function () {
    doc.on("click", ".openLegal", function (e) {
      e.preventDefault();
      var qst = $(this);
      $(".menuFull4").show();
      $("body").addClass("isOpenMenuFull4");
      $(".menuFull4 .header__hamburger").addClass("active");
    });
    doc.on("click", ".closeLegal", function () {
      var qst = $(this);
      $(".menuFull4").fadeOut();
      $("body").removeClass("isOpenMenuFull4");
      $(".menuFull4").removeClass("openBrown");
      $(".menuFull4 .header__hamburger").removeClass("active");
    });
  },
  /////////////////////////////////////////////////////////////////

  CookiePolicy: {
    showMessage: function () {
      if (typeof Cookies != "undefined") {
        var cookieMessageCheck = Cookies.get("cookie_message");
        if (
          typeof cookieMessageCheck === "undefined" &&
          cookieMessageCheck != "1"
        ) {
          $("#footer-cookie-notice").fadeIn();
        }
      }
    },
    hideMessage: function () {
      var $window = $(window);
      var $cookieBanner = $("#footer-cookie-notice");
      $("#cookie-accept").on("click", function () {
        Cookies.set("cookie_message", "1", { expires: 365, path: "/" });
        $cookieBanner.fadeOut();
      });
      if (Cookies.get("cookie_message") == 1) {
        $cookieBanner.hide();
      }
    },
  },

  List: {
    initRelatedLists: function () {
      var $relatedCategoriesChevron = $(".related-categories-chevron");
      var $relatedCategoriesList = $(".related-categories-list");
      var $relatedBrandsChevron = $(".related-brands-chevron");
      var $relatedBrandsList = $(".related-brands-list");

      $relatedCategoriesChevron.on("click", function () {
        $relatedCategoriesList.toggle();
        if ($relatedCategoriesList.css("display") == "none") {
          $relatedCategoriesChevron.removeClass("open");
        } else {
          $relatedCategoriesChevron.addClass("open");
        }
      });
      $relatedBrandsChevron.on("click", function () {
        $relatedBrandsList.toggle();
        if ($relatedBrandsList.css("display") == "none") {
          $relatedBrandsChevron.removeClass("open");
        } else {
          $relatedBrandsChevron.addClass("open");
        }
      });
    },
  },

  Tabs: {
    initProductTab: function () {
      var $tabDescriptionTitle = $(".tab-description-title");
      var $tabDownloadableTitle = $(".tab-downloadable-title");
      var $tabDescription = $(".tab-description");
      var $tabDownloadable = $(".tab-downloadable");

      $tabDescriptionTitle.on("click", function () {
        if (
          !$tabDescriptionTitle.hasClass("open") &&
          !$tabDescription.hasClass("open")
        ) {
          $tabDownloadableTitle.removeClass("open");
          $tabDownloadable.removeClass("open");
          $tabDescriptionTitle.addClass("open");
          $tabDescription.addClass("open");
        }
      });
      $tabDownloadableTitle.on("click", function () {
        if (
          !$tabDownloadableTitle.hasClass("open") &&
          !$tabDownloadable.hasClass("open")
        ) {
          $tabDescriptionTitle.removeClass("open");
          $tabDescription.removeClass("open");
          $tabDownloadableTitle.addClass("open");
          $tabDownloadable.addClass("open");
        }
      });
    },
  },

  GoTo: {
    init: function () {
      $(".goto-activator").on("click", function (e) {
        e.preventDefault();
        var $destination = $("#" + $(this).data("destination") + "");
        $("html,body").animate(
          { scrollTop: $destination.offset().top - 110 },
          500
        );
      });
    },
  },

  PhoneMenu: {
    init: function () {
      $("body")
        .on(
          "click",
          "#partial-menu-phone, .open-side-menu-button, .open-side-menu-button *, .close-menu, .close-menu *",
          function (event) {
            if (event.target !== this) {
              return;
            }
            event.preventDefault();

            App.PhoneMenu.toggle();
          }
        )
        .on("transitionend", "#section-menu-side", function (event) {
          $("#partial-menu-phone").removeClass("menu-side-animatable");
        });
    },
    show: function () {
      var partialMenuPhone = $("#partial-menu-phone");
      partialMenuPhone.addClass("menu-side-animatable");
      $("body").addClass("overflow-hidden");
      partialMenuPhone.addClass("menu-side-visible");
      Shop.Notifications.hideAll();
    },
    hide: function () {
      var partialMenuPhone = $("#partial-menu-phone");
      partialMenuPhone.addClass("menu-side-animatable");
      $("body").removeClass("overflow-hidden");
      partialMenuPhone.removeClass("menu-side-visible");
      Shop.Notifications.showAll();
    },
    toggle: function () {
      var partialMenuPhone = $("#partial-menu-phone");
      partialMenuPhone.addClass("menu-side-animatable");
      if (partialMenuPhone.hasClass("menu-side-visible")) {
        App.PhoneMenu.hide();
      } else {
        App.PhoneMenu.show();
      }
    },
  },

  Reviews: {
    initVote: function () {
      var $selected = 0;
      $(".star").mouseenter(function () {
        var $hovered = $(this).data("vote");
        //console.log($hovered);
        $(".star").each(function () {
          var $this = $(this);
          if ($this.data("vote") <= $hovered) {
            if ($this.hasClass("selected")) {
              $this.removeClass("selected");
            }
            if (!$this.hasClass("hovered")) {
              $this.addClass("hovered");
            }
          } else {
            if ($this.hasClass("hovered")) {
              $this.removeClass("hovered");
            }
            if ($this.hasClass("selected")) {
              $this.removeClass("selected");
            }
          }
        });
      });
      $(".star").click(function () {
        $selected = $(this).data("vote");
        //console.log($selected);
        $(".star").each(function () {
          var $this = $(this);
          if ($this.data("vote") <= $selected) {
            if ($this.hasClass("hovered")) {
              $this.removeClass("hovered");
            }
            if (!$this.hasClass("selected")) {
              $this.addClass("selected");
            }
          } else {
            if ($this.hasClass("selected")) {
              $this.removeClass("selected");
            }
          }
        });
      });
      $(".reviews-vote").mouseleave(function () {
        if ($selected != 0) {
          $(".star").each(function () {
            var $this = $(this);
            if ($this.data("vote") <= $selected) {
              if ($this.hasClass("hovered")) {
                $this.removeClass("hovered");
              }
              if (!$this.hasClass("selected")) {
                $this.addClass("selected");
              }
            } else {
              if ($this.hasClass("selected")) {
                $this.removeClass("selected");
              }
              if ($this.hasClass("hovered")) {
                $this.removeClass("hovered");
              }
            }
          });
        }
      });
    },
    initSave: function () {
      var $reviewBlock = $(".review-block");
      var reviewVote = "";
      //var reviewTitle = '';
      var reviewText = "";
      var token = "";
      var $errors = [];
      var product = $(".article-product").data("sku");
      $("#send-review").on("submit", function () {
        reviewVote = $("input:radio[name ='review-vote']:checked").val();
        reviewText = $("#text-field").val();
        token = $("#review-token").val();
        $.ajax({
          headers: {
            "X-CSRF-TOKEN": token,
          },
          url: Helper.Router.route("product_save_reviews"),
          type: "post",
          data: {
            vote: reviewVote,
            text: reviewText,
            product: product,
          },
          dataType: "json",
          success: function (data) {
            $.each(data, function (index, value) {
              if (value == "success") {
                $reviewBlock.empty();
                $reviewBlock.append(
                  '<div><h5 class="heading-3 color-orange">Grazie per la tua reccensione.</h5></div>'
                );
              } else {
              }
            });
          },
          error: function (xhr, error, status) {
            console.log("error", xhr);
          },
        });
      });
    },
  },

  Carousel: {
    init: function () {
      var $carousel = $(".slick-slider-container");
      $carousel.slick({
        arrow: false,
        prevArrow: "",
        nextArrow: "",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: true,
        centerPadding: 0,
      });
    },
  },
};
