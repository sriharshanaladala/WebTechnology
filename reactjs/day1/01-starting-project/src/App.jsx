import {CORE_CONCEPTS} from './data'
import Header from './components/Header';


function CoreConcepts({image, title, description}){
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function App(){
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
        <h2>Time to get started!</h2>
        <h2>core concepts</h2>
        <ul>
          <CoreConcepts {...CORE_CONCEPTS[0]} />
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image} />
          <CoreConcepts title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image} />
          
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
