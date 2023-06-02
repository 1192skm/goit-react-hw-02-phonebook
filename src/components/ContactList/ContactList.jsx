import css from "./ContactList.module.css";
import PropTypes  from "prop-types";

export function ContactList({ findContacts, onDeleteContact }) {
  return (
    <ul className={css.list}>
      {findContacts
        .sort((firstContact, secondContact) =>
          firstContact.name.localeCompare(secondContact.name)
        )
        .map(findContact => (
          <li className={css.listitem} key={findContact.id}>
            <p className={css.listcontact}>
              {findContact.name}: {findContact.number}
            </p>
            <button
              className={css.btn}
              onClick={() => onDeleteContact(findContact.id)}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  findContacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};