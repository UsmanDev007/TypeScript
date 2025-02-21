import { useRoutes } from "react-router-dom";
// import { routes } from "./routes";
import { Box } from '@mui/material';
import { routes } from './routes/Index';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const pages = useRoutes(routes);
  const queryClient=new QueryClient();

  return (
    <>
       <QueryClientProvider client={queryClient}>
       <Box>{pages}</Box>
       </QueryClientProvider>
      
    </>
  );
} 
export default App;


 