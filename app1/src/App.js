import { createInstance, OptimizelyProvider } from "@optimizely/react-sdk";
import React, {Suspense} from "react";
const RemoteApp = React.lazy(() => import("app2/App"));

const App = () => {
  const optimizely = createInstance({
    sdkKey: 'HHp685F38btzq2ojqiNva',
    // default values to avoid warnings
    eventBatchSize: 10,
    eventFlushInterval: 100,
  });
  return (
    <div>
              <OptimizelyProvider
              optimizely={optimizely}
              timeout={500000}
              user={{
                id: 'user123',
                attributes: {
                  device: 'iPhone',
                  lifetime: 24738388,
                  is_logged_in: true,
                },
              }}>
      <div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"greenyellow"
      }}>
        <h1>App1</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <RemoteApp/>
      </Suspense>
      </OptimizelyProvider>
    </div>)
}


export default App;
