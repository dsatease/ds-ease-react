import { Content } from './components/Content'
import { Leftbar } from './components/Leftbar'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <div className="box" >
        <Leftbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
