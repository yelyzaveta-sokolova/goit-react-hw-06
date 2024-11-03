
import { useSelector } from "react-redux";
import { useMemo } from "react";

import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

const visibleContacts = useMemo(() => 
  contacts.filter(({ name }) =>
    name.toLowerCase().includes(nameFilter.toLowerCase())
  ), [contacts, nameFilter]);


  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;