import { useMutation, useQuery } from "react-query";
import { API_URL } from "../Constants";
import axios from "axios";

//****************Add applicant show interest  continue to apply*/
const addApplicant = (applicant) => {
  return axios.post(API_URL + `/api/Applicant/PostStage1`, applicant);
};

export const useAddApplicant = () => {
  return useMutation(addApplicant);
};
//****************Add applicant stage 2 which is step 1  */
const addApplicantStageTwo = (applicant) => {
  return axios.post(API_URL + `/api/Applicant/PostStage2`, applicant, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const useAddApplicantStageTwo = () => {
  return useMutation(addApplicantStageTwo);
};

//****************Add applicant stage 3 which is step 2*/
const addApplicantStageThree = (applicant) => {
  return axios.post(API_URL + `/api/Applicant/PostStage3`, applicant, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const useAddApplicantStageThree = () => {
  return useMutation(addApplicantStageThree);
};

/**********************Add applicant stage 4 whiche is step 3 */
const addApplicantStageFour = (applicant) => {
  return axios.post(API_URL + `/api/Applicant/PostStage4`, applicant, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const useAddApplicantStageFour = () => {
  return useMutation(addApplicantStageFour);
};

/***********************Aff applicant files */
const addFiles = (applicant) => {
  return axios.post(API_URL + `/api/Applicant/PostStage3_Files`, applicant, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const useAddFiles = () => {
  return useMutation(addFiles);
};

/***********************Payment */
const payment = (applicant) => {
  return axios.post(API_URL + `/api/Applicant/PostPayment`, applicant, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const usePayment = () => {
  return useMutation(payment);
};

/**************Fetch  Applicant stage 1 */
const fetchApplicantStageOne = async (
  applicantId,
  applicationId,
  showInterest
) => {
  if (applicantId && !showInterest) {
    // Conditionally append ApplicationId to the URL
    const url = applicationId
      ? `${API_URL}/api/Applicant/GetApplicantStage/Stage1/${applicantId}?ApplicationId=${applicationId}`
      : `${API_URL}/api/Applicant/GetApplicantStage/Stage1/${applicantId}`;

    return await axios.get(url);
  }
  throw new Error("applicantId is required"); // Handle missing applicantId case
};

export const useFetchApplicantStageOne = (applicantId, applicationId) => {
  return useQuery({
    queryKey: ["stage1", applicantId, applicationId],
    queryFn: () => fetchApplicantStageOne(applicantId, applicationId),
    enabled: true,
  });
};

/**************Fetch  Applicant stage 2 */
const fetchApplicantStageTwo = async (
  applicantId,
  applicationId,
  showInterest
) => {
  if (!showInterest) {
    return await axios.get(
      API_URL +
        `/api/Applicant/GetApplicantStage/Stage2/${applicantId}/${applicationId}`
    );
  }
};
export const useFetchApplicantStageTwo = (
  applicantId,
  applicationId,
  showInterest
) => {
  return useQuery({
    queryKey: ["stage2", applicantId, applicationId, showInterest],
    queryFn: () =>
      fetchApplicantStageTwo(applicantId, applicationId, showInterest),
    enabled: true,
  });
};

/***************Fetch  Applicant stage 3 ***************/
const fetchApplicantStageThree = async (applicantId, applicationId) => {
  return await axios.get(
    API_URL +
      `/api/Applicant/GetApplicantStage/Stage3/${applicantId}/${applicationId}`
  );
};
export const useFetchApplicantStageThree = (applicantId, applicationId) => {
  return useQuery({
    queryKey: ["stage3", applicantId, applicationId],
    queryFn: () => fetchApplicantStageThree(applicantId, applicationId),
    enabled: true,
  });
};
/***************Fetch  Applicant stage 4 ***************/
const fetchApplicantStageFour = async (applicantId, applicationId) => {
  return await axios.get(
    API_URL +
      `/api/Applicant/GetApplicantStage/Stage4/${applicantId}/${applicationId}`
  );
};
export const useFetchApplicantStageFour = (applicantId, applicationId) => {
  return useQuery({
    queryKey: ["stage4", applicantId, applicationId],
    queryFn: () => fetchApplicantStageFour(applicantId, applicationId),
    enabled: true,
  });
};

/**************************Fetch applying according to application start */

const fetchApplyingAs = async (data) => {
  const app = data?.applicationStart || 0;
  console.log("sbsgkfbkjgbsb", data);
  if (data?.academicTermId) {
    return await axios.get(
      API_URL +
        `/api/ApplicantView/GetApplyingAsByStart/${app}/${data?.academicTermId}`
    );
  }
};

export const useFetchApplyingAs = (data) => {
  return useQuery({
    queryKey: ["applyingAs", data],
    queryFn: () => fetchApplyingAs(data),
    enable: false,
  });
};
