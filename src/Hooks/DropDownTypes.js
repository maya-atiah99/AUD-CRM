import axios from "axios";
import { useQuery } from "react-query";
import { API_URL } from "../Contsants";

const fetchDropdownTypes = async (typeId) => {
  return await axios.get(API_URL + `/api/Setting/GetDrowDown/${typeId}`);
};

export const useFetchDropDownTypes = (typeId) => {
  return useQuery({
    queryKey: ["Types", typeId],
    queryFn: () => fetchDropdownTypes(typeId),
    enabled: true, 
  });
};
