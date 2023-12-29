import * as Yup from "yup";

const getValidationSchemaStep2 = (applicationStart, applingAs) => {
  let baseSchema = {
    CurrentUniversityCountry: Yup.string().notRequired("Country is required"),
    SchoolCountry: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("SchoolCountry is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    DiplomaType: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("DiplomaType is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
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
    PersonalStatement: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) =>
        schema
          .test("min-words", "Minimum 500 words are required", (value) => {
            if (!value) {
              return false;
            }
            const words = value.trim().split("").length;
            console.log('worddddsssssssssssssss',words)
            return words >= 500;
          })
          .required("PersonalStatement is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
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
  };

  if (applicationStart !== "2" && applingAs !== 5) {
    baseSchema.GraduationYear = baseSchema.GraduationYear.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("GraduationYear is required"),
      otherwise: (schema) => schema.notRequired(),
    });
  } else {
    baseSchema.GraduationYear = baseSchema.GraduationYear.notRequired();
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
    baseSchema.DiplomaType = baseSchema.DiplomaType.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("DiplomaType is required"),
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
    baseSchema.EmploymentSector = baseSchema.EmploymentSector.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("EmploymentSector is required"),
      otherwise: (schema) => schema.notRequired(),
    });
    baseSchema.CompanyName = baseSchema.CompanyName.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("CompanyName is required"),
      otherwise: (schema) => schema.notRequired(),
    });
    baseSchema.JobTitle = baseSchema.JobTitle.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("JobTitle is required"),
      otherwise: (schema) => schema.notRequired(),
    });
    baseSchema.YearsOfExperience = baseSchema.YearsOfExperience.when(
      "isSaved",
      {
        is: (isSaved) => isSaved,
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
