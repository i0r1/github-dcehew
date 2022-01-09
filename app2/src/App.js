import React from 'react';
import { useFeature } from '@optimizely/react-sdk';

const App = (props) => {
  // const [isFeatureEnabled, variables] = useFeature('analytics_page', {});
  console.log(props);
  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'cyan',
      }}
    >
      <h1>App 2</h1>
    </div>
  );
};

export default App;
