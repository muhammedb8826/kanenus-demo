import heroImage from '../assets/Background Image.png';
import About from './About';

const Home = () => {
  return (
    <>
    <div className='hero-section'>
      <img src={heroImage} alt="hero" />
    </div>
    <About />
    </>
  )
}

export default Home
