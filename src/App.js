import './App.css';
import { useEffect, useState } from 'react';
import gameShow from './components/gameShow';

function App() {

  const [games, setGames] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [text,setText] = useState('');

  const getData = ()=>{
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json')
            .then(res => {
                      return res.json()
                    })
            .then(data => {
              setGames(data);
              
            })
            }
  
  useEffect(()=>{
    getData();
  }, []
  )
  const changeText  = (event) => {
    setText(event.target.value)
}

  const search= () => {
    setFilterData(games.filter(item => item.title.includes(text)));

    <gameShow key={filterData.title} fd={filterData}/>
}

  return (
    <div>
    {games && console.log(games) }   

    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Game Hub</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        
      </ul>
      <form className="d-flex" >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={changeText} value={text}/>
        <button className="btn btn-outline-success" type='button' onClick={search}>Search</button>
      </form>
    </div>
  </div>
</nav>  
    <div className='container my-3'>
      <div className='row'>
            {
            games.map((value, index) =>{
            if(value.title){
              return (
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="card" style={{width: "auto"}}>
                        <div className="card-body">
                            <h5 className="card-title">Title    : {value.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Platform :{value.platform}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Score    :{value.score}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Genre    :{value.genre}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Editor Choice : {value.editors_choice}</h6>
                        </div>
                    </div>
                </div>
                )
            }
            
            else{
              return(<></>)
                }
            })
          }
          
            </div>
        </div>
        
    </div>
  );
}


export default App;
