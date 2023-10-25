import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TestComponents from "./TestComponents";
import ShowInterest from "./Pages/ShowInterest/ShowInterest";
import RegisterPage from "./Pages/Registration/RegisterPage";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryCLient = new QueryClient();

function App() {
  return (
    //by client and queryprovider we will have access to every hook and method react query provide
    <QueryClientProvider client={queryCLient}>
      <div>
        {/* <TestComponents/> */}
        <Routes>
          <Route path='/' element={<ShowInterest />} />
          <Route path='/showInterest' element={<ShowInterest />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialISOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
