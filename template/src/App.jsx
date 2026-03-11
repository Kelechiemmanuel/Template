
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div>
      <div  className='bg-blue-500'>
        <Navbar />
        <Hero />
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
  )
}

export default App