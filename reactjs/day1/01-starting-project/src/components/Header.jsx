import reactimg from '../assets/react-core-concepts.png'

let reactlist = ['Fundamental', 'Crucial', 'Core']

function genRandomiitem(){
  return Math.floor(Math.random( ) * reactlist.length)
}

export default function Header(){
    return(
      <header>
      <img src={reactimg} alt="" />
      <h1>React Essentials</h1>
      <p>
        {reactlist[genRandomiitem(reactlist)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
    )
  }