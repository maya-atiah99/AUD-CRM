import { useMutation } from "react-query";
import { API_URL } from "../Constants";
import axios from "axios";


const validateShowInterest = (noteId) => {
    return axios.delete(
      API_URL + `/api/ApplicantView/DeleteApplicantNote/${noteId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  };
  
  export const useDeleteNote = () => {
    return useMutation(deleteNotes);
  };
  