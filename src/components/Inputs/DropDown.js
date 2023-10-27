import React, { useState, useEffect } from "react";
import Select from "react-select";
import {
  useFetchAcademicTerms,
  useFetchDropDownTypes,
} from "../../Hooks/DropDownTypes";

const DropDown = ({
  label,
  required,
  value,
  onChange,
  width,
  type,
  isAcademic,
  name,
  errors,
  touched,
  props,
}) => {
  const [selectedOption, setSelectedOption] = useState(value);

  const { data: options, refetch: refetchTypes } = useFetchDropDownTypes(
    type || null
  );
  const { data: academicOptions, refetch: refetchTerms } =
    useFetchAcademicTerms();

  const formattedOptions = options?.data
    ? options?.data?.map((option) => ({
        value: option.value,
        label: option.text,
      }))
    : [];
  const formattedAcademicOptions = academicOptions
    ? academicOptions?.data?.map((term) => ({
        value: term.academicTermId,
        label: term.termName,
      }))
    : [];

  useEffect(() => {
    refetchTypes();
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
      control: (base) => ({
        ...base,
        border: errors && touched ? "1px solid #F3223C" : "",
        "&:focus": {
          borderColor: "blue", // Change the border color when focused
        },
      }),
    
  };
  return (
    <div className='textBox-container' style={{ width: width }}>
      <label htmlFor={label} >
        {label}
        {required && <span className='required'>*</span>}
      </label>
      <Select
        options={isAcademic ? formattedAcademicOptions : formattedOptions}
        required={required}
        styles={customStyles}
        components={{
          IndicatorSeparator: CustomDropdownArrow,
        }}
        value={formattedOptions.find((option) => option.value === value)}
        onChange={(selectedOption) => {
          onChange(name, selectedOption.value);
        }}
      />
    </div>
  );
};

export default DropDown;
