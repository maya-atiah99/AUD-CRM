import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import SquareCheckBox from "../../Inputs/SquareCheckBox";
import TextComponent from "../../Texts/TextComponent";
import SectionTitle from "../../Texts/SectionTitle";
import { useFormik } from "formik";
import WaiverAndReleasesValidationSchema from "../../../ValidationSchemas/WaiverAndReleasesValidationSchema";

const WaiverAndReleases = forwardRef(({ isView }, ref) => {
  const formik = useFormik({
    initialValues: {
      RemainInFullForceCheck: "",
      AgreementTermsCheck: "",
      HealthInsurance: "",
      AcknowledgeAndPolicies: "",
      isSaved: "",
    },
    validationSchema: WaiverAndReleasesValidationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {},
  });

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      formik.submitForm();
    },
  }));

  useEffect(() => {
    ref.current = formik;
  }, [ref, formik]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='form-subcontainer'>
        <div className='form-subcontainers'>
          <SectionTitle title='WAIVER AND RELEASE' size='18px' font='600' />
          <div style={{ paddingLeft: "20px", paddingTop: "10px" }}>
            <TextComponent
              classfont='classfont-agreement'
              font='500'
              text='I, for and in consideration of my enrollment in programs at The American University in Dubai (AUD), hereby release and forever discharge AUD and all of its agents, officers, directors and employees from any and all manner of claims, causes of action, losses, or liability which I now have or may ever have at any time in the future against AUD, its agents, officers, directors, or employees, arising out of or pertaining to any injury, loss, damage, or harm of any kind which has, will, or may happen to me while I am enrolled in programs at AUD, whether or not on the property of AUD.
    I hereby assume all risks for any damage, loss, injury, or harm which may occur to me in going to or from AUD or any travelling in which I may engage while enrolled at AUD.
    In addition to the above and for the same consideration previously stated, I hereby agree to indemnify, defend, protect, and hold harmless AUD and its agents, officers, directors, and employees from and against any and all manner of claims, causes of action, losses or liability arising out of any accident, injury, or damage to me occurring while I am enrolled in programs at AUD or traveling to or from the University.'
            />
          </div>

          <SquareCheckBox
            text='This Waiver and Release shall remain in full force and effect so long as I am enrolled in programs at AUD or during travels to or from AUD.'
            name='RemainInFullForceCheck'
            value={formik.values.RemainInFullForceCheck}
            onChange={(checked) => {
              formik.setFieldValue("RemainInFullForceCheck", checked);
            }}
            errors={formik.errors?.RemainInFullForceCheck}
            touched={formik.errors?.RemainInFullForceCheck}
            disabled={isView}
          />
          <SquareCheckBox
            text='I have executed this Waiver and Release and have agreed to the terms of this instrument having carefully read it in full '
            name='AgreementTermsCheck'
            value={formik.values.AgreementTermsCheck}
            onChange={(checked) => {
              formik.setFieldValue("AgreementTermsCheck", checked);
            }}
            errors={formik.errors?.AgreementTermsCheck}
            touched={formik.errors?.AgreementTermsCheck}
            disabled={isView}
          />
        </div>
        <div className='form-subcontainers'>
          <SectionTitle title='ACKNOWLEDGEMENT' size='18px' font='600' />
          <TextComponent
            text='Insurance Coverage while at AUD'
            font='700'
            classfont='expand-font-title'
          />
          <SquareCheckBox
            text='Private health insurance covering care in the UAE is mandatory for AUD students. Visiting students are required to provide the Admissions Office with evidence of valid private health insurance applicable in the UAE, during the Admissions process. Visiting students are responsible for all charges related to any medical care, while enrolled at AUD. As part of the AUD residence visa application, students are also required to enroll in the AUD-sponsored health insurance plan.'
            name='HealthInsurance'
            value={formik.values.HealthInsurance}
            onChange={(checked) => {
              formik.setFieldValue("HealthInsurance", checked);
            }}
            errors={formik.errors?.HealthInsurance}
            touched={formik.errors?.HealthInsurance}
            disabled={isView}
          />

          <SquareCheckBox
            text='I acknowledge the above policies and accept to make the appropriate payments within the deadlines as mentioned in the AUD Academic Calendar online'
            name='AcknowledgeAndPolicies'
            value={formik.values.AcknowledgeAndPolicies}
            onChange={(checked) => {
              formik.setFieldValue("AcknowledgeAndPolicies", checked);
            }}
            errors={formik.errors?.AcknowledgeAndPolicies}
            touched={formik.errors?.AcknowledgeAndPolicies}
            policy='AUD Academic Calendar online'
            href='https://www.aud.edu/admissions/academic-calendar-and-application-deadlines/'
            disabled={isView}
          />
        </div>
      </div>
    </form>
  );
});

export default WaiverAndReleases;
