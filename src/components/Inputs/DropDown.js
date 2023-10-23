import React, { useState } from "react";
import Select from "react-select";
const DropDown = ({
  label,
  required,
  value,
  setValue,
  data,
  placeholder,
  width,
}) => {
  // const [selectedOption, setSelectedOption] = useState(null);
  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];

  const CustomDropdownArrow = () => {
    return (
      <div className='custom-dropdown-arrow'>
        <img src='/images/customDropdown.svg' />
      </div>
    );
  };
  const customStyles = {
    dropdownIndicator: (base) => ({
      ...base,
      padding: "4px",
    }),
    // You can also adjust other styles as needed.
  };

  return (
    <div className='textBox-container' style={{ width: width }}>
      <label htmlFor={label}>
        {label}
        {required && <span className='required'>*</span>}
      </label>
      <Select
        // defaultValue={selectedOption}
        // onChange={setSelectedOption}
        options={data}
        required={required}
        styles={customStyles}
        components={{
          IndicatorSeparator: CustomDropdownArrow,
        }}
      />
    </div>
  );
};
export default DropDown;
