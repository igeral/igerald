Helper = {
    init:function(){
        Helper.ClassChanger();
    },
    isIOS: function () {
        return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    },
    getCurrentGridOption: function () {
        return $('.device-check:visible').attr('data-device')
    },
    Message: {
        show: function (message) {
            message = (typeof message != 'undefined') ? message : '';
            if (message != '') {
                $('#message').find('.message-text').html(message);
            }

            $('#message').css('top', 200 + $(document).scrollTop());

            $('#message').fadeIn();
            $('.message-overlay').removeClass('hidden');

            setTimeout(function () {
                $('#message').fadeOut();
                $('.message-overlay').addClass('hidden');
            }, 7000);
        },

        dismiss: function () {
            $('#message').hide();
            $('.message-overlay').addClass('hidden');
        }
    },

    Date: {
        settings: {
            format: 'YYYY-MM-DD',
            pickTime: false,
            useStrict: true,
            direction: 'bottom',
        },
        init: function (selector) {
            $(selector).datetimepicker(App.Helper.Date.settings);
        },
        dateOfBirth: function () {
            $("#date_of_birth").datetimepicker({
                changeMonth: true,
                changeYear: true,
            });

        }
    },


    slug: function (Text) {
        return Text
            .toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');
    },

    random: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    anchor: function (id, animate) {
        if (!window.location.hash) {
            animate = (typeof animate != 'undefined') ? animate : false;
            if (animate) {
                $('html,body').stop();
                $('html,body').animate({scrollTop: $('#' + id).offset().top + 2}, 'slow');
            } else {
                var offTop = $('#' + id).offset().top + 2;
                $('html,body').scrollTop(offTop);
            }
        }
    },

    scrollTo: function (id) {
        if (jQuery(id).is(':visible')) {
            jQuery('html,body').animate({scrollTop: jQuery(id).offset().top}, 'slow');
        }
    },

    previousPage: function (defaultUrl) {
        if (history.length > 1) {
            history.back();
        } else {
            defaultUrl = (typeof defaultUrl != 'undefined') ? defaultUrl : urlBase;
            window.location.href = defaultUrl;
        }
    },

    numberInputButtons: function () {
        $('.decrement').on("click", function () {

            var $button = $(this);
            var oldValue = $button.parent().find("#items_qty").val();

            // Don't allow decrementing below one
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
            $button.parent().find("#items_qty").val(newVal);
        });
        $('.increment').on("click", function () {
            var $button = $(this);
            var oldValue = $button.parent().find("#items_qty").val();

            if ($button.text() == "+") {
                var newVal = parseFloat(oldValue) + 1;
            }
            $button.parent().find("#items_qty").val(newVal);
        });
    }, todo: function () {
        alert('This is pending. Please complete this feature. May the force be with you!');
        return false;
    },
    Preferences: {
        get: function (key, callback) {
            $.ajax({
                url: Helper.Router.route('preferences_get', ({key: key})),
                success: callback
            });
        },
        set: function (key, value, callback) {
            $.ajax({
                url: Helper.Router.route('preferences_set', ({key: key, value: value})),
                success: callback
            });
        }
    },
    Router: {
        route: function (route, options) {
            if(typeof options != 'undefined'){
                var optionsCopy = JSON.parse(JSON.stringify(options));
            }
            return '/' + Config.locale + Router.route(route, optionsCopy);
        }
    },
    ClassChanger:function(){
        $('body').on('click',"[data-toggle-class]",function(){
            $($(this).data('target')).toggleClass($(this).data('toggle-class'))
        });

    }

};

$(Helper.init);