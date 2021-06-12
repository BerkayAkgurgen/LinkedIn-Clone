import React from "react";
import { Avatar } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOptions from "./InputOptions";

function FeedBar() {
  return (
    <div className="feed">
      <div className="feed__input-container">
        <Avatar
          className="feed__avatar"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQEW7Q3xbjXniA/profile-displayphoto-shrink_100_100/0/1619898269205?e=1628726400&v=beta&t=FWxqya9uiYPnOSK0AWcuQpdvdHNYefUZLvKOd-WbXfk"
        />
        <div className="feed__input">
          <form>
            <input type="text" placeholder="Start a post" />
            <button type="submit">Post</button>
          </form>
        </div>
        <div className="feed__input-options">
          <InputOptions title="Photo" Icon={ImageIcon} color="#70b5f9" />
          <InputOptions
            title="Video"
            Icon={SubscriptionsIcon}
            color="#7fc15e"
          />
          <InputOptions title="Event" Icon={EventNoteIcon} color="#e7a33e" />
          <InputOptions
            title="Write article"
            Icon={CalendarViewDayIcon}
            color="#f5987e"
          />
        </div>
      </div>
    </div>
  );
}

export default FeedBar;
