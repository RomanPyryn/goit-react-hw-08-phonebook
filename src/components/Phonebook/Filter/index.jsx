
const Filter = ({ inputName, value, onChange }) => (
    <label htmlFor="">
        {inputName}
        <input type="text" value={value} onChange={onChange}  />    
    </label>
);

export default Filter;