

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '<ul><li data-name="namespace:FFNLabs" class="opened"><div style="padding-left:0px" class="hd"><span class="icon icon-play"></span><a href="FFNLabs.html">FFNLabs</a></div><div class="bd"><ul><li data-name="namespace:FFNLabs_AventriConnect" ><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="FFNLabs/AventriConnect.html">AventriConnect</a></div><div class="bd"><ul><li data-name="namespace:FFNLabs_AventriConnect_Concerns" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="FFNLabs/AventriConnect/Concerns.html">Concerns</a></div><div class="bd"><ul><li data-name="class:FFNLabs_AventriConnect_Concerns_BaseService" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Concerns/BaseService.html">BaseService</a></div></li><li data-name="class:FFNLabs_AventriConnect_Concerns_EnumConcern" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Concerns/EnumConcern.html">EnumConcern</a></div></li><li data-name="class:FFNLabs_AventriConnect_Concerns_HasSystemMethodConcern" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Concerns/HasSystemMethodConcern.html">HasSystemMethodConcern</a></div></li><li data-name="class:FFNLabs_AventriConnect_Concerns_HotelConcern" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Concerns/HotelConcern.html">HotelConcern</a></div></li><li data-name="class:FFNLabs_AventriConnect_Concerns_MarketingConcern" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Concerns/MarketingConcern.html">MarketingConcern</a></div></li><li data-name="class:FFNLabs_AventriConnect_Concerns_PersonConcern" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Concerns/PersonConcern.html">PersonConcern</a></div></li><li data-name="class:FFNLabs_AventriConnect_Concerns_ProgramConcern" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Concerns/ProgramConcern.html">ProgramConcern</a></div></li><li data-name="class:FFNLabs_AventriConnect_Concerns_RegConcern" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Concerns/RegConcern.html">RegConcern</a></div></li><li data-name="class:FFNLabs_AventriConnect_Concerns_SeatingConcern" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Concerns/SeatingConcern.html">SeatingConcern</a></div></li><li data-name="class:FFNLabs_AventriConnect_Concerns_SelectConcern" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Concerns/SelectConcern.html">SelectConcern</a></div></li><li data-name="class:FFNLabs_AventriConnect_Concerns_SocialConcern" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Concerns/SocialConcern.html">SocialConcern</a></div></li><li data-name="class:FFNLabs_AventriConnect_Concerns_SurveyConcern" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Concerns/SurveyConcern.html">SurveyConcern</a></div></li><li data-name="class:FFNLabs_AventriConnect_Concerns_SystemConcern" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Concerns/SystemConcern.html">SystemConcern</a></div></li></ul></div></li><li data-name="namespace:FFNLabs_AventriConnect_Exceptions" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="FFNLabs/AventriConnect/Exceptions.html">Exceptions</a></div><div class="bd"><ul><li data-name="class:FFNLabs_AventriConnect_Exceptions_AuthenticationException" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Exceptions/AuthenticationException.html">AuthenticationException</a></div></li><li data-name="class:FFNLabs_AventriConnect_Exceptions_BadRequestException" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Exceptions/BadRequestException.html">BadRequestException</a></div></li><li data-name="class:FFNLabs_AventriConnect_Exceptions_NotImplementedException" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Exceptions/NotImplementedException.html">NotImplementedException</a></div></li></ul></div></li><li data-name="namespace:FFNLabs_AventriConnect_Tests" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="FFNLabs/AventriConnect/Tests.html">Tests</a></div><div class="bd"><ul><li data-name="class:FFNLabs_AventriConnect_Tests_ExampleTest" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Tests/ExampleTest.html">ExampleTest</a></div></li></ul></div></li><li data-name="class:FFNLabs_AventriConnect_AventriClient" ><div style="padding-left:44px" class="hd leaf"><a href="FFNLabs/AventriConnect/AventriClient.html">AventriClient</a></div></li><li data-name="class:FFNLabs_AventriConnect_Enums" ><div style="padding-left:44px" class="hd leaf"><a href="FFNLabs/AventriConnect/Enums.html">Enums</a></div></li></ul></div></li></ul></div></li></ul>';

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
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\AventriClient","fromLink":"FFNLabs/AventriConnect/AventriClient.html","link":"FFNLabs/AventriConnect/AventriClient.html#method_getQueryParams","name":"FFNLabs\\AventriConnect\\AventriClient::getQueryParams","doc":null},
            
                                                {"type":"Trait","fromName":"FFNLabs\\AventriConnect\\Concerns","fromLink":"FFNLabs/AventriConnect/Concerns.html","link":"FFNLabs/AventriConnect/Concerns/BaseService.html","name":"FFNLabs\\AventriConnect\\Concerns\\BaseService","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\BaseService","fromLink":"FFNLabs/AventriConnect/Concerns/BaseService.html","link":"FFNLabs/AventriConnect/Concerns/BaseService.html#method_request","name":"FFNLabs\\AventriConnect\\Concerns\\BaseService::request","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\BaseService","fromLink":"FFNLabs/AventriConnect/Concerns/BaseService.html","link":"FFNLabs/AventriConnect/Concerns/BaseService.html#method_get","name":"FFNLabs\\AventriConnect\\Concerns\\BaseService::get","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\BaseService","fromLink":"FFNLabs/AventriConnect/Concerns/BaseService.html","link":"FFNLabs/AventriConnect/Concerns/BaseService.html#method_post","name":"FFNLabs\\AventriConnect\\Concerns\\BaseService::post","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\BaseService","fromLink":"FFNLabs/AventriConnect/Concerns/BaseService.html","link":"FFNLabs/AventriConnect/Concerns/BaseService.html#method_patch","name":"FFNLabs\\AventriConnect\\Concerns\\BaseService::patch","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\BaseService","fromLink":"FFNLabs/AventriConnect/Concerns/BaseService.html","link":"FFNLabs/AventriConnect/Concerns/BaseService.html#method_put","name":"FFNLabs\\AventriConnect\\Concerns\\BaseService::put","doc":null},
            
                                                {"type":"Trait","fromName":"FFNLabs\\AventriConnect\\Concerns","fromLink":"FFNLabs/AventriConnect/Concerns.html","link":"FFNLabs/AventriConnect/Concerns/EnumConcern.html","name":"FFNLabs\\AventriConnect\\Concerns\\EnumConcern","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\EnumConcern","fromLink":"FFNLabs/AventriConnect/Concerns/EnumConcern.html","link":"FFNLabs/AventriConnect/Concerns/EnumConcern.html#method_listCategories","name":"FFNLabs\\AventriConnect\\Concerns\\EnumConcern::listCategories","doc":"In Aventri you can create a number of different categories for attendees to register with. This function allows you to list the available categories for a given event."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\EnumConcern","fromLink":"FFNLabs/AventriConnect/Concerns/EnumConcern.html","link":"FFNLabs/AventriConnect/Concerns/EnumConcern.html#method_getCategory","name":"FFNLabs\\AventriConnect\\Concerns\\EnumConcern::getCategory","doc":"Use the get category function to retrieve information about a specific event registrant category."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\EnumConcern","fromLink":"FFNLabs/AventriConnect/Concerns/EnumConcern.html","link":"FFNLabs/AventriConnect/Concerns/EnumConcern.html#method_listCurrencies","name":"FFNLabs\\AventriConnect\\Concerns\\EnumConcern::listCurrencies","doc":"Use this function to return a list of all supported currencies and the corresponding ISO 4217 a 3 character code."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\EnumConcern","fromLink":"FFNLabs/AventriConnect/Concerns/EnumConcern.html","link":"FFNLabs/AventriConnect/Concerns/EnumConcern.html#method_listFolders","name":"FFNLabs\\AventriConnect\\Concerns\\EnumConcern::listFolders","doc":"The Aventri system allows you to create folders to sort a number of different objects, this function will list out the available folders within your account."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\EnumConcern","fromLink":"FFNLabs/AventriConnect/Concerns/EnumConcern.html","link":"FFNLabs/AventriConnect/Concerns/EnumConcern.html#method_listLanguages","name":"FFNLabs\\AventriConnect\\Concerns\\EnumConcern::listLanguages","doc":"This function will return all languages supported by Aventri. Use the abbreviation for other API calls."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\EnumConcern","fromLink":"FFNLabs/AventriConnect/Concerns/EnumConcern.html","link":"FFNLabs/AventriConnect/Concerns/EnumConcern.html#method_listTaxRegimes","name":"FFNLabs\\AventriConnect\\Concerns\\EnumConcern::listTaxRegimes","doc":"This function will return a list of the tax regimes types in the system."},
            
                                                {"type":"Trait","fromName":"FFNLabs\\AventriConnect\\Concerns","fromLink":"FFNLabs/AventriConnect/Concerns.html","link":"FFNLabs/AventriConnect/Concerns/HotelConcern.html","name":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HotelConcern.html","link":"FFNLabs/AventriConnect/Concerns/HotelConcern.html#method_listHotels","name":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern::listHotels","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HotelConcern.html","link":"FFNLabs/AventriConnect/Concerns/HotelConcern.html#method_getHotel","name":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern::getHotel","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HotelConcern.html","link":"FFNLabs/AventriConnect/Concerns/HotelConcern.html#method_createHotel","name":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern::createHotel","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HotelConcern.html","link":"FFNLabs/AventriConnect/Concerns/HotelConcern.html#method_updateHotel","name":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern::updateHotel","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HotelConcern.html","link":"FFNLabs/AventriConnect/Concerns/HotelConcern.html#method_updateHotelResponses","name":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern::updateHotelResponses","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HotelConcern.html","link":"FFNLabs/AventriConnect/Concerns/HotelConcern.html#method_createRoomBlock","name":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern::createRoomBlock","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HotelConcern.html","link":"FFNLabs/AventriConnect/Concerns/HotelConcern.html#method_deleteRoomBlock","name":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern::deleteRoomBlock","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HotelConcern.html","link":"FFNLabs/AventriConnect/Concerns/HotelConcern.html#method_updateRoomBlock","name":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern::updateRoomBlock","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HotelConcern.html","link":"FFNLabs/AventriConnect/Concerns/HotelConcern.html#method_getRoomTypes","name":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern::getRoomTypes","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HotelConcern.html","link":"FFNLabs/AventriConnect/Concerns/HotelConcern.html#method_createRoomType","name":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern::createRoomType","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HotelConcern.html","link":"FFNLabs/AventriConnect/Concerns/HotelConcern.html#method_deleteRoomType","name":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern::deleteRoomType","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HotelConcern.html","link":"FFNLabs/AventriConnect/Concerns/HotelConcern.html#method_updateRoomType","name":"FFNLabs\\AventriConnect\\Concerns\\HotelConcern::updateRoomType","doc":null},
            
                                                {"type":"Trait","fromName":"FFNLabs\\AventriConnect\\Concerns","fromLink":"FFNLabs/AventriConnect/Concerns.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html#method_listMarketingMails","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern::listMarketingMails","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html#method_getMarketingMail","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern::getMarketingMail","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html#method_updateMarketingMail","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern::updateMarketingMail","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html#method_cloneMarketingMail","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern::cloneMarketingMail","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html#method_listMailinglists","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern::listMailinglists","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html#method_getMailinglist","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern::getMailinglist","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html#method_createMailinglist","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern::createMailinglist","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html#method_updateMailinglist","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern::updateMailinglist","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html#method_listSubscribers","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern::listSubscribers","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html#method_getSubscriber","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern::getSubscriber","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html#method_createSubscriber","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern::createSubscriber","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html#method_updateSubscriber","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern::updateSubscriber","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html#method_cancelMarketingBlast","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern::cancelMarketingBlast","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html#method_scheduleMarketingBlast","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern::scheduleMarketingBlast","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html#method_listBlastResults","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern::listBlastResults","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html#method_listBouncebackRecipients","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern::listBouncebackRecipients","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html","link":"FFNLabs/AventriConnect/Concerns/MarketingConcern.html#method_listUnsubscribedRecipients","name":"FFNLabs\\AventriConnect\\Concerns\\MarketingConcern::listUnsubscribedRecipients","doc":null},
            
                                                {"type":"Trait","fromName":"FFNLabs\\AventriConnect\\Concerns","fromLink":"FFNLabs/AventriConnect/Concerns.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_listAttendees","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::listAttendees","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_getAttendee","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::getAttendee","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_createAttendee","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::createAttendee","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_searchAttendees","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::searchAttendees","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_checkInAttendee","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::checkInAttendee","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_listSpeakers","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::listSpeakers","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_getSpeaker","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::getSpeaker","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_createSpeaker","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::createSpeaker","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_updateSpeaker","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::updateSpeaker","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_updateAttendeeInfoResponses","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::updateAttendeeInfoResponses","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_updateAttendeeStatus","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::updateAttendeeStatus","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_listContacts","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::listContacts","doc":"Use this function to get a list of any contacts you currently have in your account."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_getContact","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::getContact","doc":"Use this function to get detailed set of information of any contact you currently have in your account."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_addContact","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::addContact","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_deleteContact","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::deleteContact","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_updateContact","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::updateContact","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_createAttendeeBridge","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::createAttendeeBridge","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_listContactQuestions","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::listContactQuestions","doc":"This function will return a basic list of the available contact questions."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern","fromLink":"FFNLabs/AventriConnect/Concerns/PersonConcern.html","link":"FFNLabs/AventriConnect/Concerns/PersonConcern.html#method_getContactQuestion","name":"FFNLabs\\AventriConnect\\Concerns\\PersonConcern::getContactQuestion","doc":null},
            
                                                {"type":"Trait","fromName":"FFNLabs\\AventriConnect\\Concerns","fromLink":"FFNLabs/AventriConnect/Concerns.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_listEvents","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::listEvents","doc":"At the very core of Aventri is the ability to create events. Use this function to get a list of any events\nyou currently have in your account. The information from this function is very basic. To get a more detailed\nset of information you can use this function in conjunction with the getEvent function."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_getEvent","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::getEvent","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_createEvent","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::createEvent","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_updateEvent","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::updateEvent","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_searchEvents","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::searchEvents","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_cloneEvent","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::cloneEvent","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_updateAgendaResponses","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::updateAgendaResponses","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_listLocations","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::listLocations","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_createLocation","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::createLocation","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_updateLocation","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::updateLocation","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_listSessions","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::listSessions","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_getSession","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::getSession","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_createSession","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::createSession","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_updateSession","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::updateSession","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_getSessionCheckin","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::getSessionCheckin","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_setSessionCheckin","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::setSessionCheckin","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_getEventCheckins","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::getEventCheckins","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern","fromLink":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html","link":"FFNLabs/AventriConnect/Concerns/ProgramConcern.html#method_listLocationSessions","name":"FFNLabs\\AventriConnect\\Concerns\\ProgramConcern::listLocationSessions","doc":null},
            
                                                {"type":"Trait","fromName":"FFNLabs\\AventriConnect\\Concerns","fromLink":"FFNLabs/AventriConnect/Concerns.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_updateOptionsResponses","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::updateOptionsResponses","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_listPreapproved","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::listPreapproved","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_addPreapproved","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::addPreapproved","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_deletePreapproved","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::deletePreapproved","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_updatePreapproved","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::updatePreapproved","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_listPreLoads","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::listPreLoads","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_getPreLoad","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::getPreLoad","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_addPreload","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::addPreload","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_deletePreLoad","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::deletePreLoad","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_updatePreLoad","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::updatePreLoad","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_updateTravelResponses","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::updateTravelResponses","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_updateWelcomeResponses","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::updateWelcomeResponses","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_searchPrepproved","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::searchPrepproved","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_listInvoices","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::listInvoices","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_getInvoice","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::getInvoice","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_listOptions","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::listOptions","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_getOption","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::getOption","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_listQuestions","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::listQuestions","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_getQuestion","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::getQuestion","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_listTransactions","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::listTransactions","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_getTransaction","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::getTransaction","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_getVirtualSessionCheckin","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::getVirtualSessionCheckin","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_listLineItems","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::listLineItems","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_listPages","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::listPages","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_listRegEmails","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::listRegEmails","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\RegConcern","fromLink":"FFNLabs/AventriConnect/Concerns/RegConcern.html","link":"FFNLabs/AventriConnect/Concerns/RegConcern.html#method_listTransactionTypes","name":"FFNLabs\\AventriConnect\\Concerns\\RegConcern::listTransactionTypes","doc":null},
            
                                                {"type":"Trait","fromName":"FFNLabs\\AventriConnect\\Concerns","fromLink":"FFNLabs/AventriConnect/Concerns.html","link":"FFNLabs/AventriConnect/Concerns/SeatingConcern.html","name":"FFNLabs\\AventriConnect\\Concerns\\SeatingConcern","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SeatingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SeatingConcern.html","link":"FFNLabs/AventriConnect/Concerns/SeatingConcern.html#method_listTableplans","name":"FFNLabs\\AventriConnect\\Concerns\\SeatingConcern::listTableplans","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SeatingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SeatingConcern.html","link":"FFNLabs/AventriConnect/Concerns/SeatingConcern.html#method_listTables","name":"FFNLabs\\AventriConnect\\Concerns\\SeatingConcern::listTables","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SeatingConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SeatingConcern.html","link":"FFNLabs/AventriConnect/Concerns/SeatingConcern.html#method_listSeats","name":"FFNLabs\\AventriConnect\\Concerns\\SeatingConcern::listSeats","doc":null},
            
                                                {"type":"Trait","fromName":"FFNLabs\\AventriConnect\\Concerns","fromLink":"FFNLabs/AventriConnect/Concerns.html","link":"FFNLabs/AventriConnect/Concerns/SelectConcern.html","name":"FFNLabs\\AventriConnect\\Concerns\\SelectConcern","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SelectConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SelectConcern.html","link":"FFNLabs/AventriConnect/Concerns/SelectConcern.html#method_download","name":"FFNLabs\\AventriConnect\\Concerns\\SelectConcern::download","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SelectConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SelectConcern.html","link":"FFNLabs/AventriConnect/Concerns/SelectConcern.html#method_listApplicants","name":"FFNLabs\\AventriConnect\\Concerns\\SelectConcern::listApplicants","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SelectConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SelectConcern.html","link":"FFNLabs/AventriConnect/Concerns/SelectConcern.html#method_getApplicant","name":"FFNLabs\\AventriConnect\\Concerns\\SelectConcern::getApplicant","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SelectConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SelectConcern.html","link":"FFNLabs/AventriConnect/Concerns/SelectConcern.html#method_listSubmissions","name":"FFNLabs\\AventriConnect\\Concerns\\SelectConcern::listSubmissions","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SelectConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SelectConcern.html","link":"FFNLabs/AventriConnect/Concerns/SelectConcern.html#method_getSubmission","name":"FFNLabs\\AventriConnect\\Concerns\\SelectConcern::getSubmission","doc":null},
            
                                                {"type":"Trait","fromName":"FFNLabs\\AventriConnect\\Concerns","fromLink":"FFNLabs/AventriConnect/Concerns.html","link":"FFNLabs/AventriConnect/Concerns/SocialConcern.html","name":"FFNLabs\\AventriConnect\\Concerns\\SocialConcern","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SocialConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SocialConcern.html","link":"FFNLabs/AventriConnect/Concerns/SocialConcern.html#method_changeStatus","name":"FFNLabs\\AventriConnect\\Concerns\\SocialConcern::changeStatus","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SocialConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SocialConcern.html","link":"FFNLabs/AventriConnect/Concerns/SocialConcern.html#method_listMeetings","name":"FFNLabs\\AventriConnect\\Concerns\\SocialConcern::listMeetings","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SocialConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SocialConcern.html","link":"FFNLabs/AventriConnect/Concerns/SocialConcern.html#method_getMeeting","name":"FFNLabs\\AventriConnect\\Concerns\\SocialConcern::getMeeting","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SocialConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SocialConcern.html","link":"FFNLabs/AventriConnect/Concerns/SocialConcern.html#method_createMeeting","name":"FFNLabs\\AventriConnect\\Concerns\\SocialConcern::createMeeting","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SocialConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SocialConcern.html","link":"FFNLabs/AventriConnect/Concerns/SocialConcern.html#method_cancelMeeting","name":"FFNLabs\\AventriConnect\\Concerns\\SocialConcern::cancelMeeting","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SocialConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SocialConcern.html","link":"FFNLabs/AventriConnect/Concerns/SocialConcern.html#method_modifyMeeting","name":"FFNLabs\\AventriConnect\\Concerns\\SocialConcern::modifyMeeting","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SocialConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SocialConcern.html","link":"FFNLabs/AventriConnect/Concerns/SocialConcern.html#method_addAttendeeToMeeting","name":"FFNLabs\\AventriConnect\\Concerns\\SocialConcern::addAttendeeToMeeting","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SocialConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SocialConcern.html","link":"FFNLabs/AventriConnect/Concerns/SocialConcern.html#method_listMeetingTypes","name":"FFNLabs\\AventriConnect\\Concerns\\SocialConcern::listMeetingTypes","doc":null},
            
                                                {"type":"Trait","fromName":"FFNLabs\\AventriConnect\\Concerns","fromLink":"FFNLabs/AventriConnect/Concerns.html","link":"FFNLabs/AventriConnect/Concerns/SurveyConcern.html","name":"FFNLabs\\AventriConnect\\Concerns\\SurveyConcern","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SurveyConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SurveyConcern.html","link":"FFNLabs/AventriConnect/Concerns/SurveyConcern.html#method_listSurveys","name":"FFNLabs\\AventriConnect\\Concerns\\SurveyConcern::listSurveys","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SurveyConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SurveyConcern.html","link":"FFNLabs/AventriConnect/Concerns/SurveyConcern.html#method_listSurveyQuestions","name":"FFNLabs\\AventriConnect\\Concerns\\SurveyConcern::listSurveyQuestions","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SurveyConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SurveyConcern.html","link":"FFNLabs/AventriConnect/Concerns/SurveyConcern.html#method_listSurveyResponses","name":"FFNLabs\\AventriConnect\\Concerns\\SurveyConcern::listSurveyResponses","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SurveyConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SurveyConcern.html","link":"FFNLabs/AventriConnect/Concerns/SurveyConcern.html#method_getSurveyResponse","name":"FFNLabs\\AventriConnect\\Concerns\\SurveyConcern::getSurveyResponse","doc":null},
            
                                                {"type":"Trait","fromName":"FFNLabs\\AventriConnect\\Concerns","fromLink":"FFNLabs/AventriConnect/Concerns.html","link":"FFNLabs/AventriConnect/Concerns/SystemConcern.html","name":"FFNLabs\\AventriConnect\\Concerns\\SystemConcern","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SystemConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SystemConcern.html","link":"FFNLabs/AventriConnect/Concerns/SystemConcern.html#method_authorize","name":"FFNLabs\\AventriConnect\\Concerns\\SystemConcern::authorize","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SystemConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SystemConcern.html","link":"FFNLabs/AventriConnect/Concerns/SystemConcern.html#method_listAvailableFunctions","name":"FFNLabs\\AventriConnect\\Concerns\\SystemConcern::listAvailableFunctions","doc":"Returns a list of available functions within the Aventri API. Details include which module\nthe function belongs to and what HTTP method is required to call it."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\SystemConcern","fromLink":"FFNLabs/AventriConnect/Concerns/SystemConcern.html","link":"FFNLabs/AventriConnect/Concerns/SystemConcern.html#method_resetSession","name":"FFNLabs\\AventriConnect\\Concerns\\SystemConcern::resetSession","doc":null},
            
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

        // Enable the version switcher
    $('#version-switcher').on('change', function() {
        window.location = $(this).val()
    });
    var versionSwitcher = document.getElementById('version-switcher');
    if (versionSwitcher) {
        var versionToSelect = document.evaluate(
            '//option[@data-version="develop"]',
            versionSwitcher,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;

        if (versionToSelect && typeof versionToSelect.selected === 'boolean') {
            versionToSelect.selected = true;
        }
    }
    
    
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


