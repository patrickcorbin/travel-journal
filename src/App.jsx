import Card from './Card'
import data from './data.js'
import './App.css'

function App() {

  const cards = data.map(item => {
    return (
      <Card key={item.id} item={item} />
    )
  })

  return (
    <div className="App">
      <div className='header'>
        <img className='header__img' src='/globe.png' alt="Globe icon" />
        <span className='header__title'>my travel journal</span>
      </div>
      <div className='card-list'>
        {cards}
      </div>
    </div> 
  )
}

export default App
