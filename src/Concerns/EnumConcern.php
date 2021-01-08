<?php

namespace FFNLabs\AventriConnect\Concerns;

trait EnumConcern
{
    /**
     * In Aventri you can create a number of different categories for attendees to register with. This function allows you to list the available categories for a given event.
     *
     * $args can have one or more of the following:
     * - int limit. Defaults to 2000.
     * - int offset. Defaults to 0.
     *
     * @param int   $eventid Required.
     * @param array $args    Array of arguments.
     */
    public function listCategories(int $eventid, array $args=[])
    {
        $uri = $this->getUri("ereg/listCategories");
        $fields = ['limit', 'offset'];
        $params = $this->getQueryParams($args, $fields);
        $params['query']['eventid'] = $eventid;
        return $this->get($uri, $params);
    }

    /**
     * Use the get category function to retrieve information about a specific event registrant category.
     *
     * @param int  $eventid
     * @param int  $categoryid
     * @param bool $stats Default false
     */
    public function getCategory(int $eventid, int $categoryid, bool $stats = false)
    {
        $uri = $this->getUri("ereg/getCategory");
        $params = [
            "query" => [
                "eventid" => $eventid,
                "categoryid" => $categoryid,
                "stats" => $stats,
            ]
        ];
        return $this->get($uri, $params);
    }

    /**
     * Use this function to return a list of all supported currencies and the corresponding ISO 4217 a 3 character code.
     */
    public function listCurrencies($params = [])
    {
        $uri = $this->getUri("global/listCurrencies");
        return $this->get($uri, $params);
    }

    /**
     * The Aventri system allows you to create folders to sort a number of different objects, this function will list out the available folders within your account.
     *
     * Available $args:
     * - limit
     * - offset
     *
     * @param array $args
     */
    public function listFolders(array $args = [])
    {
        $uri = $this->getUri("global/listFolders");
        $fields = ["limit", "offset"];
        $params = $this->getQueryParams($args, $fields);
        return $this->get($uri, $params);
    }

    /**
     * This function will return all languages supported by Aventri. Use the abbreviation for other API calls.
     *
     * @param bool $native If true, return the language name in the local language rather than English.
     */
    public function listLanguages(bool $native=false)
    {
        $uri = $this->getUri("global/listLanguages");
        $params = [
            "query" => [
                "native" => (($native) ? 1 : 0),
            ]
        ];
        return $this->get($uri, $params);
    }

    /**
     * This function will return a list of the tax regimes types in the system.
     */
    public function listTaxRegimes()
    {
        $uri = $this->getUri("global/listTaxRegimes");
        return $this->get($uri, []);
    }
}
