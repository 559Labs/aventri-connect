<?php

namespace FFNLabs\AventriConnect\Concerns;

use FFNLabs\AventriConnect\Exceptions\BadRequestException;

trait BaseService
{
    public function request($method, $uri, $options = [])
    {
        $this->authorize();
        $request = $this->getClient()->request($method, $uri, $options);
        $body = json_decode($request->getBody());
        $this->data['last_request'] = $request;
        if ($request->getStatusCode() > 299) {
            throw new BadRequestException($request->getReasonPhrase());
        }
        if (property_exists($body, "error")) {
            $msg = "";
            foreach ($body->error as $k => $v) {
                $msg .= $k . ": " . $v . "; ";
            }

            throw new BadRequestException($msg);
        }

        return json_decode($request->getBody());
    }

    public function get($uri, $options = [])
    {
        $this->authorize();
        $options = array_merge($options, ['query' => ['accesstoken' => $this->data['auth']['token']['value']]]);

        return $this->request("get", $uri, $options);
    }

    public function post($uri, $options = [])
    {
        $this->authorize();

        return $this->request("post", $uri, $options);
    }

    public function patch($uri, $options = [])
    {
        $this->authorize();

        return $this->request("patch", $uri, $options);
    }

    public function put($uri, $options = [])
    {
        $this->authorize();

        return $this->request("put", $uri, $options);
    }
}
