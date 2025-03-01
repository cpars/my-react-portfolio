import styles from './App.module.css';
import { NavBar } from './components/NavBar/NavBar';
import { Hero } from './components/Hero/Hero';

function App() {
  

  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />  
    </div>
  );
}

export default App;
