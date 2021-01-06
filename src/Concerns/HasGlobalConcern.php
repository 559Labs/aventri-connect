<?php

namespace FFNLabs\AventriConnect\Concerns;

use \BadMethodCallException;

trait HasGlobalConcern
{
    public function authorize($params=[]) {}
    public function resetSession($params=[]) {}
    public function listAvailableFunctions($params=[]) {}

    // Contacts
    public function listContacts($params=[]) {}
    public function getContact($params=[]) {}
    public function addContact($email="", $other_id="", $params=[]) {}
    public function deleteContact($params=[]) {}
    public function updateContact($params=[]) {}


    // Contact Questions
    public function getContactQuestion($params=[]) {}
    public function listContactQuestions($params=[]) {}

    // Speakers
    public function listSpeakers($params=[]) {}
    public function getSpeaker($params=[]) {}
    public function createSpeaker($params=[]) {}
    public function updateSpeaker($params=[]) {}

    // Events
    public function listEvents($params=[]) {}
    public function searchEvents($params=[]) {}
    public function cloneEvent($params=[]) {}

    // Other Lists
    public function listFolders($params=[]) {}
    public function listLanguages($params=[]) {}
    public function listSessions($params=[]) {}
    public function listTaxRegimes($params=[]) {}
    public function listTracks($params=[]) {}
    public function listTransactionTypes($params=[]) {}
    public function listCurrencies($params=[]) {}

}

