import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MainRoute from "./routes/MainRoute";

const queryCLient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryCLient}>
      <MainRoute />
      <ReactQueryDevtools initialISOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
