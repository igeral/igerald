Track = {
    init: function () {
        console.info('*** Track start ***');
    },

    productViewDetails: function(obj){
        console.log('*** Event: viewProductDetails ***');
        if (typeof dataLayer !== 'undefined' && typeof obj !== 'undefined') {
            dataLayer.push({
                'ecommerce': {
                    'detail': {
                        'actionField': {
                            'list': obj.list
                        },
                        'products': [{
                            'name': obj.name,
                            'id': obj.id,
                            'price': obj.price,
                            'brand': obj.brand,
                            'category': obj.category,
                            'variant': ''
                        }]
                    }
                }
            });
        }
    },

    productAddToCart: function(obj){
        console.log('*** Event: addToCart ***');
        if (typeof dataLayer !== 'undefined' && typeof obj !== 'undefined') {
            dataLayer.push({
                'event': 'addToCart',
                'ecommerce': {
                    'currencyCode': obj.currencyCode,
                    'add': {
                        'products': [{
                            'name': obj.name,
                            'id': obj.id,
                            'price': obj.price,
                            'brand': obj.brand,
                            'category': obj.category,
                            'variant': '',
                            'quantity': obj.quantity
                        }]
                    }
                }
            });
        }
    },

    productRemoveFromCart: function(obj){
        console.log('*** Event: removeFromCart ***');
        if (typeof dataLayer !== 'undefined' && typeof obj !== 'undefined') {
            dataLayer.push({
                'event': 'removeFromCart',
                'ecommerce': {
                    'remove': {
                        'products': [{
                            'name': obj.name,
                            'id': obj.id,
                            'price': obj.price,
                            'brand': obj.brand,
                            'category': obj.category,
                            'variant': '',
                            'quantity': obj.quantity
                        }]
                    }
                }
            });
        }
    },

    checkoutSteps: function(step, checkoutOption, obj){
        console.log('*** Event: checkoutSteps > ' + step + ' ' + checkoutOption + ' ***');
        if (typeof dataLayer !== 'undefined' && typeof step !== 'undefined' && typeof checkoutOption !== 'undefined' && typeof obj !== 'undefined') {
            dataLayer.push({
                'event': 'checkout',
                'ecommerce': {
                    'checkout': {
                        'actionField': {
                            'step': step,
                            'option': checkoutOption
                        },
                        'products': obj
                    }
                },
                'eventCallback': function() {
                    //document.location = 'checkout.html';
                }
            });
        }
    },

    purchases: function(order, cart){
        console.log('*** Event: purchasesEvent ***');
        if (typeof dataLayer !== 'undefined' && typeof order !== 'undefined' && typeof cart !== 'undefined') {
            dataLayer.push({
                'event': 'purchasesEvent'
            });

            dataLayer.push({
                'ecommerce': {
                    'purchase': {
                        'actionField': {
                            'id': order.id,
                            'affiliation': order.affiliation,
                            'revenue': order.revenue,
                            'tax': order.tax,
                            'shipping': order.shipping,
                            'coupon': order.coupon
                        },
                        'products': cart
                    }
                }
            });
        }
    },

    search: function(){
        console.log('*** Event: searchWebSite ***');
        if (typeof dataLayer !== 'undefined') {
            dataLayer.push({
                'event': 'searchWebSite'
            });
        }
    },

    subscribeNewsletter: function(){
        console.log('*** Event: subscribeNewsletter ***');
        if (typeof dataLayer !== 'undefined') {
            dataLayer.push({
                'event': 'subscribeNewsletter'
            });
        }
    }

};