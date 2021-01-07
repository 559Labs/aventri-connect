

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '<ul><li data-name="namespace:FFNLabs" class="opened"><div style="padding-left:0px" class="hd"><span class="icon icon-play"></span><a href="FFNLabs.html">FFNLabs</a></div><div class="bd"><ul><li data-name="namespace:FFNLabs_AventriConnect" ><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="FFNLabs/AventriConnect.html">AventriConnect</a></div><div class="bd"><ul><li data-name="namespace:FFNLabs_AventriConnect_Concerns" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="FFNLabs/AventriConnect/Concerns.html">Concerns</a></div><div class="bd"><ul><li data-name="class:FFNLabs_AventriConnect_Concerns_BaseService" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Concerns/BaseService.html">BaseService</a></div></li><li data-name="class:FFNLabs_AventriConnect_Concerns_GlobalService" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Concerns/GlobalService.html">GlobalService</a></div></li><li data-name="class:FFNLabs_AventriConnect_Concerns_HasSystemMethodConcern" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Concerns/HasSystemMethodConcern.html">HasSystemMethodConcern</a></div></li></ul></div></li><li data-name="namespace:FFNLabs_AventriConnect_Exceptions" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="FFNLabs/AventriConnect/Exceptions.html">Exceptions</a></div><div class="bd"><ul><li data-name="class:FFNLabs_AventriConnect_Exceptions_AuthenticationException" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Exceptions/AuthenticationException.html">AuthenticationException</a></div></li><li data-name="class:FFNLabs_AventriConnect_Exceptions_BadRequestException" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Exceptions/BadRequestException.html">BadRequestException</a></div></li><li data-name="class:FFNLabs_AventriConnect_Exceptions_NotImplementedException" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Exceptions/NotImplementedException.html">NotImplementedException</a></div></li></ul></div></li><li data-name="namespace:FFNLabs_AventriConnect_Tests" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="FFNLabs/AventriConnect/Tests.html">Tests</a></div><div class="bd"><ul><li data-name="class:FFNLabs_AventriConnect_Tests_ExampleTest" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Tests/ExampleTest.html">ExampleTest</a></div></li></ul></div></li><li data-name="class:FFNLabs_AventriConnect_AventriClient" ><div style="padding-left:44px" class="hd leaf"><a href="FFNLabs/AventriConnect/AventriClient.html">AventriClient</a></div></li><li data-name="class:FFNLabs_AventriConnect_Enums" ><div style="padding-left:44px" class="hd leaf"><a href="FFNLabs/AventriConnect/Enums.html">Enums</a></div></li></ul></div></li></ul></div></li></ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                        {"type":"Namespace","link":"FFNLabs.html","name":"FFNLabs","doc":"Namespace FFNLabs"},{"type":"Namespace","link":"FFNLabs/AventriConnect.html","name":"FFNLabs\\AventriConnect","doc":"Namespace FFNLabs\\AventriConnect"},{"type":"Namespace","link":"FFNLabs/AventriConnect/Concerns.html","name":"FFNLabs\\AventriConnect\\Concerns","doc":"Namespace FFNLabs\\AventriConnect\\Concerns"},{"type":"Namespace","link":"FFNLabs/AventriConnect/Exceptions.html","name":"FFNLabs\\AventriConnect\\Exceptions","doc":"Namespace FFNLabs\\AventriConnect\\Exceptions"},{"type":"Namespace","link":"FFNLabs/AventriConnect/Tests.html","name":"FFNLabs\\AventriConnect\\Tests","doc":"Namespace FFNLabs\\AventriConnect\\Tests"},                                                        {"type":"Class","fromName":"FFNLabs\\AventriConnect","fromLink":"FFNLabs/AventriConnect.html","link":"FFNLabs/AventriConnect/AventriClient.html","name":"FFNLabs\\AventriConnect\\AventriClient","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\AventriClient","fromLink":"FFNLabs/AventriConnect/AventriClient.html","link":"FFNLabs/AventriConnect/AventriClient.html#method___construct","name":"FFNLabs\\AventriConnect\\AventriClient::__construct","doc":"Constructor"},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\AventriClient","fromLink":"FFNLabs/AventriConnect/AventriClient.html","link":"FFNLabs/AventriConnect/AventriClient.html#method_getConfig","name":"FFNLabs\\AventriConnect\\AventriClient::getConfig","doc":"Generate a \\GuzzleHttp\\Client-compliant config object based on the settings within this class."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\AventriClient","fromLink":"FFNLabs/AventriConnect/AventriClient.html","link":"FFNLabs/AventriConnect/AventriClient.html#method_getUri","name":"FFNLabs\\AventriConnect\\AventriClient::getUri","doc":"Generate an appropriate endpoint URI based on the client's configuration"},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\AventriClient","fromLink":"FFNLabs/AventriConnect/AventriClient.html","link":"FFNLabs/AventriConnect/AventriClient.html#method_accessTokenIsValid","name":"FFNLabs\\AventriConnect\\AventriClient::accessTokenIsValid","doc":"Is the current access token valid (according to the specfied timeout)?"},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\AventriClient","fromLink":"FFNLabs/AventriConnect/AventriClient.html","link":"FFNLabs/AventriConnect/AventriClient.html#method_getClient","name":"FFNLabs\\AventriConnect\\AventriClient::getClient","doc":"More for dev and debugging, but this returns the client object from GuzzleHttp\\Client."},
            
                                                {"type":"Trait","fromName":"FFNLabs\\AventriConnect\\Concerns","fromLink":"FFNLabs/AventriConnect/Concerns.html","link":"FFNLabs/AventriConnect/Concerns/BaseService.html","name":"FFNLabs\\AventriConnect\\Concerns\\BaseService","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\BaseService","fromLink":"FFNLabs/AventriConnect/Concerns/BaseService.html","link":"FFNLabs/AventriConnect/Concerns/BaseService.html#method_request","name":"FFNLabs\\AventriConnect\\Concerns\\BaseService::request","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\BaseService","fromLink":"FFNLabs/AventriConnect/Concerns/BaseService.html","link":"FFNLabs/AventriConnect/Concerns/BaseService.html#method_get","name":"FFNLabs\\AventriConnect\\Concerns\\BaseService::get","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\BaseService","fromLink":"FFNLabs/AventriConnect/Concerns/BaseService.html","link":"FFNLabs/AventriConnect/Concerns/BaseService.html#method_post","name":"FFNLabs\\AventriConnect\\Concerns\\BaseService::post","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\BaseService","fromLink":"FFNLabs/AventriConnect/Concerns/BaseService.html","link":"FFNLabs/AventriConnect/Concerns/BaseService.html#method_patch","name":"FFNLabs\\AventriConnect\\Concerns\\BaseService::patch","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\BaseService","fromLink":"FFNLabs/AventriConnect/Concerns/BaseService.html","link":"FFNLabs/AventriConnect/Concerns/BaseService.html#method_put","name":"FFNLabs\\AventriConnect\\Concerns\\BaseService::put","doc":null},
            
                                                {"type":"Trait","fromName":"FFNLabs\\AventriConnect\\Concerns","fromLink":"FFNLabs/AventriConnect/Concerns.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_listContacts","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::listContacts","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_getContact","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::getContact","doc":"Use this function to get detailed set of information of any contact you currently have in your account."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_addContact","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::addContact","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_deleteContact","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::deleteContact","doc":"Use this function to delete a contact in your account."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_updateContact","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::updateContact","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_getContactQuestion","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::getContactQuestion","doc":"This function will return detailed information for a given contact question."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_listContactQuestions","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::listContactQuestions","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_listSpeakers","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::listSpeakers","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_getSpeaker","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::getSpeaker","doc":"This function will return detailed information for a given account level speaker."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_createSpeaker","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::createSpeaker","doc":"Use this function to create an account level speaker."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_updateSpeaker","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::updateSpeaker","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_listEvents","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::listEvents","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_searchEvents","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::searchEvents","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_cloneEvent","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::cloneEvent","doc":"The clone event function allows you to take an existing event within the Aventri system and create a copy of it."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_listFolders","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::listFolders","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_listLanguages","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::listLanguages","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_listSessions","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::listSessions","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_listTaxRegimes","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::listTaxRegimes","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_listTracks","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::listTracks","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_listTransactionTypes","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::listTransactionTypes","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\GlobalService","fromLink":"FFNLabs/AventriConnect/Concerns/GlobalService.html","link":"FFNLabs/AventriConnect/Concerns/GlobalService.html#method_listCurrencies","name":"FFNLabs\\AventriConnect\\Concerns\\GlobalService::listCurrencies","doc":"Use this function to return a list of all supported currencies and the corresponding ISO 4217 a 3 character code."},
            
                                                {"type":"Trait","fromName":"FFNLabs\\AventriConnect\\Concerns","fromLink":"FFNLabs/AventriConnect/Concerns.html","link":"FFNLabs/AventriConnect/Concerns/HasSystemMethodConcern.html","name":"FFNLabs\\AventriConnect\\Concerns\\HasSystemMethodConcern","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasSystemMethodConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasSystemMethodConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasSystemMethodConcern.html#method_authorize","name":"FFNLabs\\AventriConnect\\Concerns\\HasSystemMethodConcern::authorize","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasSystemMethodConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasSystemMethodConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasSystemMethodConcern.html#method_listAvailableFunctions","name":"FFNLabs\\AventriConnect\\Concerns\\HasSystemMethodConcern::listAvailableFunctions","doc":"Returns a list of available functions within the Aventri API. Details include which module\nthe function belongs to and what HTTP method is required to call it."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasSystemMethodConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasSystemMethodConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasSystemMethodConcern.html#method_resetSession","name":"FFNLabs\\AventriConnect\\Concerns\\HasSystemMethodConcern::resetSession","doc":null},
            
                                                {"type":"Class","fromName":"FFNLabs\\AventriConnect","fromLink":"FFNLabs/AventriConnect.html","link":"FFNLabs/AventriConnect/Enums.html","name":"FFNLabs\\AventriConnect\\Enums","doc":null},
                
                                                {"type":"Class","fromName":"FFNLabs\\AventriConnect\\Exceptions","fromLink":"FFNLabs/AventriConnect/Exceptions.html","link":"FFNLabs/AventriConnect/Exceptions/AuthenticationException.html","name":"FFNLabs\\AventriConnect\\Exceptions\\AuthenticationException","doc":null},
                
                                                {"type":"Class","fromName":"FFNLabs\\AventriConnect\\Exceptions","fromLink":"FFNLabs/AventriConnect/Exceptions.html","link":"FFNLabs/AventriConnect/Exceptions/BadRequestException.html","name":"FFNLabs\\AventriConnect\\Exceptions\\BadRequestException","doc":null},
                
                                                {"type":"Class","fromName":"FFNLabs\\AventriConnect\\Exceptions","fromLink":"FFNLabs/AventriConnect/Exceptions.html","link":"FFNLabs/AventriConnect/Exceptions/NotImplementedException.html","name":"FFNLabs\\AventriConnect\\Exceptions\\NotImplementedException","doc":null},
                
                                                {"type":"Class","fromName":"FFNLabs\\AventriConnect\\Tests","fromLink":"FFNLabs/AventriConnect/Tests.html","link":"FFNLabs/AventriConnect/Tests/ExampleTest.html","name":"FFNLabs\\AventriConnect\\Tests\\ExampleTest","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Tests\\ExampleTest","fromLink":"FFNLabs/AventriConnect/Tests/ExampleTest.html","link":"FFNLabs/AventriConnect/Tests/ExampleTest.html#method_true_is_true","name":"FFNLabs\\AventriConnect\\Tests\\ExampleTest::true_is_true","doc":""},
            
                                // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Doctum = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Doctum.injectApiTree($('#api-tree'));
    });

    return root.Doctum;
})(window);

$(function() {

    
    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').on('click', function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Doctum.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


