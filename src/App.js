import DayList from './component/DayList';
import Header from './component/Hearder';
import Day from './component/Day';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';
import DeleteDay from './component/DeleteDay';
import axios from 'axios';

function App() {
  state = {
    id : "",
  }

  handleChange =(e)=>{
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  submitId = ()=>{
    const post ={
      plzid : this.state.id,
    };
   
    fetch("http://localhost:3001/idplz", {
      method : "post", // 통신방법
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(post),
    })
    .then((res)=>res.json())
    .then((json)=>{
      this.setState({
        id : json.text,
      });
    });
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Switch>
            <Route exact path='/'>
              <DayList/>
            </Route>
            <Route path='/day/:day'>
              <Day />
            </Route>
            <Route path='/create_word'>
              <CreateWord />
            </Route>
            <Route path='/create_day'>
              <CreateDay />
            </Route>
            <Route path='/delete_day'>
              <DeleteDay />
            </Route>
            <Route>
              <EmptyPage />
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
