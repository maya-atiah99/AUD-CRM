import React from "react";
import TextComponent from "../../Texts/TextComponent";
import SectionTitle from "../../Texts/SectionTitle";

const waiverReleases = () => {
  return (
    <div className='form-subcontainers'>
      <SectionTitle title='WAIVER AND RELEASE' size='18px' font='600' />
      <TextComponent
        font='500'
        text='I, for and in consideration of my enrollment in programs at The American University in Dubai (AUD), hereby release and forever discharge AUD and all of its agents, officers, directors and employees from any and all manner of claims, causes of action, losses, or liability which I now have or may ever have at any time in the future against AUD, its agents, officers, directors, or employees, arising out of or pertaining to any injury, loss, damage, or harm of any kind which has, will, or may happen to me while I am enrolled in programs at AUD, whether or not on the property of AUD.
I hereby assume all risks for any damage, loss, injury, or harm which may occur to me in going to or from AUD or any travelling in which I may engage while enrolled at AUD.
In addition to the above and for the same consideration previously stated, I hereby agree to indemnify, defend, protect, and hold harmless AUD and its agents, officers, directors, and employees from and against any and all manner of claims, causes of action, losses or liability arising out of any accident, injury, or damage to me occurring while I am enrolled in programs at AUD or traveling to or from the University.'
      />
      <SquareCheckBox
        text='This Waiver and Release shall remain in full force and effect so long as I am enrolled in programs at AUD or during travels to or from AUD.'
        name='ProgramInformationCheck'
        value={formik.values.ProgramInformationCheck}
        onChange={(checked) => {
          formik.setFieldValue("ProgramInformationCheck", checked);
        }}
        errors={formik.errors?.ProgramInformationCheck}
        touched={formik.errors?.ProgramInformationCheck}
      />
      <SquareCheckBox
        text='I have executed this Waiver and Release and have agreed to the terms of this instrument having carefully read it in full '
        name='ProgramInformationCheck'
        value={formik.values.ProgramInformationCheck}
        onChange={(checked) => {
          formik.setFieldValue("ProgramInformationCheck", checked);
        }}
        errors={formik.errors?.ProgramInformationCheck}
        touched={formik.errors?.ProgramInformationCheck}
      />
      <SectionTitle title='ACKNOWLEDGEMENT' size='18px' font='600' />
      <TextComponent text="Insurance Coverage while at AUD" font="700"/>
      <SquareCheckBox
        text='Private health insurance covering care in the UAE is mandatory for AUD students. Visiting students are required to provide the Admissions Office with evidence of valid private health insurance applicable in the UAE, during the Admissions process. Visiting students are responsible for all charges related to any medical care, while enrolled at AUD. As part of the AUD residence visa application, students are also required to enroll in the AUD-sponsored health insurance plan.'
        name='ProgramInformationCheck'
        value={formik.values.ProgramInformationCheck}
        onChange={(checked) => {
          formik.setFieldValue("ProgramInformationCheck", checked);
        }}
        errors={formik.errors?.ProgramInformationCheck}
        touched={formik.errors?.ProgramInformationCheck}
      />
      <div>
      <SquareCheckBox
        text='I acknowledge the above policies and accept to make the appropriate payments within the deadlines as mentioned in the AUD Academic Calendar online'
        name='ProgramInformationCheck'
        value={formik.values.ProgramInformationCheck}
        onChange={(checked) => {
          formik.setFieldValue("ProgramInformationCheck", checked);
        }}
        errors={formik.errors?.ProgramInformationCheck}
        touched={formik.errors?.ProgramInformationCheck}
      />
      <div className='blue-link'>
          <a
            href='https://www.aud.edu/admissions/academic-calendar-and-application-deadlines/'
            target='_blank'
          >
            {" "}
            AUD Academic Calendar online{" "}
          </a>
          
      </div>
      </div>
  
    </div>
  );
};

export default waiverReleases;
