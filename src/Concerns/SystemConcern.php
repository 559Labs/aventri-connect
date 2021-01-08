<?php

namespace FFNLabs\AventriConnect\Concerns;

use Carbon\Carbon;
use FFNLabs\AventriConnect\Exceptions\AuthenticationException;
use FFNLabs\AventriConnect\Exceptions\NotImplementedException;

trait SystemConcern {
    public function authorize()
    {
        if ($this->accessTokenIsValid()) {
            return 0;
        }

        $uri = $this->getUri("global/authorize");
        $payload = [
            'accountid' => $this->data['auth']['account_id'],
            'key' => $this->data['auth']['account_key'],
        ];
        $request = $this->getClient()->post($uri, ['form_params' => $payload]);
        if ($request->getStatusCode() > 299) {
            throw new AuthenticationException($request->getReasonPhrase());
        }
        $body = json_decode($request->getBody());
        if (property_exists($body, "error")) {
            $msg = "";
            foreach ($body->error as $k => $v) {
                $msg .= $k . ": " . $v . "; ";
            }

            throw new AuthenticationException($msg);
        }

        $this->data['auth']['token']['value'] = json_decode($request->getBody())->accesstoken;
        $this->data['auth']['token']['expires'] = Carbon::now()
            ->addMinutes($this->data['auth']['token']['duration']);

        return 0;
    }

    /**
     * Returns a list of available functions within the Aventri API. Details include which module
     * the function belongs to and what HTTP method is required to call it.

    */
    public function listAvailableFunctions()
    {
        $uri = $this->getUri("global/listAvailableFunctions");
        $request = $this->getClient()->get($uri);
        if ($request->getStatusCode() > 299) {
            throw new AuthenticationException($request->getReasonPhrase());
        }

        return json_decode($request->getBody());
    }

    public function resetSession($params = [])
    {
        throw new NotImplementedException();
        $uri = $this->getUri("global/resetSession");
        $request = $this->getClient()->get($uri);
    }
}
