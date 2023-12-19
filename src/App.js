import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowInterest from "./Pages/ShowInterest/ShowInterest";
import RegisterPage from "./Pages/Registration/RegisterPage";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";

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
    localStorage.getItem("applicationId") || null
  );
  console.log('applicationStartxsddsc',applicationStart)
  return (
    <QueryClientProvider client={queryCLient}>
      <div>
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
                setApplicationId={setApplicationStart}
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
                setApplicationId={setApplicationStart}
              />
            }
          />
        </Routes>
      </div>
      <ReactQueryDevtools initialISOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
