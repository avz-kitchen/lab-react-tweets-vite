import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";
function Tweet(props) {
  return (
    <div className="tweet">
      <div className="body">
        <div className="top">
          <ProfileImage image={props.tweet.image} />
          <Timestamp time={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
      </div>

      <Actions action={props.tweet.action} />
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
