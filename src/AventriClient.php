<?php

namespace FFNLabs\AventriConnect;

use FFNLabs\AventriConnect\Enums;
use GuzzleHttp\Client as GuzzleClient;
use FFNLabs\AventriConnect\Exceptions\AuthenticationException;

class AventriClient
{

    /**
     * Stateful data container
     */
    public array $data = [
        "accesstoken" => "",
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
    public function __construct(
        string $endpoint = Enums::ENDPOINT_NA,
        string $api_version = Enums::APIVERSION_CURRENT,
        string $account_id = "",
        string $account_key = "",
        int   $token_duration = 10,
        string $format = "json"
    ) {
        $this->data['endpoint'] = $endpoint;
        $this->data['apiversion'] = $api_version;
        $this->data['format'] = $format;
        $this->data['auth'] = [
            'account_id' => $account_id,
            'account_key' => $account_key,
            'token' => [
                "value" => "",
                "duration" => $token_duration,
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
    public function getUri($method="")
    {
        $uri = $this->data['endpoint'] . "/api/" . $this->data['apiversion'] . "/";
        if ($method) {
            $uri .= $method . "." . $this->data['format'];
        }
        return $uri;
    }

    public function accessTokenIsValid() {
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

    public function getClient()
    {
        return $this->data['client'];
    }

    public function authorize()
    {
        if ($this->accessTokenIsValid()) {
            return 0;
        }

        $uri = $this->getUri("global/authorize");
        $payload = [
            'accountid' => $this->data['auth']['account_id'],
            'key' => $this->data['auth']['account_key']
        ];
        $request = $this->getClient()->post($uri, ['form_params' => $payload]);
        if ($request->getStatusCode() > 299) {
            throw new AuthenticationException($request->getReasonPhrase());
        }
        $this->data['auth']['token']['value'] = json_decode($request->getBody())->accesstoken;
        $this->data['auth']['token']['expires'] = \Carbon\Carbon::now()->addMinutes($this->data['auth']['token']['duration']);
        return 0;
    }

    public function listAvailableFunctions() {
        $uri = $this->getUri("global/listAvailableFunctions");
        $request = $this->getClient()->get($uri);
        if ($request->getStatusCode() > 299) {
            throw new AuthenticationException($request->getReasonPhrase());
        }
        return json_decode($request->getBody());
    }
}
