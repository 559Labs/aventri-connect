<?php

namespace FFNLabs\AventriConnect\Concerns;

use FFNLabs\AventriConnect\Exceptions\NotImplementedException;

trait GlobalService
{

    /**
     * Use this function to get a list of any contacts you currently have in your account.
     * The information from this function is very basic. To get a more detailed set of
     * information you can use this function in conjunction with the getContact function.
     */
    public function listContacts($args=[])
    {
        $fields = ['databaseid', 'email', 'other_id', 'fields', 'limit', 'offset'];
        $uri = $this->getUri("global/listContacts");
        $params = $this->getQueryParams($args, $fields);
        return $this->get($uri, $params);
    }

    /**
     * Use this function to get detailed set of information of any contact you currently have in your account.
     *
     * @params int   $contactid The ID of the contact you'd like to retrieve.
     */
    public function getContact(int $contactid=0)
    {
        $uri = $this->getUri("global/getContact");
        $params = array_merge($params, ['query' => ['contactid'=> $contactid]]);
        $params = [];
        if ($contactid > 0) {
            $params['query'] = ['contactid' => $contactid];
        }
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

    /**
     * This function will return a basic list of the available contact questions.
     * Custom questions will also be included.
     *
     * @param int $limit  Default 2000
     * @param int $offset Default 0
     */
    public function listContactQuestions($limit=2000, $offset=0)
    {
        return $this->get(
            $this->getUri("global/listContactQuestions"),
            ['query' => [
                'limit' => $limit,
                'offset' => $offset,
            ]]
        );
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

    /**
     * At the very core of Aventri is the ability to create events. Use this function to get a list of any events
     * you currently have in your account. The information from this function is very basic. To get a more detailed
     * set of information you can use this function in conjunction with the getEvent function.
     *
     * @param string $fields
     * @param int    $limit
     * @param int    $offset
     * @param string $search
     */
    public function listEvents(string $fields="", int $limit=2000, int $offset=0, string $search="")
    {
        $query = [
            'limit' => $limit,
            'offset' => $offset,
        ];
        if (!empty($search)) {
            $query['search'] = $search;
        }
        if (!empty($fields)) {
            $query['fields'] = $fields;
        }
        return $this->get(
            $this->getUri("global/listEvents"),
            ['query' => $query]
        );
    }

    public function getEvent(int $eventid=0) {
        $uri = $this->getUri("ereg/getEvent");
        $params = [
            'query' => [
                "eventid" => $eventid,
            ]
        ];
        return $this->get($uri, $params);
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
        return $this->get($uri, $params);
    }
}
