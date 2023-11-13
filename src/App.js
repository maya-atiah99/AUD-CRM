import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TestComponents from "./TestComponents";
import ShowInterest from "./Pages/ShowInterest/ShowInterest";
import RegisterPage from "./Pages/Registration/RegisterPage";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useEffect, useState } from "react";

const queryCLient = new QueryClient();

function App() {
  const [applicantId, setApplicantId] = useState(
    localStorage.getItem("applicantId") || null
  );

  return (
    //by client and queryprovider we will have access to every hook and method react query provide
    <QueryClientProvider client={queryCLient}>
      <div>
        {/* <TestComponents/> */}
        <Routes>
          <Route
            path='/'
            element={
              <ShowInterest
                setApplicantId={setApplicantId}
                applicantId={applicantId}
              />
            }
          />
          <Route
            path='/showInterest'
            element={
              <ShowInterest
                setApplicantId={setApplicantId}
                applicantId={applicantId}
              />
            }
          />
          <Route
            path='/register'
            element={<RegisterPage applicantId={applicantId} />}
          />
        </Routes>
      </div>
      <ReactQueryDevtools initialISOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
