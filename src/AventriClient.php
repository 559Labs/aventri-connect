<?php

namespace FFNLabs\AventriConnect;

use GuzzleHttp\Client as GuzzleClient;

use FFNLabs\AventriConnect\Concerns\BaseService;
use FFNLabs\AventriConnect\Concerns\SystemConcern;

use FFNLabs\AventriConnect\Concerns\EnumConcern;
use FFNLabs\AventriConnect\Concerns\HotelConcern;
use FFNLabs\AventriConnect\Concerns\MarketingConcern;
use FFNLabs\AventriConnect\Concerns\PersonConcern;
use FFNLabs\AventriConnect\Concerns\ProgramConcern;
use FFNLabs\AventriConnect\Concerns\RegConcern;
use FFNLabs\AventriConnect\Concerns\SeatingConcern;
use FFNLabs\AventriConnect\Concerns\SelectConcern;
use FFNLabs\AventriConnect\Concerns\SocialConcern;
use FFNLabs\AventriConnect\Concerns\SurveyConcern;

class AventriClient
{
    use BaseService, SystemConcern,
       EnumConcern, HotelConcern, MarketingConcern,
       PersonConcern, ProgramConcern, RegConcern,
       SeatingConcern, SelectConcern, SocialConcern,
       SurveyConcern;

    /**
     * Stateful data container
     */
    public array $data = [
        "last_request" => "",
    ];

    /**
     * Constructor
     *
     * @param string $endpoint
     * @param string $api_version
     * @param string $account_id
     * @param string $account_key
     * @param int    $token_duration Usually set to 10 minutes in Aventri. This can be overwritten if different.
     * @param string $format Either 'json' or 'xml'. Should generally be 'json' unless you know what you're doing.
     */
    public function __construct($args = [])
    {
        $opts = array_merge(
            [
                'endpoint' => Enums::ENDPOINT_NA,
                'api_version' => Enums::APIVERSION_CURRENT,
                'account_id' => "",
                "account_key" => "",
                "token_duration" => 10,
                "format" => "json",
            ],
            $args
        );


        $this->data['endpoint'] = $opts['endpoint'];
        $this->data['apiversion'] = $opts['api_version'];
        $this->data['format'] = $opts['format'];
        $this->data['auth'] = [
            'account_id' => $opts['account_id'],
            'account_key' => $opts['account_key'],
            'token' => [
                "value" => "",
                "duration" => $opts['token_duration'],
                "expires" => "",
            ],
        ];
        $this->data['client'] = new GuzzleClient($this->getConfig());
    }

    /**
     * Generate a \GuzzleHttp\Client-compliant config object based on the settings within this class.
     *
     * @return array
     */
    public function getConfig() : array
    {
        return [
            'base_uri' => $this->getUri(),
        ];
    }

    /**
     * Generate an appropriate endpoint URI based on the client's configuration
     *
     * @return string
     */
    public function getUri($method = "")
    {
        $uri = $this->data['endpoint'] . "/api/" . $this->data['apiversion'] . "/";
        if ($method) {
            $uri .= $method . "." . $this->data['format'];
        }

        return $uri;
    }

    /**
     * Is the current access token valid (according to the specfied timeout)?
     *
     * @return bool
     */
    public function accessTokenIsValid()
    {
        if ($this->data['auth']['token']['value'] == "") {
            return false; // If the key doesn't exist, we've not acquired any key yet.
        }
        if ($this->data['auth']['token']['expires'] == "") {
            return false; // If the key doesn't exist, we've not acquired any key yet.
        }

        if (\Carbon\Carbon::now()->diffInMinutes($this->data['auth']['token']['expires']) < 1) {
            return false; // Is the time remaining in the duration less than 1 minute? If so, say it's invalid.
        }

        return true; // Otherwise it's probably good.
    }

    /**
     * More for dev and debugging, but this returns the client object from GuzzleHttp\Client.
     *
     * @return \GuzzleHttp\Client
     */
    public function getClient()
    {
        return $this->data['client'];
    }

    public function getQueryParams($args = [], $fields = [])
    {
        $obj = [];
        foreach ($fields as $f) {
            if (array_key_exists($f, $args)) {
                $org[$f] = $args[$f];
            }
        }

        return ['query' => $obj];
    }
}
