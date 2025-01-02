import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../components/Items/Navbar";
import Hero from "../components/Items/Hero";
import axios from "axios";
import Loading from "../components/Loading";
import Footer from "../components/Items/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Movie = () => {
  const [data, setData] = useState([]);
  // console.log("data", data);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [play, setPlay] = useState([]);
  console.log("play", play);
  const [rated, setRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  console.log("upcoming", upcoming);
  const navigate = useNavigate();
  const [fetched, setFetched] = useState([]);
  console.log("parent fetched", fetched);
 
  


  const darkmode = useSelector((state)=> state.theme.darkmode)

  useEffect(() => {
    const root = document.documentElement; // Access <html>
    root.setAttribute("data-theme", darkmode ? "dark" : "light");

    const fetchData = async () => {
      const options = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmIzZTdlNTRiZjRmMmY5MDc2MTIzMzE2YmY1YmQ4YyIsIm5iZiI6MTczMzU1ODMwMy44ODksInN1YiI6IjY3NTQwMDFmYjQ2NzU2MGNkNzA1NDM5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._0AzRCATkJTHoyYbdhKnPnvegVsMVE6ceXtD9vxONg4",
        },
      };
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
          options
        );
        setData(response.data.results);
      } catch (error) {
        setError("Can not load data:" + error.message);
      } finally {
        setLoading(false);
      }
    };
    const fetchPlay = async () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/now_playing",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmIzZTdlNTRiZjRmMmY5MDc2MTIzMzE2YmY1YmQ4YyIsIm5iZiI6MTczMzU1ODMwMy44ODksInN1YiI6IjY3NTQwMDFmYjQ2NzU2MGNkNzA1NDM5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._0AzRCATkJTHoyYbdhKnPnvegVsMVE6ceXtD9vxONg4",
        },
      };
      try {
        await axios.request(options).then((res) => setPlay(res.data.results));
      } catch (error) {
        console.error(error);
      }
    };
    const fetchPopular = async () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/top_rated",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmIzZTdlNTRiZjRmMmY5MDc2MTIzMzE2YmY1YmQ4YyIsIm5iZiI6MTczMzU1ODMwMy44ODksInN1YiI6IjY3NTQwMDFmYjQ2NzU2MGNkNzA1NDM5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._0AzRCATkJTHoyYbdhKnPnvegVsMVE6ceXtD9vxONg4",
        },
      };
      try {
        await axios.request(options).then((res) => setRated(res.data.results));
      } catch (error) {
        console.error(error);
      }
    };
    const fetchUpcoming = async () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/upcoming",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmIzZTdlNTRiZjRmMmY5MDc2MTIzMzE2YmY1YmQ4YyIsIm5iZiI6MTczMzU1ODMwMy44ODksInN1YiI6IjY3NTQwMDFmYjQ2NzU2MGNkNzA1NDM5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._0AzRCATkJTHoyYbdhKnPnvegVsMVE6ceXtD9vxONg4",
        },
      };
      try {
        await axios.request(options).then((res) => {
          setUpcoming(res.data.results);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchUpcoming();
    fetchPopular();
    fetchData();
    fetchPlay();
  }, [darkmode]);

  const imageUrl = "https://image.tmdb.org/t/p/original/";

  const handleClick = (id) => {
    navigate(`movie_details/${id}`);
  };

  const handleFetchData = (data) => {
    setFetched(data);
  };
  const handleAdd =async()=>{
    // const options = {
    //   method: 'POST',
    //   url: `https://api.themoviedb.org/3/account/${account}/favorite`,
    //   headers: {
    //     accept: 'application/json',
    //     'content-type': 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmIzZTdlNTRiZjRmMmY5MDc2MTIzMzE2YmY1YmQ4YyIsIm5iZiI6MTczMzU1ODMwMy44ODksInN1YiI6IjY3NTQwMDFmYjQ2NzU2MGNkNzA1NDM5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._0AzRCATkJTHoyYbdhKnPnvegVsMVE6ceXtD9vxONg4'
    //   }
    // };

    // try {

    //   await axios.request(options).then((res)=>console.log("handleAdd",res))
      
    // } catch (error) {
    //   console.error(error)
    // }
    
  }

  return (
    <>
      <Navbar />
      <Hero onFetchData={handleFetchData} />
      <div className={`movie_showcase ${darkmode ?  "dark" : "light"}`}>
        <Container>
          <Row>
            {fetched.length > 0 ? (
              <div className="movie_showcase_inside">
                <h2>Search Results</h2>

                <ul className="inner_showcase">
                  {fetched?.map((item, index) => {
                    return (
                      <li key={index} onClick={() => handleClick(item?.id)}>
                        <figure className="m-0">
                          {item?.poster_path === null ? (
                            <img
                              className="img_none"
                              src={imageUrl + item?.poster_path}
                              alt=""
                              srcset=""
                            />
                          ) : (
                            <span>
                            <i class="bi bi-heart" onClick={handleAdd}></i>

                              <img
                              src={imageUrl + item?.poster_path}
                              alt=""
                              srcset=""
                            />
                            </span>


                           
                          )}
                        </figure>
                        <div className="inner_content">
                          <p className="m-0">{item.title}</p>
                          <span className="fw-normal d-block text-start">
                            {new Date(item.release_date).toLocaleDateString(
                              "en-US",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </span>
                          <span className="fw-normal text-start movie_rating">
                            {item.vote_average}
                            <i class="bi bi-star-fill"></i>
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div className="movie_showcase_inside">
                <h2>Now Playing</h2>

                <ul className="inner_showcase">
                  {play?.map((item, index) => {
                    return (
                      <li key={index} onClick={() => handleClick(item?.id)}>
                        <figure className="m-0">
                          <span>
                          <i class="bi bi-heart"></i>
                          <img
                            src={imageUrl + item?.poster_path}
                            alt=""
                            srcset=""
                          />
                          </span>
                        </figure>
                        <div className="inner_content">
                          <p className="m-0">{item.title}</p>
                          <span className="fw-normal d-block text-start">
                            {new Date(item.release_date).toLocaleDateString(
                              "en-US",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </span>
                          <span className="fw-normal text-start movie_rating">
                            {item.vote_average}
                            <i class="bi bi-star-fill"></i>
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </Row>
          <Row>
            {data.length > 0 ? (
              <div className="movie_showcase_inside">
                <h2>Trending</h2>

                <ul className="inner_showcase">
                  {data?.map((item, index) => {
                    return (
                      <li key={index} onClick={() => handleClick(item?.id)}>
                        <figure className="m-0">
                        <span>
                          <i class="bi bi-heart"></i>
                          <img
                            src={imageUrl + item?.poster_path}
                            alt=""
                            srcset=""
                          />
                          </span>
                        </figure>
                        <div className="inner_content">
                          <p className="m-0">{item.title}</p>
                          <span className="fw-normal d-block text-start">
                            {new Date(item.release_date).toLocaleDateString(
                              "en-US",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </span>
                          <span className="fw-normal text-start movie_rating">
                            {item.vote_average}
                            <i class="bi bi-star-fill"></i>
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <Loading />
            )}
          </Row>
          <Row>
            {rated.length > 0 ? (
              <div className="movie_showcase_inside">
                <h2>Top Rated</h2>

                <ul className="inner_showcase">
                  {rated?.map((item, index) => {
                    return (
                      <li key={index} onClick={() => handleClick(item?.id)}>

                        <figure className="m-0">
                        <span>
                        <i class="bi bi-heart"></i>
                          <img
                            src={imageUrl + item?.poster_path}
                            alt=""
                            srcset=""
                          />
                          </span>
                        </figure>
                        <div className="inner_content">
                          <p className="m-0">{item.title}</p>
                          <span className="fw-normal d-block text-start">
                            {new Date(item.release_date).toLocaleDateString(
                              "en-US",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </span>
                          <span className="fw-normal text-start movie_rating">
                            {item.vote_average}
                            <i class="bi bi-star-fill"></i>
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <Loading />
            )}
          </Row>
          <Row>
            {upcoming.length > 0 ? (
              <div className="movie_showcase_inside">
                <h2>Upcoming</h2>

                <ul className="inner_showcase">
                  {upcoming?.map((item, index) => {
                    return (
                      <li key={index} onClick={() => handleClick(item?.id)}>
                        <figure className="m-0">
                        <span>
                        <i class="bi bi-heart"></i>
                          <img
                            src={imageUrl + item?.poster_path}
                            alt=""
                            srcset=""
                          />
                          </span>
                        </figure>
                        <div className="inner_content">
                          <p className="m-0">{item.title}</p>
                          <span className="fw-normal d-block text-start">
                            {new Date(item.release_date).toLocaleDateString(
                              "en-US",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </span>
                          <span className="fw-normal text-start movie_rating">
                            {item.vote_average}
                            <i class="bi bi-star-fill"></i>
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <Loading />
            )}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Movie;
