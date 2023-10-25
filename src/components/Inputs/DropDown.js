import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useFetchDropDownTypes } from "../../Hooks/DropDownTypes";

const DropDown = ({
  label,
  required,
  value,
  setValue,
  placeholder,
  width,
  type,
}) => {
  // const [selectedOption, setSelectedOption] = useState(null);
  const { data: options, refetch } = useFetchDropDownTypes(type || null);

  const formattedOptions = options?.data
    ? options?.data?.map((option) => ({
        value: option.value,
        label: option.text,
      }))
    : [];

  useEffect(() => {
    refetch();
  }, [type]);

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
  };

  return (
    <div className='textBox-container' style={{ width: width }}>
      <label htmlFor={label}>
        {label}
        {required && <span className='required'>*</span>}
      </label>
      <Select
        options={formattedOptions}
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
