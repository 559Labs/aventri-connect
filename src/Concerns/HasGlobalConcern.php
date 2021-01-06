<?php

namespace FFNLabs\AventriConnect\Concerns;

trait HasGlobalConcern
{
    /**
     * Use the authorize function to authorize your API session. Authorization is required to make any other API calls.
     */
    public function authorize($params = [])
    {
    }

    public function resetSession($params = [])
    {
    }

    /**
     * Returns a list of available functions within the Aventri API. Details include which module
     * the function belongs to and what HTTP method is required to call it.
     */
    public function listAvailableFunctions($params = [])
    {
    }

    // Contacts
    public function listContacts($params = [])
    {
    }

    /**
     * Use this function to get detailed set of information of any contact you currently have in your account.
     */
    public function getContact($params = [])
    {
    }

    public function addContact($email = "", $other_id = "", $params = [])
    {
    }

    /**
     * Use this function to delete a contact in your account.
     */
    public function deleteContact($params = [])
    {
    }

    public function updateContact($params = [])
    {
    }

    /**
     * This function will return detailed information for a given contact question.
     */
    public function getContactQuestion($params = [])
    {
    }

    public function listContactQuestions($params = [])
    {
    }

    // Speakers
    public function listSpeakers($params = [])
    {
    }

    /**
     * This function will return detailed information for a given account level speaker.
     */
    public function getSpeaker($params = [])
    {
        $path = "global/getSpeaker.json";
    }

    /**
     * Use this function to create an account level speaker.
     */
    public function createSpeaker($params = [])
    {
    }

    public function updateSpeaker($params = [])
    {
    }

    // Events
    public function listEvents($params = [])
    {
    }

    public function searchEvents($params = [])
    {
    }

    /**
     * The clone event function allows you to take an existing event within the Aventri system and create a copy of it.
     */
    public function cloneEvent($params = [])
    {
    }

    // Other Lists
    public function listFolders($params = [])
    {
    }

    public function listLanguages($params = [])
    {
    }

    public function listSessions($params = [])
    {
    }

    public function listTaxRegimes($params = [])
    {
    }

    public function listTracks($params = [])
    {
    }

    public function listTransactionTypes($params = [])
    {
    }

    public function listCurrencies($params = [])
    {
    }
}
