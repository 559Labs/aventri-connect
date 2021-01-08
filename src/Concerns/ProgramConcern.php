<?php

namespace FFNLabs\AventriConnect\Concerns;

trait ProgramConcern
{
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
    public function listEvents(string $fields = "", int $limit = 2000, int $offset = 0, string $search = "")
    {
        $query = [
            'limit' => $limit,
            'offset' => $offset,
        ];
        if (! empty($search)) {
            $query['search'] = $search;
        }
        if (! empty($fields)) {
            $query['fields'] = $fields;
        }

        return $this->get(
            $this->getUri("global/listEvents"),
            ['query' => $query]
        );
    }

    public function getEvent(int $eventid = 0)
    {
        $uri = $this->getUri("ereg/getEvent");
        $params = [
            'query' => [
                "eventid" => $eventid,
            ],
        ];

        return $this->get($uri, $params);
    }

    public function createEvent()
    {
    }

    public function updateEvent()
    {
    }

    public function searchEvents()
    {
    }

    public function cloneEvent()
    {
    }

    public function updateAgendaResponses()
    {
    }

    public function listLocations()
    {
    }

    public function createLocation()
    {
    }

    public function updateLocation()
    {
    }

    public function listSessions()
    {
    }

    public function getSession()
    {
    }

    public function createSession()
    {
    }

    public function updateSession()
    {
    }

    public function getSessionCheckin()
    {
    }

    public function setSessionCheckin()
    {
    }

    public function getEventCheckins()
    {
    }

    public function listLocationSessions()
    {
    }
}
