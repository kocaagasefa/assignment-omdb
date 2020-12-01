import { Alert } from "react-bootstrap";

const Message = ({ text, type = "warning" }) => {
  return <Alert variant={type}>{text}</Alert>;
};

export default Message;
