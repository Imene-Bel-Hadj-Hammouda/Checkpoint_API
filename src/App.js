
import { Link } from 'react-router-dom';
import './App.css';

function App({users}) {
  return (
    <div className="App">
     
     <h1 style={{"color":"purple"}}>API Users' Name </h1>
     {users && <div className="userList"><ul>
       
       {users.map(el=><li style={{"color":"purple", "text-Decoration":"none"}}><Link to={`/description/${el.id}`} >{el.name}</Link></li>)}
       
       </ul></div>}
    </div>
  );
}

export default App;
