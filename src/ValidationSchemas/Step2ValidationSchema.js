import * as Yup from "yup";

const getValidationSchemaStep2 = (applicationStart, applingAs) => {

  let baseSchema = {
    CurrentUniversityCountry: Yup.string().notRequired("Country is required"),
    SchoolCountry: Yup.string().notRequired("University Name is required"),
    DiplomaType: Yup.string().notRequired("High school diploma is required"),
    GraduationYear: Yup.date().notRequired(),
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
    PersonalStatement: Yup.mixed(),
    applingAs: Yup.string().notRequired(),
  };

  if (applicationStart !== "2") {
    baseSchema.GraduationYear = baseSchema.GraduationYear.required(
      "Graduation Year is required"
    );
  } else {
    baseSchema.GraduationYear = baseSchema.GraduationYear.notRequired();
  }

  if (!(applicationStart === "0" && applingAs === "2")) {
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

  if (
    (applicationStart === "0" && applingAs === "1") ||
    (applicationStart === "1" && applingAs === "1")
  ) {
    baseSchema.CurrentUniversityCountry2 =
      baseSchema.CurrentUniversityCountry2.required(
        "CurrentUniversityCountry Year is required"
      );
    baseSchema.SchoolCountry2 = baseSchema.SchoolCountry2.required(
      "SchoolCountry Year is required"
    );
  }
  return Yup.object().shape(baseSchema);
};

export default getValidationSchemaStep2;
