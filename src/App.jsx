// import { HelmetProvider } from "react-helmet-async";

import Router from "./routes/Router";
import { Suspense } from "react";



function App() {
   return (
      <Suspense fallback={"loading...."}>
         {/* <HelmetProvider> */}

         <Router />
         {/* </HelmetProvider> */}
      </Suspense>
   );
}

// export function loader(){
//    return (
//       <div className="bg-indigo-500 ...">
//   {/* <svg className="motion-reduce:hidden animate-spin ..." viewBox="0 0 24 24">...</svg> */}
//   Processing...
// </div>
//    ) 
// }

export default App;
