import * as Yup from "yup";

const getValidationSchemaStep2 = (applicationStart, applingAs) => {
  let baseSchema = {
    CurrentUniversityCountry: Yup.string().notRequired("Country is required"),
    SchoolCountry: Yup.string().required("University Name is required"),
    DiplomaType: Yup.string().required("High school diploma is required"),
    GraduationYear: Yup.date(),
    ListAdvancedCources: Yup.string().notRequired(),
    DiplomaFile: Yup.mixed().required(),
    ActivitiesNotEnrolled: Yup.string().notRequired(),
    CurrentUniversityCountry2: Yup.string().notRequired(),
    SchoolCountry2: Yup.string().notRequired(),
    applicantFiles: Yup.array().of(
      Yup.object().shape({
        testType: Yup.string().required("Chosen test is required"),
        academicDocument: Yup.mixed().required("Academic document is required"),
        dateTaken: Yup.date().required("Date taken is required"),
        registrationNumber: Yup.number().required(
          "Registration number is required"
        ),
        totalScore: Yup.number().required("Total score is required"),
      })
    ),
    isSaved: Yup.boolean(),
    NextActiveStep: Yup.number(),
    PersonalStatement: Yup.string().min(500).required(),
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
    baseSchema.GraduationYear = baseSchema.GraduationYear.required(
      "Graduation Year is required"
    );
  } else {
    baseSchema.GraduationYear = baseSchema.GraduationYear.notRequired();
  }

  if (!(applicationStart === "0" && applingAs === 2)) {
    baseSchema.CurrentUniversityCountry =
      baseSchema.CurrentUniversityCountry.required(
        "CurrentUniversityCountry Year is required"
      );
    baseSchema.SchoolCountry = baseSchema.SchoolCountry.required(
      "SchoolCountry Year is required"
    );
    baseSchema.DiplomaType = baseSchema.DiplomaType.required(
      "DiplomaType Year is required"
    );
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
      baseSchema.CurrentUniversityCountry2.required(
        "CurrentUniversityCountry Year is required"
      );
    baseSchema.SchoolCountry2 = baseSchema.SchoolCountry2.required(
      "SchoolCountry Year is required"
    );
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
    baseSchema.EmploymentStatus = baseSchema.EmploymentStatus.required(
      "Employment Status is required"
    );
    baseSchema.EmploymentSector = baseSchema.EmploymentSector.required(
      "Employment Sector is required"
    );
    baseSchema.CompanyName = baseSchema.CompanyName.required(
      "Company Name is required"
    );
    baseSchema.JobTitle = baseSchema.JobTitle.required("Job Title is required");
    baseSchema.YearsOfExperience = baseSchema.YearsOfExperience.required(
      "Years of Experience is required"
    );
    baseSchema.CV = baseSchema.CV.required("CV is required");
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
