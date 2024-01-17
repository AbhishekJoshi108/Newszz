import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {

  let [articles, setarticles] = useState([]);
  let [category, setcategory] = useState("india");
  useEffect(() => {
   

    axios.get(`https://newsapi.org/v2/everything?q=${category}&from=2024-1-16&apiKey=3ac0b434d66a425ebf6c11f459cb3e74`)
    .then((res)=>{
      console.log(res.data.articles)
      setarticles(res.data.articles)
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
              </form>
            </div>
          </div>
        </div>
      </nav>

    
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>

            {
          
          
            articles.map((articles,i)=>{
                  
                return(
                  <>
                 
                <div className='col-md-4 justify-content-between  mt-5' data-aos="zoom-in-up" data-aos-delay="400">
                  <div className="card shadow mt-4 p-2">
                    <img src={articles.urlToImage} className="img-fluid" />
                    <div className="card-body">
                      <h5>{articles.title?.substring(0, 20).concat("...")}</h5>
                      <h6>{articles.description?.substring(0, 50).concat("...")} <a href={articles.url}>ReadMore</a></h6>



                      <p>{articles.source.name}</p>



                      <button className="btn btn-warning"><a href={articles.url} style={{ textDecoration: 'none', color: 'black' }}>ReadMore</a></button>
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
