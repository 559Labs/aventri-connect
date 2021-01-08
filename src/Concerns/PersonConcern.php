<?php

namespace FFNLabs\AventriConnect\Concerns;

trait PersonConcern
{
    public function listAttendees()
    {
    }

    public function getAttendee()
    {
    }

    public function createAttendee()
    {
    }

    public function searchAttendees()
    {
    }

    public function checkInAttendee()
    {
    }

    public function listSpeakers()
    {
    }

    public function getSpeaker()
    {
    }

    public function createSpeaker()
    {
    }

    public function updateSpeaker()
    {
    }

    public function updateAttendeeInfoResponses()
    {
    }

    public function updateAttendeeStatus()
    {
    }

    /**
     * Use this function to get a list of any contacts you currently have in your account.
     * The information from this function is very basic. To get a more detailed set of
     * information you can use this function in conjunction with the getContact function.
     */
    public function listContacts($args = [])
    {
        $uri = $this->getUri("global/listContacts");
        $fields = ['databaseid', 'email', 'other_id', 'fields', 'limit', 'offset'];
        $params = $this->getQueryParams($args, $fields);
        return $this->get($uri, $params);
    }

    /**
     * Use this function to get detailed set of information of any contact you currently have in your account.
     *
     * @params int   $contactid The ID of the contact you'd like to retrieve.
     */
    public function getContact(int $contactid = 0)
    {
        $uri = $this->getUri("global/getContact");
        $params = [];
        if ($contactid > 0) {
            $params['query'] = ['contactid' => $contactid];
        }

        return $this->get($uri, $params);
    }

    public function addContact()
    {
    }

    public function deleteContact()
    {
    }

    public function updateContact()
    {
    }

    public function createAttendeeBridge()
    {
    }

    /**
     * This function will return a basic list of the available contact questions.
     * Custom questions will also be included.
     *
     * @param int $limit  Default 2000
     * @param int $offset Default 0
     */
    public function listContactQuestions($limit = 2000, $offset = 0)
    {
        return $this->get(
            $this->getUri("global/listContactQuestions"),
            ['query' => [
                'limit' => $limit,
                'offset' => $offset,
            ]]
        );
    }

    public function getContactQuestion()
    {
    }
}
