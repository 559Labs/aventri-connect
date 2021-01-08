

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '<ul><li data-name="namespace:FFNLabs" class="opened"><div style="padding-left:0px" class="hd"><span class="icon icon-play"></span><a href="FFNLabs.html">FFNLabs</a></div><div class="bd"><ul><li data-name="namespace:FFNLabs_AventriConnect" ><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="FFNLabs/AventriConnect.html">AventriConnect</a></div><div class="bd"><ul><li data-name="namespace:FFNLabs_AventriConnect_Concerns" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="FFNLabs/AventriConnect/Concerns.html">Concerns</a></div><div class="bd"><ul><li data-name="class:FFNLabs_AventriConnect_Concerns_HasGlobalConcern" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html">HasGlobalConcern</a></div></li></ul></div></li><li data-name="namespace:FFNLabs_AventriConnect_Contracts" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="FFNLabs/AventriConnect/Contracts.html">Contracts</a></div><div class="bd"><ul><li data-name="class:FFNLabs_AventriConnect_Contracts_GlobalInterface" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Contracts/GlobalInterface.html">GlobalInterface</a></div></li></ul></div></li><li data-name="namespace:FFNLabs_AventriConnect_Tests" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="FFNLabs/AventriConnect/Tests.html">Tests</a></div><div class="bd"><ul><li data-name="class:FFNLabs_AventriConnect_Tests_ExampleTest" ><div style="padding-left:62px" class="hd leaf"><a href="FFNLabs/AventriConnect/Tests/ExampleTest.html">ExampleTest</a></div></li></ul></div></li><li data-name="class:FFNLabs_AventriConnect_AventriConnect" ><div style="padding-left:44px" class="hd leaf"><a href="FFNLabs/AventriConnect/AventriConnect.html">AventriConnect</a></div></li></ul></div></li></ul></div></li></ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                        {"type":"Namespace","link":"FFNLabs.html","name":"FFNLabs","doc":"Namespace FFNLabs"},{"type":"Namespace","link":"FFNLabs/AventriConnect.html","name":"FFNLabs\\AventriConnect","doc":"Namespace FFNLabs\\AventriConnect"},{"type":"Namespace","link":"FFNLabs/AventriConnect/Concerns.html","name":"FFNLabs\\AventriConnect\\Concerns","doc":"Namespace FFNLabs\\AventriConnect\\Concerns"},{"type":"Namespace","link":"FFNLabs/AventriConnect/Contracts.html","name":"FFNLabs\\AventriConnect\\Contracts","doc":"Namespace FFNLabs\\AventriConnect\\Contracts"},{"type":"Namespace","link":"FFNLabs/AventriConnect/Tests.html","name":"FFNLabs\\AventriConnect\\Tests","doc":"Namespace FFNLabs\\AventriConnect\\Tests"},                                                 {"type":"Interface","fromName":"FFNLabs\\AventriConnect\\Contracts","fromLink":"FFNLabs/AventriConnect/Contracts.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_AddContact","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::AddContact","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_authorize","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::authorize","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_cloneEvent","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::cloneEvent","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_createSpeaker","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::createSpeaker","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_deleteContact","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::deleteContact","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_getContact","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::getContact","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_getContactQuestion","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::getContactQuestion","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_getSpeaker","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::getSpeaker","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listAvailableFunctions","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listAvailableFunctions","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listContactQuestions","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listContactQuestions","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listContacts","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listContacts","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listEvents","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listEvents","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listFolders","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listFolders","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listLanguages","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listLanguages","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listSessions","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listSessions","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listTaxRegimes","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listTaxRegimes","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listTracks","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listTracks","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listTransactionTypes","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listTransactionTypes","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_resetSession","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::resetSession","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_searchEvents","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::searchEvents","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listCurrencies","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listCurrencies","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_updateContact","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::updateContact","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_updateSpeaker","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::updateSpeaker","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listSpeakers","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listSpeakers","doc":null},
            
                                                        {"type":"Class","fromName":"FFNLabs\\AventriConnect","fromLink":"FFNLabs/AventriConnect.html","link":"FFNLabs/AventriConnect/AventriConnect.html","name":"FFNLabs\\AventriConnect\\AventriConnect","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\AventriConnect","fromLink":"FFNLabs/AventriConnect/AventriConnect.html","link":"FFNLabs/AventriConnect/AventriConnect.html#method___construct","name":"FFNLabs\\AventriConnect\\AventriConnect::__construct","doc":null},
            
                                                {"type":"Trait","fromName":"FFNLabs\\AventriConnect\\Concerns","fromLink":"FFNLabs/AventriConnect/Concerns.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_authorize","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::authorize","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_resetSession","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::resetSession","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_listAvailableFunctions","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::listAvailableFunctions","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_listContacts","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::listContacts","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_getContact","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::getContact","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_addContact","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::addContact","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_deleteContact","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::deleteContact","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_updateContact","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::updateContact","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_getContactQuestion","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::getContactQuestion","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_listContactQuestions","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::listContactQuestions","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_listSpeakers","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::listSpeakers","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_getSpeaker","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::getSpeaker","doc":"This function will return detailed information for a given account level speaker."},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_createSpeaker","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::createSpeaker","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_updateSpeaker","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::updateSpeaker","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_listEvents","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::listEvents","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_searchEvents","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::searchEvents","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_cloneEvent","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::cloneEvent","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_listFolders","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::listFolders","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_listLanguages","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::listLanguages","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_listSessions","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::listSessions","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_listTaxRegimes","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::listTaxRegimes","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_listTracks","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::listTracks","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_listTransactionTypes","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::listTransactionTypes","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern","fromLink":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html","link":"FFNLabs/AventriConnect/Concerns/HasGlobalConcern.html#method_listCurrencies","name":"FFNLabs\\AventriConnect\\Concerns\\HasGlobalConcern::listCurrencies","doc":null},
            
                                                {"type":"Class","fromName":"FFNLabs\\AventriConnect\\Contracts","fromLink":"FFNLabs/AventriConnect/Contracts.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","doc":null},
                                {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_AddContact","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::AddContact","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_authorize","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::authorize","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_cloneEvent","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::cloneEvent","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_createSpeaker","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::createSpeaker","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_deleteContact","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::deleteContact","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_getContact","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::getContact","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_getContactQuestion","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::getContactQuestion","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_getSpeaker","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::getSpeaker","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listAvailableFunctions","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listAvailableFunctions","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listContactQuestions","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listContactQuestions","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listContacts","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listContacts","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listEvents","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listEvents","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listFolders","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listFolders","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listLanguages","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listLanguages","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listSessions","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listSessions","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listTaxRegimes","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listTaxRegimes","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listTracks","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listTracks","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listTransactionTypes","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listTransactionTypes","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_resetSession","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::resetSession","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_searchEvents","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::searchEvents","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listCurrencies","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listCurrencies","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_updateContact","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::updateContact","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_updateSpeaker","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::updateSpeaker","doc":null},
        {"type":"Method","fromName":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface","fromLink":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html","link":"FFNLabs/AventriConnect/Contracts/GlobalInterface.html#method_listSpeakers","name":"FFNLabs\\AventriConnect\\Contracts\\GlobalInterface::listSpeakers","doc":null},
            
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
            '//option[@data-version="main"]',
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


