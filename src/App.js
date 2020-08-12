import React from 'react';
import Layout from './containers/Layout/Layout'
import BoxContainer from './containers/BoxContainer/BoxContainer';
// Please check out BoxContainer.js that's where all the magic is✨
function App() {
  return (
    <div className="App">
        <Layout>
        <BoxContainer/>
        </Layout>
      </div>
  );
}

export default App;
