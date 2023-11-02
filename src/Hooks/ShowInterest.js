import { useMutation } from "react-query";
import { API_URL } from "../Constants";
import axios from "axios";



//****************Add applicatn to show interest page */
const addApplicantToAhowInterest = (applicant) => {
  axios.post(API_URL + `/api/Applicant/ShowingInterest`, applicant);
};

export const useAddApplicantToShowInterest = () => {
  return useMutation(addApplicantToAhowInterest);
};
