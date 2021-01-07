<?php

namespace FFNLabs\AventriConnect\Concerns;

use FFNLabs\AventriConnect\Exceptions\BadRequestException;

trait BaseService
{

    protected function request($method, $uri, $options=[])
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

    protected function get($uri, $options=[]) {
        $this->authorize();
        $options = array_merge($options, ['query' => ['accesstoken' => $this->data['auth']['token']['value']]]);
        return $this->request("get", $uri, $options);
    }

    protected function post($uri, $options=[]) {
        $this->authorize();
        return $this->request("post", $uri, $options);
    }

    protected function patch($uri, $options=[]) {
        $this->authorize();
        return $this->request("patch", $uri, $options);
    }

    protected function put($uri, $options=[]) {
        $this->authorize();
        return $this->request("put", $uri, $options);
    }
}
