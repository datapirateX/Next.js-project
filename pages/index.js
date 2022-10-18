import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg',
    address: 'Some address 5, 123334 Some City',
    description: 'This is a first meetup!'

  },
  {
    id: 'm2',
    title: 'A second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Melting_Toe_of_Athabasca_Glacier.jpg',
    address: 'Some address 5, 123334 Some City',
    description: 'This is a second meetup!'

  },

]

function HomePage() {
  return (
      <MeetupList meetups={DUMMY_MEETUPS} />
  );
}

export default HomePage;