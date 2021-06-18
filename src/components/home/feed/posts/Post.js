import React, { forwardRef, useState } from "react";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendIcon from "@material-ui/icons/Send";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import InputOption from "../form/InputOptions";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { db } from "../../../../firebase/firebase";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../features/userSlice";

const Post = forwardRef(({ id, name, description, message, photoUrl }, ref) => {
  const user = useSelector(selectUser);
  const [showOptions, setShow] = useState(false);

  const removePost = () => {
    if (name === user.displayName) {
      db.collection("posts").doc(id).delete();
    } else {
      alert("This post is not of you.");
    }
  };
  return (
    <div ref={ref} className="post">
      <div
        className={showOptions ? "post__dots hide__dots" : "post__dots"}
        onClick={() => setShow(!showOptions)}
      >
        <MoreHorizIcon />
        <div
          className={
            showOptions ? "post__dots-option" : "ost__dots-option hide"
          }
          onClick={removePost}
        >
          <HighlightOffIcon />
          <p>Delete This Post</p>
        </div>
      </div>
      <div className="post__header">
        <Avatar src={photoUrl} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
