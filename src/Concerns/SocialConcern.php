<?php

namespace FFNLabs\AventriConnect\Concerns;

trait SocialConcern {
    public function changeStatus() {}
    public function listMeetings() {}
    public function getMeeting() {}
    public function createMeeting() {}
    public function cancelMeeting() {}
    public function modifyMeeting() {}
    public function addAttendeeToMeeting() {}
    public function listMeetingTypes() {}
}
