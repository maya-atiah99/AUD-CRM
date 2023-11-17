import React, { useState, useEffect } from "react";
import Select from "react-select";
import {
  useFetchAcademicTerms,
  useFetchDropDownFromParent,
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
  isYear,
  isMonth,
  parent,
}) => {
  const { data: options, refetch: refetchTypes } = useFetchDropDownTypes(
    type || null
  );
  const { data: academicOptions, refetch: refetchTerms } =
    useFetchAcademicTerms();
  const { data: parentOptions, refetch: refetchParentOptions } =
    useFetchDropDownFromParent(type, parent);

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from(
    { length: 11 },
    (_, index) => currentYear + index
  );

  const monthOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

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

  const formattedYear = yearOptions.map((year) => ({
    value: year,
    label: year.toString(),
  }));
  const formattedMonth = monthOptions.map((month, index) => ({
    value: index + 1,
    label: month,
  }));

  const formattedParentOptions = parentOptions?.data
    ? parentOptions?.data?.map((option) => ({
        value: option.value,
        label: option.text,
      }))
    : [];

  useEffect(() => {
    if (type) {
      refetchTypes();
    }
  }, [type, refetchTypes]);

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
        borderColor: "blue",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "transparent",
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
  };

  const optionsSelected = isAcademic
  ? formattedAcademicOptions
  : isYear
  ? formattedYear
  : isMonth
  ? formattedMonth
  : parent
  ? formattedParentOptions
  : formattedOptions;
  
  return (
    <div className='textBox-container' style={{ width: width }}>
      <label htmlFor={label}>
        {label}
        {required && <span className='required'>*</span>}
      </label>
      <Select
        options={
          isAcademic
            ? formattedAcademicOptions
            : isYear
            ? formattedYear
            : isMonth
            ? formattedMonth
            : parent
            ? formattedParentOptions
            : formattedOptions
        }
        required={required}
        styles={customStyles}
        components={{
          DropdownIndicator: CustomDropdownArrow,
        }}
        value={
          optionsSelected.find((option) => option.value === value) || null
        }
        onChange={(selectedOption) => {
          onChange(name, selectedOption.value);
        }}
      />
    </div>
  );
};

export default DropDown;
