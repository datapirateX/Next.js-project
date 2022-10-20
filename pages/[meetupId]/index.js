import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
    <MeetupDetail image='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png'
    title='First Meetup'
    address='Some Street 5, Some City'
    description='The meetup description'
    />
    );
}

export default MeetupDetails;