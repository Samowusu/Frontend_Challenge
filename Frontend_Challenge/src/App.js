import Header from './components/header';
import Layout from './components/layout';
import ProductDescription from './components/productDescription';
import ProductImages from './components/productImages';

function App() {
  return (
    <>
    <Header/>
    <Layout>
      <ProductImages/>
      <ProductDescription/>
    </Layout>
    </>
  );
}

export default App;
