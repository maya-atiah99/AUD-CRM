import axios from "axios";
import { useQuery } from "react-query";
import { API_URL } from "../Contsants";

const fetchDropdownTypes = async (typeId) => {
  return await axios.get(API_URL + `/api/Setting/GetDrowDown/${typeId}`);
};

const fetchAcademicTerms = async () => {
  return await axios.get(API_URL + '/api/Setting/GetAcadmicTerms');
};

export const useFetchDropDownTypes = (typeId) => {
  return useQuery({
    queryKey: ["Types", typeId],
    queryFn: () => fetchDropdownTypes(typeId),
    enabled: true,
  });
};

export const useFetchAcademicTerms =  () => {
  return useQuery({
    queryKey: ["Terms"],
    queryFn: () => fetchAcademicTerms(),
    enabled: true,
  });
};
