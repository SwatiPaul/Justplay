import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";


const Hero = ({onFetchData}) => {
  const [search, setSearch] = useState("");
  console.log('search',search);
  const [fetch,setFetch] = useState([]);
  console.log('fetch',fetch);
  
  const apikey = "82b3e7e54bf4f2f9076123316bf5bd8c";
  
  useEffect(()=>{
    const handleFetch= async()=>{
      // e.preventDefault();
      // const apikey =  env.REACT_APP_TMDB_API_KEY;
      // console.log('apikey',apikey);
      if(search.trim() === ""){
        setFetch([]);
        onFetchData([]);
      }
      
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${search}`
  
      try {
        const resp = await axios.get(url);
        setFetch(resp.data.results);
        onFetchData(resp.data.results);
        // setSearch("")
        
      } catch (error) {
        console.error(error)
      }
    } 

      const debounceTimeout = setTimeout(handleFetch,500);

      return() => clearTimeout(debounceTimeout);

  
    // handleFetch()
  },[search,onFetchData])
  return (
    <>
      <div className="hero_section">
        <Container>
          <Row>
            <div className="hero_inner">
              <p>
              <h1>welcome</h1>
                <h1>The Biggest Film collection systematic replenishnent</h1>
              </p>

              <form className="search_field" onSubmit={(e)=>e.preventDefault()}>
                <div className="form-group">
                <i class="bi bi-search"></i>
                  <input
                    type="text"
                    name="search"
                    className="form-control"
                    placeholder="Search for a movie,show,person....."
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                  />
                </div>

                {/* <button type="submit">search</button> */}
              </form>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
