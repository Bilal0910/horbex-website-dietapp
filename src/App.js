import Card from './Components/Card';
import Hero from './Components/Hero';
import NavBar from './Components/Nav';
import FormVal from './Components/FormVal'
import ServiceSection from './Components/ServiceSection'
import DietPlanner from './Components/DietPlanner'
import data from './data';
import './style.css'




function App() {

const cards = data.map( item => {
  return (
    <Card 
        key={item.id}
        {...item}
    />
  )

})

  return (
    <div>

      {/* NavBar Component */}
      <NavBar />

      {/* Hero Component */}
      <Hero />

      {/* Card Component */}
      <section className='cards-list'> {cards} </section>

      <FormVal />

      <ServiceSection />

      <DietPlanner />
      

    </div>

  );
}

export default App;
