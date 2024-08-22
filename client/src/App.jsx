import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <>

      <Navbar />
      <div id='#'>
        <HomePage />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='project'>
        <Project />
      </div>
      {/* <div id='blogs'>
        <Blogs />
      </div>
      <div id='articles'>
        <Articles />
      </div> */}
      <div id="contact">
        <Contact />
      </div>
      <div id='login'>
        <LoginPage />
      </div>
      <Footer />
    </>
  )
}

export default App;
``
