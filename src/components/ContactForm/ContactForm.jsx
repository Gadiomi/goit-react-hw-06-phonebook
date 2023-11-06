import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import css from '../../components/ContactForm/ContactForm.module.css';
import { addContact } from 'components/redux/ContactListSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const newObj = {
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    dispatch(addContact(newObj));

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className={css.lable}>
          Name
          <input
            className={css.contact_inp}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className="lable">
          Number
          <input
            className={css.contact_inp}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.sabmit_contact} type="sabmit">
          add contact
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
