import { useEffect, useState } from 'react';
import './App.css';
import News from './News';
function App() {

  let [articles, setarticles] = useState([]);
  let [category, setcategory] = useState("india");
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
              <form className='my-auto'>
                <input className="form-control me-5" type="search" placeholder="Search" aria-label="Search" onChange={(event) => {
                  if (event.target.value !== "") {
                    setcategory(event.target.value);


                  }
                  else {
                    setcategory("india")
                  }
                }} />
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              </form>
            </div>
          </div>
        </div>
      </nav>

      {/* <div className='container mt-5'>

      <div className='row'>

        {
           articles.map((articles) => (

           <News articles={articles}/>

        ))
        }

      </div> */}
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>

            {
              articles.map((user) => {
                return (
                  <>
                    <div className='col-md-4 justify-content-between  mt-5' data-aos="zoom-in-up" data-aos-delay="400">
                      <div className="card shadow mt-4 p-2">
                        <img src={user.urlToImage} className="img-fluid" />
                        <div className="card-body">
                          <h5>{user.title?.substring(0, 20).concat("...")}</h5>
                          <h6>{user.description?.substring(0, 50).concat("...")} <a href={user.url}>ReadMore</a></h6>



                          <p>{user.source.name}</p>



                          <button className="btn btn-warning"><a href={user.url} style={{ textDecoration: 'none', color: 'black' }}>ReadMore</a></button>
                        </div>
                      </div>

                    </div>




                  </>
                )
              })
            }







          </div>

        </div>

      </div>







    


    

</>
  );
}

export default App;
