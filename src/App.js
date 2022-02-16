import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Header_Black from './components/Header_Black'
import MainStory from './components/MainStory'
import News from './components/News'

function App() {
  return (
    <div className='App'>
      <Header_Black />
      <Header />
      <MainStory />
      <News />
    </div>
  )
}

export default App
