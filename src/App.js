import Card from './Components/Card';
import Hero from './Components/Hero';
import NavBar from './Components/Nav';
import data from './data';
import './style.css'




function App() {

const cards = data.map( item => {
  return (
    <Card 
        key={item.id}
        img={item.img}
        rating={item.rating}
        reviewCount={item.reviewCount}
        country={item.country}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
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
      <section className='cards-list'>
         {cards}
      </section>
      

    </div>

  );
}

export default App;
