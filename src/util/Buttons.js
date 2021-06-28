import { Link } from "react-router-dom";

export const PrimaryBtn = (props) => (
  <Link
    to={props.link}
    onClick={props.onClick}
    className="modal-form-submit-button"
  >
    {props.children}
  </Link>
);
