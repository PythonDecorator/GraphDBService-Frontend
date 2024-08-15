import {RouterProvider} from "react-router-dom";
import router from "./router.js"
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./utils/helpers/http.js";

const App = () => {

  return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
  );
}

export default App;