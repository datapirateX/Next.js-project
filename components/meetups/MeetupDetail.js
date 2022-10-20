import { Fragment } from "react";
import classes from './MeetupDetail.module.css';
import MeetupDetails from "../../pages/[meetupId]";

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>A First Meetup</h1>
      <address>Some Street 5, Some City</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
