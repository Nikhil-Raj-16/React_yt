import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'
const App = () => {
  return (
    <div>
      <Navbar />
      {Card()}
      <Card />
      {/* <Cards /> */}
    </div>
  )
}

export default App



