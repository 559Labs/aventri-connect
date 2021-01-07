# aventri-connect

[![Latest Version on Packagist](https://img.shields.io/packagist/v/559labs/aventri-connect.svg?style=flat-square)](https://packagist.org/packages/559labs/aventri-connect)
[![GitHub Tests Action Status](https://img.shields.io/github/workflow/status/559labs/aventri-connect/Tests?label=tests)](https://github.com/559labs/aventri-connect/actions?query=workflow%3ATests+branch%3Amaster)
[![Total Downloads](https://img.shields.io/packagist/dt/559labs/aventri-connect.svg?style=flat-square)](https://packagist.org/packages/559labs/aventri-connect)

PHP wrapper for the Aventri's API. In very early alpha state, so definitely don't use it in production.

This is not an official package and has no connection to Aventri, Inc.


## Installation

You can install the package via composer:

```zsh
composer require FFNLabs/aventri-connect
```

## Usage

Grab your API _access key_ (40-character string) and _account ID_ (integer) and instantiate the client:

```php
$client = new FFNLabs\AventriConnect\AventriClient(["access_key"=>"", "account_id"=>""]);
```

## Testing

```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Andrew Marconi](https://github.com/FFNLabs)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
