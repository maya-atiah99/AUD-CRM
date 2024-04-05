import React from "react";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ShowInterest from "../Pages/ShowInterest/ShowInterest";
import RegisterPage from "../Pages/Registration/RegisterPage";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoute";

const MainRoute = () => {
  const [applicantId, setApplicantId] = useState(
    localStorage.getItem("applicantId") || null
  );
  const [applicationStart, setApplicationStart] = useState(
    localStorage.getItem("applicationStart") || null
  );
  const [applingAs, setApplyingAs] = useState(
    parseInt(localStorage.getItem("applingAs")) || null
  );
  const [applicationId, setApplicationId] = useState(
    localStorage.getItem("applicationId")
  );
  const [reApply,setReApply]=useState( localStorage.getItem("reApply") ||null)

  return (
    <Routes>
        <Route
          index
          element={
            <ShowInterest
              setApplicantId={setApplicantId}
              applicantId={applicantId}
              applicationStart={applicationStart}
              setApplicationStart={setApplicationStart}
              applingAs={applingAs}
              setApplyingAs={setApplyingAs}
              applicationId={applicationId}
              setApplicationId={setApplicationId}
            />
          }
        />
      <Route path='/register' element={<PrivateRoutes />}>
        <Route
          path='/register'
          element={
            <RegisterPage
              setApplicantId={setApplicantId}
              applicantId={applicantId}
              applicationStart={applicationStart}
              setApplicationStart={setApplicationStart}
              applingAs={applingAs}
              setApplyingAs={setApplyingAs}
              applicationId={applicationId}
              setApplicationId={setApplicationId}
            />
          }
        />
      </Route>

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default MainRoute;
