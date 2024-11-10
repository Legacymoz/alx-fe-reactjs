import { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = (props) => {
    const userData = useContext(UserContext);
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio} </p>
    </div>
  );
};
export default UserProfile;
