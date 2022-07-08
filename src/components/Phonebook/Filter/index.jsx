import PropTypes from 'prop-types';

const Filter = ({ inputName, value, onChange }) => (
    <label htmlFor="">
        {inputName}
        <input type="text" value={value} onChange={onChange}  />    
    </label>
);

Filter.propTypes = {
    onChange: PropTypes.func,
    inputName: PropTypes.string,
    value: PropTypes.string,
};

export default Filter;