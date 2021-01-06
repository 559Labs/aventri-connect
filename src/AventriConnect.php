<?php

namespace FFNLabs\AventriConnect;

use FFNLabs\AventriConnect\Concerns\HasGlobalConcern;

class AventriConnect
{
    use HasGlobalConcern;

    // Data Container
    protected $data = [
        "endpoint" => "",
    ];

    // Constants
    public const ENDPOINT_APAC = "https://api-apac.eventscloud.com";
    public const ENDPOINT_NA = "https://api-na.eventscloud.com";
    public const ENDPOINT_EMEA = "https://api-emea.eventscloud.com";


    public function __construct($region=self::ENDPOINT_NA)
    {

    }



}
