import './App.css'
import logo from './assets/oe_logo_wide.png'
import TabList from './TabList'

function App() {
  return (<div>
      <div className="tab-heading">
        <img src={logo} alt="" />
      </div>
      <div className="tab-body">
        <div className="tab-container">
          <TabList/>
        </div>
      </div>
  </div>)
}

export default App
