import {Fragment} from 'react';
import Description from './components/description/description';
import Header from './components/header/header';
import Layout from './components/UI/layout';
import SneakerImages from './components/sneaker/sneakerImages';

function App() {
  return (
    <Fragment>
      <Header/>
      <Layout>
        <SneakerImages/>
        <Description/>
      </Layout>
    </Fragment>
  );
}

export default App;
