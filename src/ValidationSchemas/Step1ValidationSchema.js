import * as Yup from "yup";

const getValidationSchemaStep1 = (applicationStart, applingAs) => {
  const baseSchema = {
    TitleId: Yup.string().notRequired("TitleId is required"),
    FirstName: Yup.string().max(50, "First Name must be at most 50 characters"),
    MiddleName: Yup.string().max(50, "Middle Name must be at most 50 characters").required("Middle Name is required"),
    LastName: Yup.string().max(50, "Last Name must be at most 50 characters"),
    Email: Yup.string().email("Invalid Email").required("Email is required"),
    Nationality: Yup.string().required("Nationality is required"),
    DOB: Yup.date().required("Date of Birth is required"),
    Gender: Yup.string().required("Gender is required"),
    Mobile: Yup.string().required("Mobile is required"),
    ApplicantTelephone: Yup.string().required(
      "Applicant Telephone is required"
    ),
    isSaved:Yup.boolean(),
    NextActiveStep:Yup.number(),
    SelectedTerm: Yup.string().required("Selected Term is required"),
    ApplicationStart: Yup.number().required("Application Start is required"),
    ApplingAs: Yup.number().required("Applying as  is required"),
    ProgramOfInterest: Yup.string().required("Program Of Interest is required"),
    CurrentPlaceOfStudy: Yup.string(),
    GuardianRelation1: Yup.string().required("GuardianRelation1 is required"),
    GuardianName1: Yup.string().required("GuardianName1 is required"),
    GuardianMobile1: Yup.string().required("GuardianMobile1 is required"),
    GuardianEmail1: Yup.string()
      .email("Invalid Email")
      .required("GuardianEmail1 is required"),
    GuardianRelation2: Yup.string(),
    GuardianName2: Yup.string(),
    GuardianMobile2: Yup.string(),
    GuardianEmail2: Yup.string().email("Invalid Email"),
    AuthorizeToReleaseRecord: Yup.boolean()
      .required()
      .oneOf([true], "This field is required"),
    Authorize_GuardianName: Yup.string().required(),
    Authorize_GuardianRelation: Yup.string().required(),
    Authorize_Address: Yup.string().required(),
    Authorize_Telephone: Yup.string().required(),
    Address1: Yup.string().max(500).required(),
    Country: Yup.string().required("Country is required"),
    CityState: Yup.string().required("City/State is required"),
    Pobox: Yup.string().max(50),
    ZipCode: Yup.string().max(50),
    LegacyApplicant: Yup.boolean(),
    LegacyFatherName: Yup.string(),
    LegacyFatherProgram: Yup.string(),
    LegacyFatherGraduationYear: Yup.number(),
    LegacyFatherMobile: Yup.string(),
    LegacyMotherName: Yup.string(),
    LegacyMotherProgram: Yup.string(),
    LegacyMotherGraduationYear: Yup.number(),
    LegacyMotherMobile: Yup.string(),
    PassportNumber: Yup.string().max(10),
    EmiratesId: Yup.string().max(10),
    Passport_File: Yup.string(),
    EmiratesId_File: Yup.string(),
    FamilyBook_File: Yup.string(),
    EtibharaNo: Yup.string(),
    FamilyBookNumber: Yup.string(),
    FamilyNo: Yup.string().max(10),
    CityNo: Yup.string(),
    Visiting_LevelOfStudy: Yup.string(),
    StudentVisa: Yup.boolean(),
    UAE_GCC_Resident: Yup.boolean(),
    OnHouseCampus: Yup.boolean(),
    MiddleEasternStudies: Yup.boolean(),
    SemestersAtAUD: Yup.number(),
  };

  if (applicationStart === "2") {
    baseSchema.Visiting_LevelOfStudy =
      baseSchema.Visiting_LevelOfStudy.required(
        ".Visiting_LevelOfStudy  is required"
      );
    baseSchema.StudentVisa = baseSchema.StudentVisa.required(
      "StudentVisa  is required"
    );
    baseSchema.UAE_GCC_Resident = baseSchema.UAE_GCC_Resident.required(
      "UAE_GCC_Resident  is required"
    );
    baseSchema.OnHouseCampus = baseSchema.OnHouseCampus.required(
      "OnHouseCampus  is required"
    );
    baseSchema.MiddleEasternStudies = baseSchema.MiddleEasternStudies.required(
      "MiddleEasternStudies"
    );
    baseSchema.SemestersAtAUD = baseSchema.SemestersAtAUD.required(
      "SemestersAtAUD  is required"
    );
  } else {
    baseSchema.Visiting_LevelOfStudy =
      baseSchema.Visiting_LevelOfStudy.notRequired();
    baseSchema.StudentVisa = baseSchema.StudentVisa.notRequired();
    baseSchema.UAE_GCC_Resident = baseSchema.UAE_GCC_Resident.notRequired();
    baseSchema.OnHouseCampus = baseSchema.OnHouseCampus.notRequired();
    baseSchema.MiddleEasternStudies =
      baseSchema.MiddleEasternStudies.notRequired();
    baseSchema.SemestersAtAUD = baseSchema.SemestersAtAUD.notRequired();
  }
  if (applingAs === 1 || applingAs ===5) {
    baseSchema.CurrentPlaceOfStudy = baseSchema.CurrentPlaceOfStudy.required(
      "Current Place Of study is required"
    );
  }else{
    baseSchema.CurrentPlaceOfStudy = baseSchema.CurrentPlaceOfStudy.notRequired(
      "Current Place Of study is required"
    );
  }

  
  return Yup.object().shape(baseSchema);
};
export default getValidationSchemaStep1;
