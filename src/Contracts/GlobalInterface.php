<?php

namespace FFNLabs\AventriConnect\Contracts;

interface GlobalInterface
{
    function AddContact();
    function authorize();
    function cloneEvent();
    function createSpeaker();
    function deleteContact();
    function getContact();
    function getContactQuestion();
    function getSpeaker();
    function listAvailableFunctions();
    function listContactQuestions();
    function listContacts();
    function listEvents();
    function listFolders();
    function listLanguages();
    function listSessions();
    function listTaxRegimes();
    function listTracks();
    function listTransactionTypes();
    function resetSession();
    function searchEvents();
    function listCurrencies();
    function updateContact();
    function updateSpeaker();
    function listSpeakers();
}

