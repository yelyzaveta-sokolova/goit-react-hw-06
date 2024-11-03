import { useDispatch } from "react-redux";

import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.contact}>
      <div>
        <div className={s.contactDetail}>
          <img
            src="https://www.svgrepo.com/show/483464/person.svg"
            alt="person"
            width="16px"
            height="16px"
          />
          <p>{name}</p>
        </div>
        <div className={s.contactDetail}>
          <img
            src="https://www.svgrepo.com/show/535565/phone.svg"
            alt="phone"
            width="16px"
            height="16px"
          />
          <p>{number}</p>
        </div>
      </div>
      <button className={s.contactBtn}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;