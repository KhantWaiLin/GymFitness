import './App.css';
import Hero from './component/Hero/Hero';
import Programs from './component/Programs/Programs';
import Reasons from './component/Reasons/Reasons';
import Plans from './component/Plans/Plans';
import Testimonials from './component/Testimonials/Testimonials';
import Join from './component/Join/Join';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
          <Hero />
          <Programs />
          <Reasons />
          <Plans />
          <Testimonials />
          <Join />
          <Footer />
    </div>
  );
}

export default App;
