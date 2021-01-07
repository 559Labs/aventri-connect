<?php

namespace FFNLabs\AventriConnect\Concerns;

use FFNLabs\AventriConnect\Exceptions\NotImplementedException;

trait GlobalService
{
    // Contacts
    public function listContacts($params = [])
    {
        throw new NotImplementedException();
    }

    /**
     * Use this function to get detailed set of information of any contact you currently have in your account.
     */
    public function getContact(int $contactid, $params = [])
    {
        $uri = $this->getUri("global/getContact");
        $params = array_merge($params, ['query' => ['contactid'=> $contactid]]);
        return $this->get($uri, $params);
    }

    public function addContact($email = "", $other_id = "", $params = [])
    {
        throw new NotImplementedException();
    }

    /**
     * Use this function to delete a contact in your account.
     */
    public function deleteContact($params = [])
    {
        throw new NotImplementedException();
    }

    public function updateContact($params = [])
    {
        throw new NotImplementedException();
    }

    /**
     * This function will return detailed information for a given contact question.
     */
    public function getContactQuestion($params = [])
    {
        throw new NotImplementedException();
    }

    public function listContactQuestions($params = [])
    {
        throw new NotImplementedException();
    }

    // Speakers
    public function listSpeakers($params = [])
    {
        throw new NotImplementedException();
    }

    /**
     * This function will return detailed information for a given account level speaker.
     */
    public function getSpeaker($params = [])
    {
        throw new NotImplementedException();
    }

    /**
     * Use this function to create an account level speaker.
     */
    public function createSpeaker($params = [])
    {
        throw new NotImplementedException();
    }

    public function updateSpeaker($params = [])
    {
        throw new NotImplementedException();
    }

    // Events
    public function listEvents($params = [])
    {
        throw new NotImplementedException();
    }

    public function searchEvents($params = [])
    {
        throw new NotImplementedException();
    }

    /**
     * The clone event function allows you to take an existing event within the Aventri system and create a copy of it.
     */
    public function cloneEvent($params = [])
    {
        throw new NotImplementedException();
    }

    // Other Lists
    public function listFolders($params = [])
    {
        throw new NotImplementedException();
    }

    public function listLanguages($params = [])
    {
        throw new NotImplementedException();
    }

    public function listSessions($params = [])
    {
        throw new NotImplementedException();
    }

    public function listTaxRegimes($params = [])
    {
        throw new NotImplementedException();
    }

    public function listTracks($params = [])
    {
        throw new NotImplementedException();
    }

    public function listTransactionTypes($params = [])
    {
        throw new NotImplementedException();
    }

    /**
     * Use this function to return a list of all supported currencies and the corresponding ISO 4217 a 3 character code.
     */
    public function listCurrencies($params = [])
    {
        $uri = $this->getUri("global/listCurrencies");
        return $this->get($uri);
    }
}
