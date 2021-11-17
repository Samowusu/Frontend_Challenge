import { useState } from 'react';
import Header from './components/header';
import Layout from './components/layout';
import ProductDescription from './components/productDescription';
import ProductImages from './components/productImages';
import MenuModal from './components/UI/modals/menuModal';

function App() {
  const [menuIsShown, setMenuIsShown] = useState(false);

  const showMenuHandler = () => {
    setMenuIsShown(true);
  };

  const hideMenuHandler = () => {
    setMenuIsShown(false);
  };

  return (
    <>
    {menuIsShown && <MenuModal onHideMenu={hideMenuHandler}/>}
    <Header onShowMenu={showMenuHandler}/>
    <Layout>
      <ProductImages/>
      <ProductDescription/>
    </Layout>
    </>
  );
}

export default App;
