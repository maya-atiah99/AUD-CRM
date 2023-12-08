import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { API_URL } from "../Constants";


/*********************Login */
const applicantLogin = (fields) => {
  return axios.post(API_URL + `/api/Auth/ApplicantLogIn`, fields);
};

export const useApplicantLogin = () => {
  return useMutation(applicantLogin);
};


/*********************Applications */

const fetchApplicationsByApplicantId=async(applicantId)=>{
  return await axios.get(API_URL + `/api/Applicant/GetApplicationsByApplicantId/${applicantId}`)
}

export const useFetchApplicationsById=(applicantId)=>{
  return useQuery({
    queryKey: ["applications", applicantId],
    queryFn: () => fetchApplicationsByApplicantId(applicantId),
    enabled: true,
  });
}