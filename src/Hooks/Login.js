import axios from "axios";
import { useMutation } from "react-query";
import { API_URL } from "../Constants";

const applicantLogin = (fields) => {
  return axios.post(API_URL + `/api/Auth/ApplicantLogIn`, fields);
};

export const useApplicantLogin = () => {
  return useMutation(applicantLogin);
};
