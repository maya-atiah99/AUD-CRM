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
  return axios.post(API_URL + `/api/Applicant/PostStage2`, applicant);
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

/**************Fetch  Applicant stage 1 */
const fetchApplicantStageOne = async (applicantId) => {
  return await axios.get(
    API_URL + `/api/Applicant/GetApplicantStage/Stage1/${applicantId}`
  );
};
export const useFetchApplicantStageOne = (applicantId) => {
  return useQuery({
    queryKey: ["stage1", applicantId],
    queryFn: () => fetchApplicantStageOne(applicantId),
    enabled: true,
  });
};
/**************Fetch  Applicant stage 2 */
const fetchApplicantStageTwo = async (applicantId) => {
  return await axios.get(
    API_URL + `/api/Applicant/GetApplicantStage/Stage2/${applicantId}`
  );
};
export const useFetchApplicantStageTwo = (applicantId) => {
  return useQuery({
    queryKey: ["stage2", applicantId],
    queryFn: () => fetchApplicantStageTwo(applicantId),
    enabled: true,
  });
};

/***************Fetch  Applicant stage 3 ***************/
const fetchApplicantStageThree = async (applicantId) => {
  return await axios.get(
    API_URL + `/api/Applicant/GetApplicantStage/Stage3/${applicantId}`
  );
};
export const useFetchApplicantStageThree = (applicantId) => {
  return useQuery({
    queryKey: ["stage3", applicantId],
    queryFn: () => fetchApplicantStageThree(applicantId),
    enabled: true,
  });
};
/***************Fetch  Applicant stage 4 ***************/
const fetchApplicantStageFour = async (applicantId) => {
  return await axios.get(
    API_URL + `/api/Applicant/GetApplicantStage/Stage4/${applicantId}`
  );
};
export const useFetchApplicantStageFour = (applicantId) => {
  return useQuery({
    queryKey: ["stage4", applicantId],
    queryFn: () => fetchApplicantStageFour(applicantId),
    enabled: true,
  });
};
