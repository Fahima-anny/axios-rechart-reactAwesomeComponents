
import './App.css'
import BarChart from './Components/BarChart/BarChart'
import LineChart from './Components/LineChart/LineChart'
import Navbar from './Components/Navbar/Navbar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/PriceOptions/PriceOptions'
// import DaisyUiNav from './Components/DaisyUiNav/DaisyUiNav'

function App() {

  return (
    <>
      {/* <DaisyUiNav></DaisyUiNav> */}

<Navbar></Navbar>

<PriceOptions></PriceOptions>
<LineChart></LineChart>
<BarChart></BarChart>
<Phones></Phones>

    </>
  )
}

export default App
