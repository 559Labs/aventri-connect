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
$client = new FFNLabs\AventriConnect\AventriClient([
    "access_key" => "", 
    "account_id" => 0,
]);
$client->listAvailableFunctions();
```

## Status

### ✅ EnumConcern

- **Category**: ✅ listCategories, ✅ getCategory
- **Currency**: ✅ listCurrencies
- **Folders**: ✅ listFolders
- **Languages**: ✅ listLanguages
- **TaxRegime**: ✅ listTaxRegimes


### HotelConcern

- **Hotel**: ❌ listHotels, ❌ getHotel, ❌ createHotel, ❌ updateHotel
- **HotelResponses**: ❌ updateHotelResponses
- **Roomblock**: ❌ createRoomblock, ❌ deleteRoomblock, ❌ updateRoomblock
- **Roomtype**: ❌ getRoomtypes, ❌ createRoomtype, ❌ deleteRoomtype, ❌ updateRoomtype


### MarketingConcern

- **MarketingMail**: ❌listMarketingMails, ❌ getMarketingMail, ❌ updateMarketingMail, ❌ cloneMarketingMail
- **Mailinglist**: ❌ listMailinglists, ❌ getMailinglist, ❌ createMailinglist, ❌ updateMailinglist
- **Subscriber**: ❌ listSubscribers, ❌ getSubscriber, ❌ createSubscriber, ❌ updateSubscriber
- **MarketingBlast**: ❌ cancelMarketingBlast
- **MarketingBlast**: ❌ scheduleMarketingBlast
- **BlastResults**: ❌ listBlastResults
- **BouncebackRecipients**: ❌ listBouncebackRecipients
- **UnsubscribedRecipient**: ❌ listUnsubscribedRecipients


### PersonConcern

- **Attendee**: ❌ listAttendees, ❌ getAttendee, ❌ createAttendee, ❌ searchAttendees, ❌ checkInAttendee
- **Speaker**: ❌ listSpeakers, ❌ getSpeaker, ❌ createSpeaker, ❌ updateSpeaker
- **AttendeeInfoResponses**: ❌ updateAttendeeInfoResponses
- **AttendeeStatus**: ❌ updateAttendeeStatus
- **Contact**: ✅ listContacts, ✅ getContact, ❌ addContact, ❌ deleteContact, ❌ updateContact
- **AttendeeBridge**: ❌ createAttendeeBridge
- **ContactQuestion**: ✅ listContactQuestions, ❌ getContactQuestion


### ProgramConcern

- **Event**: ✅ listEvents, ✅ getEvent, ❌ createEvent, ❌ updateEvent, ❌ searchEvents, ❌ cloneEvent
- **AgendaResponses**: ❌ updateAgendaResponses
- **Location**: ❌ listLocations, ❌ createLocation, ❌ updateLocation
- **Session**: ❌ listSessions, ❌ getSession, ❌ createSession, ❌ updateSession
- **SessionCheckin**: ❌ getSessionCheckin, ❌ setSessionCheckin
- **EventCheckins**: ❌ getEventCheckins
- **LocationSessions**: ❌ listLocationSessions
- **Track**: listTracks


### RegConcern

- **OptionsResponse**: ❌ updateOptionsResponses
- **Preapproved**: ❌ listPreapproved, ❌ addPreapproved, ❌ deletePreapproved, ❌ updatePreapproved
- **Preload**: ❌ listPreLoads, ❌ getPreLoad, ❌ addPreload, ❌ deletePreLoad, ❌ updatePreLoad
- **TravelResponse**: ❌ updateTravelResponses
- **WelcomeResponse**: ❌ updateWelcomeResponses
- **Prepproved**: ❌ searchPrepproved
- **Invoice**: ❌ listInvoices, ❌ getInvoice
- **Option**: ❌ listOptions, ❌ getOption
- **Question**: ❌ listQuestions, ❌ getQuestion
- **Transaction**: ❌ listTransactions, ❌ getTransaction
- **VirtualSessionCheckin**: ❌ getVirtualSessionCheckin
- **LineItems**: ❌ listLineItems
- **Pages**: ❌ listPages
- **RegEmails**: ❌ listRegEmails
- **TransactionType**: ❌ listTransactionTypes


### SeatingConcern
 
- **TablePlan**: ❌ listTableplans
- **Table**: ❌ listTables
- **Seat**: ❌ listSeats


### SelectConcern

- ❌ download
- **Applicant**: ❌ listApplicants, ❌ getApplicant
- **Submission**: ❌ listSubmissions, ❌ getSubmission


### SocialConcern

- **Status**: ❌ changeStatus
- **Meeting**: ❌ listMeetings, ❌ getMeeting, ❌ createMeeting, ❌ cancelMeeting, ❌ modifyMeeting
- **AttendeeToMeeting**: ❌ addAttendeeToMeeting
- **MeetingType**: ❌ listMeetingTypes


### SurveyConcern

- **Survey**: ❌ listSurveys
- **SurveyQuestions**: ❌ listSurveyQuestions
- **SurveyResponse**: ❌ listSurveyResponses, ❌ getSurveyResponse


### SystemConcern

- ✅ authorize
- ❌ resetSession
- ❌ listReports
- ❌ getReport
- ✅ listAvailableFunctions

### Legend

- [✅] Feature Complete
- [❌] Not Implemented
- [-] Not Applicable


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
