import { Content } from './components/Content'
import { Rightbar } from './components/Rightbar'
import { Leftbar } from './components/Leftbar'
import {Navbar} from './components/Navbar'

function App() {

  return (
    <div>
    <Navbar/>
      <div className="box" >
        <Leftbar />
        <Content />
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
