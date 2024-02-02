import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowInterest from "./Pages/ShowInterest/ShowInterest";
import RegisterPage from "./Pages/Registration/RegisterPage";
import { Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoutes from "./routes/PublicRoutes";

const queryCLient = new QueryClient();

function App() {
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
  return (
    <QueryClientProvider client={queryCLient}>
      <Routes>
        <Route
          path='/'
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

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

      <ReactQueryDevtools initialISOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
