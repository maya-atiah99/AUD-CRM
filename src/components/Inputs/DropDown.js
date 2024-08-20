import React, { useEffect } from "react";
import Select from "react-select";
import {
  useFetchAcademicTerms,
  useFetchDropDownFromParent,
  useFetchDropDownTypes,
  useFetchFieldOfInterestByApplicationStart,
} from "../../Hooks/DropDownTypes";

const CustomDropdownArrow = () => {
  return (
    <div className='custom-dropdown-arrow'>
      <img src='/images/customDropdown.svg' />
    </div>
  );
};

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
  data,
  bolean,
  applicatioStart,
  disabled,
}) => {
  const { data: options, refetch: refetchTypes } = useFetchDropDownTypes(
    type || null
  );
  const { data: academicOptions, refetch: refetchTerms } =
    useFetchAcademicTerms();
  const { data: parentOptions, refetch: refetchParentOptions } =
    useFetchDropDownFromParent(type, parent);

  const { data: fieldOfInterest, refetch: refetchFieldOfInterest } =
    useFetchFieldOfInterestByApplicationStart(applicatioStart);

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

  console.log("vasdjvlsvhasdv",academicOptions)
  const formattedOptions = options?.data
    ? options?.data?.map((option) => ({
        value: option.ddid,
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
        value: option.ddid,
        label: option.text,
      }))
    : [];

  const boleanOptions = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ];
  const formattedFieldOfInterestOptions = fieldOfInterest?.data
    ? fieldOfInterest?.data.map((option) => ({
        value: option.value,
        label: option.text,
      }))
    : [];

  const handleOnChange = (name, selectedOption) => {
    onChange(name, selectedOption.value);
  };

  useEffect(() => {
    if (type) {
      refetchTypes();
    }
  }, [type, refetchTypes]);

  const customStyles = {
    dropdownIndicator: (base) => ({
      ...base,
      padding: "4px",
    }),
    control: (base, state) => ({
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
    singleValue: (base, state) => ({
      ...base,
      fontWeight: "500",
      color: "#1B224C",
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999,
    }),
  };

  const optionsSelected = fieldOfInterest
    ? formattedFieldOfInterestOptions
    : bolean
    ? boleanOptions
    : isAcademic
    ? formattedAcademicOptions
    : isYear
    ? formattedYear
    : isMonth
    ? formattedMonth
    : parent
    ? formattedParentOptions
    : data
    ? data
    : formattedOptions;

  return (
    <div
      className='textBox-container'
      style={{ width: width, cursor: disabled ? "not-allowed" : "pointer" }}
    >
      <label htmlFor={label}>
        {label}
        {required && <span className='required'>*</span>}
      </label>
      <Select
        options={optionsSelected}
        isDisabled={disabled}
        styles={customStyles}
        maxMenuHeight={140}
        components={{
          DropdownIndicator: CustomDropdownArrow,
        }}
        value={optionsSelected.find((option) => option.value === value) || null}
        onChange={(selectedOption) => handleOnChange(name, selectedOption)}
        menuPortalTarget={document.body}
      />
    </div>
  );
};

export default DropDown;
