import './App.css';
import Calendar from './components/Calendar'

const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for 7 days at the Zoo</h1>
      <h2>This zoo is so big! You can look at many animals.</h2>
      <Calendar />
    </div>
  )
}

export default App