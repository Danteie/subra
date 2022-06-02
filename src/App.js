import './App.css';
//Commponent
//Home
import Logo from './Component/Logo/Logo'
import Menu from './Component/Menu/Menu'
import Title from './Component/Title/Title'
//Grid
import Grid from './Component/Grid/Grid'
//Images Blcok
// import Images from './Component/Images/Images'
//Footer
import Footer from './Component/Footer/Footer'
import Social from './Component/Social/Social'
//izbrisati posle samo TEst
import Test from './Component/Test/Test'

function App() {
  return (
    <div className="App">
      <div className='home'>
        <div className='header'>
          <Logo/>
          <Menu/>
        </div>
        <Title/>
      </div>
      <Grid/>
      <Test/>
      {/* <Images/> */}
      <div className='footer'>
        <Footer/>
        <Social/>
      </div>
    </div>
  );
}

export default App;
