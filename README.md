# aventri-connect

[![Latest Version on Packagist](https://img.shields.io/packagist/v/559labs/aventri-connect.svg?style=flat-square)](https://packagist.org/packages/559labs/aventri-connect)
[![GitHub Tests Action Status](https://img.shields.io/github/workflow/status/559labs/aventri-connect/Tests?label=tests)](https://github.com/559labs/aventri-connect/actions?query=workflow%3ATests+branch%3Amaster)
[![Total Downloads](https://img.shields.io/packagist/dt/559labs/aventri-connect.svg?style=flat-square)](https://packagist.org/packages/559labs/aventri-connect)

PHP wrapper for the Aventri's API. In very early alpha state, so definitely don't use it in production.

This is not an official package and has no connection to Aventri, Inc.

- [Aventri Developer Docs](https://developer.aventri.com/)
- [This Package API Documentation](https://559labs.github.io/aventri-connect/) (this package)

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

## Status

| Category   | Status | Endpoint                    |
| --------   | :----: | --------------------------- |
| Global     | ✅     | authorize                   |
| Global     | ✅     | getContact                  |
| Global     | ❌     | listContacts                |
| Global     | ❌     | addContact                  |
| Global     | ❌     | deleteContact               |
| Global     | ❌     | updateContact               |
| Global     | ❌     | getContactQuestion          |
| Global     | ❌     | listContactQuestions        |
| Global     | ✅     | listCurrencies              |
| Global     | ❌     | listEvents                  |
| Global     | ❌     | searchEvents                |
| Global     | ❌     | cloneEvent                  |
| Global     | ❌     | listFolders                 |
| Global     | ❌     | listLanguages               |
| Global     | ❌     | listSessions                |
| Global     | ❌     | resetSession                |
| Global     | ❌     | updateSpeaker               |
| Global     | ❌     | listTaxRegimes              |
| Global     | ❌     | listTracks                  |
| Global     | ❌     | listTransactionTypes        |
| Global     | ✅     | listAvailableFunctions      |
| eMarketing | ❌     | getMailinglist              |
| eMarketing | ❌     | getMarketingMail            |
| eMarketing | ❌     | getSubscriber               |
| eMarketing | ❌     | listBlastResults            |
| eMarketing | ❌     | listBouncebackRecipients    |
| eMarketing | ❌     | listMailinglists            |
| eMarketing | ❌     | listMarketingMails          |
| eMarketing | ❌     | listSubscribers             |
| eMarketing | ❌     | listUnsubscribedRecipients  |
| eMarketing | ❌     | cancelMarketingBlast        |
| eMarketing | ❌     | createMailinglist           |
| eMarketing | ❌     | createSubscriber            |
| eMarketing | ❌     | scheduleMarketingBlast      |
| eMarketing | ❌     | cloneMarketingMail          |
| eMarketing | ❌     | updateMailinglist           |
| eMarketing | ❌     | updateMarketingMail         |
| eMarketing | ❌     | updateSubscriber            |
| eReg       | ❌     | getEventCheckins            |
| eReg       | ❌     | getHotel                    |
| eReg       | ❌     | getRoomtypes                |
| eReg       | ❌     | getSessionCheckin           |
| eReg       | ❌     | getVirtualSessionCheckin    |
| eReg       | ❌     | listLocationSessions        |
| eReg       | ❌     | listLocations               |
| eReg       | ❌     | searchAttendees             |
| eReg       | ❌     | searchPrepproved            |
| eReg       | ❌     | getAttendee                 |
| eReg       | ❌     | getCategory                 |
| eReg       | ❌     | getEvent                    |
| eReg       | ❌     | getInvoice                  |
| eReg       | ❌     | getOption                   |
| eReg       | ❌     | getPreLoad                  |
| eReg       | ❌     | getQuestion                 |
| eReg       | ❌     | getReport                   |
| eReg       | ❌     | getSession                  |
| eReg       | ❌     | getSpeaker                  |
| eReg       | ❌     | getTransaction              |
| eReg       | ❌     | listAttendees               |
| eReg       | ❌     | listCategories              |
| eReg       | ❌     | listHotels                  |
| eReg       | ❌     | listInvoices                |
| eReg       | ❌     | listLineItems               |
| eReg       | ❌     | listOptions                 |
| eReg       | ❌     | listPages                   |
| eReg       | ❌     | listPreLoads                |
| eReg       | ❌     | listPreapproved             |
| eReg       | ❌     | listQuestions               |
| eReg       | ❌     | listRegEmails               |
| eReg       | ❌     | listReports                 |
| eReg       | ❌     | listSessions                |
| eReg       | ❌     | listSpeakers                |
| eReg       | ❌     | listTransactions            |
| eReg       | ❌     | createLocation              |
| eReg       | ❌     | addPreapproved              |
| eReg       | ❌     | addPreload                  |
| eReg       | ❌     | createRoomtype              |
| eReg       | ❌     | createSession               |
| eReg       | ❌     | createSpeaker               |
| eReg       | ❌     | setSessionCheckin           |
| eReg       | ❌     | checkInAttendee             |
| eReg       | ❌     | createAttendee              |
| eReg       | ❌     | createAttendeeBridge        |
| eReg       | ❌     | createEvent                 |
| eReg       | ❌     | createHotel                 |
| eReg       | ❌     | createRoomblock             |
| eReg       | ❌     | deletePreLoad               |
| eReg       | ❌     | deletePreapproved           |
| eReg       | ❌     | updatePreLoad               |
| eReg       | ❌     | updatePreapproved           |
| eReg       | ❌     | updateSession               |
| eReg       | ❌     | updateSpeaker               |
| eReg       | ❌     | cloneEvent                  |
| eReg       | ❌     | deleteRoomblock             |
| eReg       | ❌     | deleteRoomtype              |
| eReg       | ❌     | updateAgendaResponses       |
| eReg       | ❌     | updateAttendeeInfoResponses |
| eReg       | ❌     | updateAttendeeStatus        |
| eReg       | ❌     | updateEvent                 |
| eReg       | ❌     | updateHotel                 |
| eReg       | ❌     | updateHotelResponses        |
| eReg       | ❌     | updateLocation              |
| eReg       | ❌     | updateOptionsResponses      |
| eReg       | ❌     | updateRoomblock             |
| eReg       | ❌     | updateRoomtype              |
| eReg       | ❌     | updateTravelResponses       |
| eReg       | ❌     | updateWelcomeResponses      |
| eSeating   | ❌     | listSeats                   |
| eSeating   | ❌     | listTables                  |
| eSeating   | ❌     | listTableplans              |
| eSelect    | ❌     | getApplicant                |
| eSelect    | ❌     | listApplicants              |
| eSelect    | ❌     | getSubmission               |
| eSelect    | ❌     | listSubmissions             |
| eSelect    | ❌     | download                    |
| eSocial    | ❌     | getMeeting                  |
| eSocial    | ❌     | listMeetings                |
| eSocial    | ❌     | cancelMeeting               |
| eSocial    | ❌     | modifyMeeting               |
| eSocial    | ❌     | createMeeting               |
| eSocial    | ❌     | listMeetingTypes            |
| eSocial    | ❌     | changeStatus                |
| eSocial    | ❌     | addAttendeeToMeeting        |
| eSurvey    | ❌     | listSurveys                 |
| eSurvey    | ❌     | listSurveyQuestions         |
| eSurvey    | ❌     | getSurveyResponse           |
| eSurvey    | ❌     | listSurveyResponses         |


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
