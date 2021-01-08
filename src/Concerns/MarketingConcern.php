<?php

namespace FFNLabs\AventriConnect\Concerns;

trait MarketingConcern {
    public function listMarketingMails() {}
    public function getMarketingMail() {}
    public function updateMarketingMail() {}
    public function cloneMarketingMail() {}
    public function listMailinglists() {}
    public function getMailinglist() {}
    public function createMailinglist() {}
    public function updateMailinglist() {}
    public function listSubscribers() {}
    public function getSubscriber() {}
    public function createSubscriber() {}
    public function updateSubscriber() {}
    public function cancelMarketingBlast() {}
    public function scheduleMarketingBlast() {}
    public function listBlastResults() {}
    public function listBouncebackRecipients() {}
    public function listUnsubscribedRecipients() {}
}
