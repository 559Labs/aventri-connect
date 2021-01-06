<?php

namespace FFNLabs\AventriConnect\Contracts;

interface GlobalInterface
{
    public function AddContact();

    public function authorize();

    public function cloneEvent();

    public function createSpeaker();

    public function deleteContact();

    public function getContact();

    public function getContactQuestion();

    public function getSpeaker();

    public function listAvailableFunctions();

    public function listContactQuestions();

    public function listContacts();

    public function listEvents();

    public function listFolders();

    public function listLanguages();

    public function listSessions();

    public function listTaxRegimes();

    public function listTracks();

    public function listTransactionTypes();

    public function resetSession();

    public function searchEvents();

    public function listCurrencies();

    public function updateContact();

    public function updateSpeaker();

    public function listSpeakers();
}
