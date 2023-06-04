import { Component } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.formlabel}>
          <span className={css.formtitle}>Name</span>
          <input
            className={css.forminput}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.formlabel}>
          <span className={css.formtitle}>Number</span>
          <input
            className={css.forminput}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

// ====================================================Формик======================================================
// import { Component } from 'react';
// import css from './ContactForm.module.css';
// import PropTypes from 'prop-types';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { object, string, number } from 'yup';

// let schema = object({
//   name: string().required(),
//   number: number().required().positive().integer(),
// });

// export class ContactForm extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   handleSubmit = (values, { resetForm }) => {
//     this.props.onSubmit(values);
//     resetForm();
//   };
//   render() {
//     return (
//       <Formik
//         initialValues={{
//           name: '',
//           number: '',
//         }}
//         validationSchema={schema}
//         onSubmit={this.handleSubmit}
//       >
//         <Form className={css.Form}>
//           <label className={css.formlabel}>
//             <span className={css.formtitle}>Name</span>
//             <Field
//               className={css.forminput}
//               type="text"
//               name="name"
//               // value="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//             <ErrorMessage name="name" />
//           </label>
//           <label className={css.formlabel}>
//             <span className={css.formtitle}>Number</span>
//             <Field
//               className={css.forminput}
//               type="tel"
//               name="number"
//               // value="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//           <ErrorMessage name="number" />
//           <button className={css.btn} type="submit">
//             Add contact
//           </button>
//         </Form>
//       </Formik>
//     );
//   }
// }
