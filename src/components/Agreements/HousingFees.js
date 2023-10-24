import React from "react";
import SectionTitle from "../Texts/SectionTitle";
import TextComponent from "../Texts/TextComponent";
import BulletedText from "../Texts/BulletedText";

const HousingFees = () => {
  const housingFeesData = [
    {
      text: "I understand that degrees are conferred by the American University in Dubai as explained in the Catalog and on the website. I understand that as a student, I must fulfill all requirements for academic credit and residency before a degree is awarded. I have read the Catalog online and have reviewed it, and acknowledge that the information is readily available online. I have been given the opportunity to ask questions about the Catalog and all other materials I have reviewed. I am satisfied with the information I have received as well as the opportunity to receive additional information as requested.",
    },
    {
      text: "As a student of the University, I pledge that all tests taken by me and that all work submitted by me will be original and solely the result of my own efforts.",
    },
    {
      text: "I understand that all costs of student supplies are borne by the student, parent, and/or guardian and that the supplies will remain the property of the student.",
    },
    {
      text: "I understand that all students, while enrolled at AUD are required to have and maintain private health insurance covering all UAE care on a continual basis and are responsible for all charges related to their medical care. AUD-sponsored students are automatically enrolled in the AUDsponsored health insurance plan and charged a non-refundable fee on their fall semester bill. For new students, the health insurance will be activated once the visa process is finalized. In the meantime, students are advised to have an alternative insurance to cover them for any emergency.",
    },
    {
      text: "I understand the University makes reasonable efforts to provide a safe and secure environment, including making arrangements for transportation, food, housing, recreation, sightseeing, and other services in connection with all trips organized for students. I acknowledge that the University does not assume any liability nor shall it be liable for any injury, damage, loss, accident, or delay for any reason other than its own gross negligence with regard to the foregoing. Therefore, I hereby waive and release any and all claims against the University, its faculty and staff, and their successors and assign any legal representatives for any injury, loss, accident, damage, delay, or expense for any and all injuries suffered by me arising out of the foregoing.",
    },
    {
      text: "I agree that the University may use students’ pictures, statements, and names for news items, advertising, and publicity for the University.",
    },
  ];
  return (
    <div className='tuition-container'>
      <SectionTitle title='(2) HOUSING FEES AND CHARGES' />
      <TextComponent
        size='18px'
        font='600'
        text='The one-time housing security deposit is refundable at the end of the semester if no housing damage has occurred. The housing reservation fee is non-refundable and non-transferable unless the student’s application for admission is denied, or the student cancels his/her admission (including conditional) one month prior to the start of the semester for which he or she has paid.'
      />
      <BulletedText items={housingFeesData} />
    </div>
  );
};

export default HousingFees;
