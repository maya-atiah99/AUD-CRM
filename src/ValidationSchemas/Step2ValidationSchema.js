import * as Yup from "yup";

const getValidationSchemaStep2 = (applicationStart, applingAs) => {
  let baseSchema = {
    CurrentUniversityCountry: Yup.string().notRequired("Country is required"),
    SchoolCountry: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("SchoolCountry is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    DiplomaType: Yup.string(),
    GraduationYear: Yup.date(),
    ListAdvancedCources: Yup.string().notRequired(),
    DiplomaFile: Yup.mixed().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("DiplomaFile is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    ActivitiesNotEnrolled: Yup.string().notRequired(),
    CurrentUniversityCountry2: Yup.string().notRequired(),
    SchoolCountry2: Yup.string().notRequired(),
    applicantFiles: Yup.array().of(
      Yup.object().shape({
        testType: Yup.string().notRequired(),
        academicDocument: Yup.mixed().when("testType", {
          is: (testType) => !!testType,
          then: (schema) => schema.required("Academic document is required"),
          otherwise: (schema) => schema.notRequired(),
        }),
        dateTaken: Yup.date().when("testType", {
          is: (testType) => !!testType,
          then: (schema) => schema.required("Date taken is required"),
          otherwise: (schema) => schema.notRequired(),
        }),
        registrationNumber: Yup.number().when("testType", {
          is: (testType) => !!testType,
          then: (schema) => schema.required("Registration number is required"),
          otherwise: (schema) => schema.notRequired(),
        }),
        totalScore: Yup.number().when("testType", {
          is: (testType) => !!testType,
          then: (schema) => schema.required("totalScore is required"),
          otherwise: (schema) => schema.notRequired(),
        }),
      })
    ),
    isSaved: Yup.boolean(),
    NextActiveStep: Yup.number(),
    PersonalStatement: Yup.string()
      .test("min-words", "Minimum 500 words are required", (value) => {
        if (!value) {
          return false;
        }
        const strippedStr = value.replace(/<[^>]*>/g, ""); 
        console.log("words", strippedStr.split(/\s+/).length);
        return strippedStr.split(/\s+/).length >= 500;
      })
      .required("PersonalStatement is required"), 
    EmploymentStatus: Yup.string(),
    EmploymentSector: Yup.string(),
    CompanyName: Yup.string(),
    JobTitle: Yup.string(),
    YearsOfExperience: Yup.number(),
    ReferanceTitle: Yup.string(),
    ReferanceName: Yup.string(),
    ReferanceEmail: Yup.string(),
    KnowTheReferance: Yup.string(),
    SendTheLetterRecomendation: Yup.boolean(),
    ReadAndUnderstand: Yup.boolean(),
    CV: Yup.mixed(),
    StudyBoardAdvisor: Yup.string(),
    RegistrarEmail: Yup.string(),
    RegistrarPhone: Yup.number(),
    SchoolState: Yup.string(),
  };

  // if (applingAs !== 0 && applingAs !== 7) {
  //   baseSchema.PersonalStatement = baseSchema.PersonalStatement.when(
  //     "isSaved",
  //     {
  //       is: (isSaved) => isSaved,
  //       then: (schema) =>
  //         schema
  //           .test("min-words", "Minimum 500 words are required", (value) => {
  //             if (!value) {
  //               return false;
  //             }
  //             const strippedStr = value.replace(/<[^>]*>/g, ''); // Fixed regex and variable name
  //             console.log("words", strippedStr.split(/\s+/).length); // Count words properly
  //             return strippedStr.split(/\s+/).length >= 500; // Check word count
  //           })
  //           .required("PersonalStatement is required"), // Moved required validation inside 'then'
  //       otherwise: (schema) => schema.notRequired(),
  //     }
  //   );
  // }
  //  else {
  //   baseSchema.PersonalStatement = baseSchema.PersonalStatement.notRequired();
  // }

  if (applicationStart !== "2" && applingAs !== 5 && applingAs !== 8) {
    baseSchema.GraduationYear = baseSchema.GraduationYear.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("GraduationYear is required"),
      otherwise: (schema) => schema.notRequired(),
    });
  } else {
    baseSchema.GraduationYear = baseSchema.GraduationYear.notRequired();
  }

  if (applicationStart === "2" && applingAs !== 7) {
    baseSchema.StudyBoardAdvisor = baseSchema.StudyBoardAdvisor.when(
      "isSaved",
      {
        is: (isSaved) => isSaved,
        then: (schema) => schema.required("StudyBoardAdvisor is required"),
        otherwise: (schema) => schema.notRequired(),
      }
    );
    baseSchema.RegistrarEmail = baseSchema.RegistrarEmail.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("RegistrarEmailis required"),
      otherwise: (schema) => schema.notRequired(),
    });
    baseSchema.RegistrarPhone = baseSchema.RegistrarPhone.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("RegistrarPhone is required"),
      otherwise: (schema) => schema.notRequired(),
    });
    baseSchema.DiplomaFile = baseSchema.DiplomaFile.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("DiplomaFile is required"),
      otherwise: (schema) => schema.notRequired(),
    });
  } else {
    baseSchema.StudyBoardAdvisor = baseSchema.StudyBoardAdvisor.notRequired();
    baseSchema.RegistrarEmail = baseSchema.RegistrarEmail.notRequired();
    baseSchema.RegistrarPhone = baseSchema.RegistrarPhone.notRequired();
    baseSchema.DiplomaFile = baseSchema.DiplomaFile.notRequired();
  }

  if (applingAs === 8) {
    baseSchema.SchoolState = baseSchema.SchoolState.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("State Academic is required"),
      otherwise: (schema) => schema.notRequired(),
    });

    baseSchema.CV = baseSchema.CV.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("CV is required"),
      otherwise: (schema) => schema.notRequired(),
    });

    baseSchema.ReferanceTitle = baseSchema.ReferanceTitle.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("ReferanceTitle is required"),
      otherwise: (schema) => schema.notRequired(),
    });
    baseSchema.ReferanceName = baseSchema.ReferanceName.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("ReferanceName is required"),
      otherwise: (schema) => schema.notRequired(),
    });
    baseSchema.ReferanceEmail = baseSchema.ReferanceEmail.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("ReferanceEmail is required"),
      otherwise: (schema) => schema.notRequired(),
    });
  } else {
    baseSchema.SchoolState = baseSchema.SchoolState.notRequired();
    baseSchema.CV = baseSchema.CV.notRequired();
    baseSchema.ReferanceTitle = baseSchema.ReferanceTitle.notRequired();
    baseSchema.ReferanceName = baseSchema.ReferanceName.notRequired();
    baseSchema.ReferanceEmail = baseSchema.ReferanceEmail.notRequired();
  }

  if (!(applicationStart === "0" && applingAs === 2)) {
    baseSchema.CurrentUniversityCountry =
      baseSchema.CurrentUniversityCountry.when("isSaved", {
        is: (isSaved) => isSaved,
        then: (schema) =>
          schema.required("CurrentUniversityCountry is required"),
        otherwise: (schema) => schema.notRequired(),
      });
    baseSchema.SchoolCountry = baseSchema.SchoolCountry.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("SchoolCountry is required"),
      otherwise: (schema) => schema.notRequired(),
    });
  } else {
    baseSchema.CurrentUniversityCountry =
      baseSchema.CurrentUniversityCountry.notRequired(
        "CurrentUniversityCountry Year is notRequired"
      );
    baseSchema.SchoolCountry = baseSchema.SchoolCountry.notRequired(
      "SchoolCountry Year is notRequired"
    );
  }

  if (
    !(applicationStart === "0" && applingAs === 2) &&
    (applicationStart !== "2" || applingAs !== 8)
  ) {
    baseSchema.DiplomaType = baseSchema.DiplomaType.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("DiplomaType is required"),
      otherwise: (schema) => schema.notRequired(),
    });
  } else {
    baseSchema.DiplomaType = baseSchema.DiplomaType.notRequired(
      "DiplomaType Year is required"
    );
  }

  if (applicationStart === "0" && applingAs === 1) {
    baseSchema.CurrentUniversityCountry2 =
      baseSchema.CurrentUniversityCountry2.when("isSaved", {
        is: (isSaved) => isSaved,
        then: (schema) =>
          schema.required("CurrentUniversityCountry2 is required"),
        otherwise: (schema) => schema.notRequired(),
      });
    baseSchema.SchoolCountry2 = baseSchema.SchoolCountry2.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("SchoolCountry2 is required"),
      otherwise: (schema) => schema.notRequired(),
    });
  } else {
    baseSchema.CurrentUniversityCountry2 =
      baseSchema.CurrentUniversityCountry2.notRequired(
        "CurrentUniversityCountry Year is required"
      );
    baseSchema.SchoolCountry2 = baseSchema.SchoolCountry2.notRequired(
      "SchoolCountry Year is required"
    );
  }

  if (applicationStart === "1") {
    baseSchema.EmploymentStatus = baseSchema.EmploymentStatus.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("EmploymentStatus is required"),
      otherwise: (schema) => schema.notRequired(),
    });

    baseSchema.EmploymentSector = baseSchema.EmploymentSector.when(
      ["isSaved", "EmploymentStatus"],
      {
        is: (isSaved, employmentStatus) =>
          isSaved &&
          employmentStatus !== "deb66f30-2473-40d7-8052-fbfff10041f0",
        then: (schema) => schema.required("EmploymentSector is required"),
        otherwise: (schema) => schema.notRequired(),
      }
    );

    baseSchema.CompanyName = baseSchema.CompanyName.when(
      ["isSaved", "EmploymentStatus"],
      {
        is: (isSaved, employmentStatus) =>
          isSaved &&
          employmentStatus !== "deb66f30-2473-40d7-8052-fbfff10041f0",
        then: (schema) => schema.required("CompanyName is required"),
        otherwise: (schema) => schema.notRequired(),
      }
    );

    baseSchema.JobTitle = baseSchema.JobTitle.when(
      ["isSaved", "EmploymentStatus"],
      {
        is: (isSaved, employmentStatus) =>
          isSaved &&
          employmentStatus !== "deb66f30-2473-40d7-8052-fbfff10041f0",
        then: (schema) => schema.required("JobTitle is required"),
        otherwise: (schema) => schema.notRequired(),
      }
    );

    baseSchema.YearsOfExperience = baseSchema.YearsOfExperience.when(
      ["isSaved", "EmploymentStatus"],
      {
        is: (isSaved, employmentStatus) =>
          isSaved &&
          employmentStatus !== "deb66f30-2473-40d7-8052-fbfff10041f0",
        then: (schema) => schema.required("YearsOfExperience is required"),
        otherwise: (schema) => schema.notRequired(),
      }
    );
    baseSchema.CV = baseSchema.CV.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("CV is required"),
      otherwise: (schema) => schema.notRequired(),
    });
  } else {
    baseSchema.EmploymentStatus = baseSchema.EmploymentStatus.notRequired();
    baseSchema.EmploymentSector = baseSchema.EmploymentSector.notRequired();
    baseSchema.CompanyName = baseSchema.CompanyName.notRequired();
    baseSchema.JobTitle = baseSchema.JobTitle.notRequired();
    baseSchema.YearsOfExperience = baseSchema.YearsOfExperience.notRequired();
    baseSchema.CV = baseSchema.CV.notRequired();
  }

  return Yup.object().shape(baseSchema);
};

export default getValidationSchemaStep2;
