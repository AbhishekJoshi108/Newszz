import { useEffect, useState } from 'react';
import './App.css';
import News from './News';
function App() {

  let [articles, setarticles] = useState([]);
  let[category,setcategory]=useState("india");
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-25&apiKey=3ac0b434d66a425ebf6c11f459cb3e74`)
      .then((response) =>
        response.json())
      .then((data) => {
        console.log(data.articles)

        setarticles(data.articles)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [category])
  return (
    <>


      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container">
          <a className="navbar-brand fs-2" href="#">FUTURETaK</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active  fs-5" aria-current="page" href="#">Home</a>
              <a className="nav-link  fs-5" href="#">About</a>
              <a className="nav-link  fs-5" href="#">Contact</a>
              <a className="nav-link  fs-5" href="#">Gallery</a>
              <form className="d-flex">
                <input className="form-control me-5" type="search" placeholder="Search" aria-label="Search" onChange={(event)=>{
                  if(event.target.value!==""){
                  setcategory(event.target.value);

                    
                  }
                  else{
                    setcategory("india")
                  }
                }}/>
                  {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div className='container mt-5'>

      <div className='row'>

        {
          articles.map((articles) => {
            return (
              <News articles={articles} />


            )
          })
        }

      </div>







      </div>


    </>


  );
}

export default App;
