import { useState } from 'react';

import Header from '../../components/Header';

import '../../App.css';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className='grid-container'>
      <Sidebar />
      <main className='main'>
        <Header 
        onSearch={setSearch}
        valueSearch={search}
        />
        <Cards dataSearch={search}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
