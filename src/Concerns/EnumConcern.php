<?php

namespace FFNLabs\AventriConnect\Concerns;

trait EnumConcern
{
    public function listCategories()
    {
    }

    public function getCategory()
    {
    }

    /**
     * Use this function to return a list of all supported currencies and the corresponding ISO 4217 a 3 character code.
     */
    public function listCurrencies($params = [])
    {
        $uri = $this->getUri("global/listCurrencies");

        return $this->get($uri, $params);
    }

    public function listFolders()
    {
    }

    public function listLanguages()
    {
    }

    public function listTaxRegimes()
    {
    }
}
