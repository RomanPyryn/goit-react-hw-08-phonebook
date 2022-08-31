import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter';
import { FilterBox, FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterBox>
      <FilterLabel htmlFor="">
        <FilterInput type="text" value={filter} onChange={changeFilter} />
        Find contacts by name
      </FilterLabel>
    </FilterBox>
  );
};

export default Filter;
