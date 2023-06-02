import css from './Filter.module.css';
import PropTypes from 'prop-types';

export function Filter({ onFilter, state }) {
  return (
    <label className={css.formlabel}>
      <span className={css.formtitle}>Find contacts by name:</span>
      <input
        className={css.forminput}
        type="text"
        name="filter"
        value={state}
        onChange={onFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </label>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func,
  state: PropTypes.string,
};
