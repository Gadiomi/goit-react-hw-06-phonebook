import { useDispatch, useSelector } from 'react-redux';
import css from '../../components/Filter/Filter.module.css';
import { getFilterValue, setFilter } from 'components/redux/FilterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  return (
    <>
      <p className={css.filter_text}>Find contacts by name</p>
      <label className={css.Filter_Todo}>
        <input
          type="text"
          className={css.filter_inp}
          value={filterValue}
          onChange={e => dispatch(setFilter(e.currentTarget.value))}
        />
      </label>
    </>
  );
};

export default Filter;
