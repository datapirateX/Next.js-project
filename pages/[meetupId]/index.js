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

export async function getStaticPaths() {
    
}

export async function getStaticProps(context) {
    
    const meetupId = context.params.meetupId;
    return {
        Props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
                id: meetupId,
                title: 'First Meetup',
                address: 'Some Street 5, Some city',
                description: 'This is a first meetup',

            },
        },
    };
}

export default MeetupDetails;