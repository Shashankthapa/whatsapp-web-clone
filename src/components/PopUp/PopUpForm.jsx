import "./PopUp.css";
import Form from "./Form";
import Styles from "../Profile/profile.module.css"

const PopUpForm = (prop) => {
  return <div className={Styles.fadeInMain}>{prop.className != "" ? <Form className={prop.className} /> : ""}</div>;
};

export default PopUpForm;
