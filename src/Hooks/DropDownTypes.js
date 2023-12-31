import axios from "axios";
import { useQuery } from "react-query";
import { API_URL } from "../Constants";

const fetchDropdownTypes = async (typeId) => {
  if (typeId) {
    return await axios.get(API_URL + `/api/Setting/GetDrowDown/${typeId}`);
  }
};

const fetchAcademicTerms = async () => {
  return await axios.get(API_URL + "/api/Setting/GetAcadmicTerms");
};

const fetchDropDownFromPArent = async (typeId, parentId) => {
  if (typeId && parentId) {
    return await axios.get(
      API_URL + `/api/Setting/GetDrowDownFromParent/${typeId}/${parentId}`
    );
  }
};

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
