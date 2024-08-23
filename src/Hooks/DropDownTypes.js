import axios from "axios";
import { useQuery } from "react-query";
import { API_URL } from "../Constants";

const fetchDropdownTypes = async (typeId) => {
  if (typeId) {
    return await axios.get(
      API_URL + `/api/Setting/GetDrowDown/${typeId}?OrderBy=Text&orderDir=asc`
    );
  }
};

const fetchAcademicTerms = async () => {
  return await axios.get(API_URL + "/api/Term/GetActiveAcademicTerms");
};

const fetchDropDownFromPArent = async (typeId, parentId) => {
  if (typeId && parentId) {
    return await axios.get(
      API_URL + `/api/Setting/GetDrowDownFromParent/${typeId}/${parentId}`
    );
  }
};

const fetchFieldOfInterestByApplicationStart = async (applicationStart) => {
  if (applicationStart) {
    return await axios.get(
      API_URL +
        `/api/Setting/GetFieldOfInterestByApplicationStart/${applicationStart}`
    );
  }
};

/****fetch */
export const useFetchDropDownTypes = (typeId) => {
  return useQuery({
    queryKey: ["Types", typeId],
    queryFn: () => fetchDropdownTypes(typeId),
    enabled: true,
  });
};

export const useFetchAcademicTerms = () => {
  return useQuery({
    queryKey: ["Terms"],
    queryFn: () => fetchAcademicTerms(),
    enabled: true,
  });
};

export const useFetchDropDownFromParent = (typeId, parentId) => {
  return useQuery({
    queryKey: ["Types", typeId, parentId],
    queryFn: () => fetchDropDownFromPArent(typeId, parentId),
    enabled: true,
  });
};

export const useFetchFieldOfInterestByApplicationStart = (applicationStart) => {
  return useQuery({
    queryKey: ["field", applicationStart],
    queryFn: () => fetchFieldOfInterestByApplicationStart(applicationStart),
    enabled: true,
  });
};
