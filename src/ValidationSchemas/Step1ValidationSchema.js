import * as Yup from "yup";

const getValidationSchemaStep1 = (applicationStart, applingAs) => {
  console.log("applicatisaaatart", applicationStart);
  const baseSchema = {
    isSaved: Yup.boolean(),
    TitleId: Yup.string().notRequired("TitleId is required"),
    FirstName: Yup.string()
      .max(50, "First Name must be at most 50 characters")
      .when("isSaved", {
        is: (isSaved) => isSaved,
        then: (schema) => schema.required("First Name is required"),
        otherwise: (schema) => schema.notRequired(),
      }),
    MiddleName: Yup.string()
      .max(50, "Middle Name must be at most 50 characters")
      .when("isSaved", {
        is: (isSaved) => isSaved,
        then: (schema) => schema.required("MiddleName is required"),
        otherwise: (schema) => schema.notRequired(),
      }),
    LastName: Yup.string()
      .max(50, "Last Name must be at most 50 characters")
      .when("isSaved", {
        is: (isSaved) => isSaved,
        then: (schema) => schema.required("LastName is required"),
        otherwise: (schema) => schema.notRequired(),
      }),
    Email: Yup.string()
      .email("Invalid Email")
      .when("isSaved", {
        is: (isSaved) => isSaved,
        then: (schema) => schema.required("Email is required"),
        otherwise: (schema) => schema.notRequired(),
      }),
    Nationality: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("Nationality is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    DOB: Yup.date().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("DOB is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    Gender: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("Gender is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    Mobile: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("Mobile is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    ApplicantTelephone: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("ApplicantTelephone is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    NextActiveStep: Yup.number(),
    SelectedTerm: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("SelectedTerm is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    ApplicationStart: Yup.number().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("ApplicationStart is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    ApplingAs: Yup.number().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("ApplingAs is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    ProgramOfInterest: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("ProgramOfInterest is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    CurrentPlaceOfStudy: Yup.string(),
    GuardianRelation1: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("GuardianRelation1 is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    GuardianName1: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("GuardianName1 is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    GuardianMobile1: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("GuardianMobile1 is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    GuardianEmail1: Yup.string()
      .email("Invalid Email")
      .when("isSaved", {
        is: (isSaved) => isSaved,
        then: (schema) => schema.required("GuardianEmail1 is required"),
        otherwise: (schema) => schema.notRequired(),
      }),
    GuardianRelation2: Yup.string(),
    GuardianName2: Yup.string(),
    GuardianMobile2: Yup.string(),
    GuardianEmail2: Yup.string().email("Invalid Email"),
    AuthorizeToReleaseRecord: Yup.boolean().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) =>
        schema
          .required("AuthorizeToReleaseRecord is required")
          .oneOf([true], "This field is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    Authorize_GuardianName: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("Authorize_GuardianName is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    Authorize_GuardianRelation: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) =>
        schema.required("Authorize_GuardianRelation is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    Authorize_Address: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("Authorize_Address is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    Authorize_Telephone: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("Authorize_Telephone is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    Address1: Yup.string()
      .max(500)
      .when("isSaved", {
        is: (isSaved) => isSaved,
        then: (schema) => schema.required("Address1 is required"),
        otherwise: (schema) => schema.notRequired(),
      }),
    Country: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("Country is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    CityState: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("CityState is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    Pobox: Yup.string().max(50),
    ZipCode: Yup.string().max(5).min(5),
    LegacyApplicant: Yup.boolean(),
    LegacyFatherName: Yup.string().max(10),
    LegacyFatherProgram: Yup.string(),
    LegacyFatherGraduationYear: Yup.number(),
    LegacyFatherMobile: Yup.string(),
    LegacyMotherName: Yup.string().max(10),
    LegacyMotherProgram: Yup.string(),
    LegacyMotherGraduationYear: Yup.number(),
    LegacyMotherMobile: Yup.string(),
    PassportNumber: Yup.string().max(10),
    EmiratesId: Yup.string().max(10).min(10),
    Passport_File: Yup.mixed(),
    EmiratesId_File: Yup.mixed(),
    FamilyBook_File: Yup.mixed(),
    EtibharaNo: Yup.string().max(10),
    FamilyBookNumber: Yup.string().max(10).min(10),
    FamilyNo: Yup.string().max(10).min(10),
    CityNo: Yup.string().max(10).min(10),
    Visiting_LevelOfStudy: Yup.string(),
    StudentVisa: Yup.boolean(),
    UAE_GCC_Resident: Yup.boolean(),
    OnHouseCampus: Yup.boolean(),
    MiddleEasternStudies: Yup.boolean(),
    SemestersAtAUD: Yup.number(),
  };

  if (applicationStart === "2") {
    baseSchema.Visiting_LevelOfStudy = baseSchema.Visiting_LevelOfStudy.when(
      "isSaved",
      {
        is: (isSaved) => isSaved,
        then: (schema) => schema.required("Visiting_LevelOfStudy is required"),
        otherwise: (schema) => schema.notRequired(),
      }
    );
    baseSchema.StudentVisa = baseSchema.StudentVisa.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("StudentVisa is required"),
      otherwise: (schema) => schema.notRequired(),
    });
    baseSchema.UAE_GCC_Resident = baseSchema.UAE_GCC_Resident.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("UAE_GCC_Resident is required"),
      otherwise: (schema) => schema.notRequired(),
    });
    baseSchema.OnHouseCampus = baseSchema.OnHouseCampus.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("OnHouseCampus is required"),
      otherwise: (schema) => schema.notRequired(),
    });
    baseSchema.MiddleEasternStudies = baseSchema.MiddleEasternStudies.when(
      "isSaved",
      {
        is: (isSaved) => isSaved,
        then: (schema) => schema.required("MiddleEasternStudies is required"),
        otherwise: (schema) => schema.notRequired(),
      }
    );
    baseSchema.SemestersAtAUD = baseSchema.SemestersAtAUD.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("SemestersAtAUD is required"),
      otherwise: (schema) => schema.notRequired(),
    });
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
  if (applingAs === 1 || applingAs === 5) {
    baseSchema.CurrentPlaceOfStudy = baseSchema.CurrentPlaceOfStudy.when(
      "isSaved",
      {
        is: (isSaved) => isSaved,
        then: (schema) => schema.required("CurrentPlaceOfStudy is required"),
        otherwise: (schema) => schema.notRequired(),
      }
    );
  } else {
    baseSchema.CurrentPlaceOfStudy = baseSchema.CurrentPlaceOfStudy.notRequired(
      "Current Place Of study is required"
    );
  }

  return Yup.object().shape(baseSchema);
};
export default getValidationSchemaStep1;
