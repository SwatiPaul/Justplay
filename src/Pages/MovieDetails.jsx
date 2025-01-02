import React, { useEffect, useState } from "react";
import Navbar from "../components/Items/Navbar";
import Hero from "../components/Items/Hero";
import Footer from "../components/Items/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import _default from "../Image/default.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



const MovieDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [show, setShow] = useState();
  // console.log("show", show);
  const [review, setReview] = useState();
  console.log("review", review);
  const [similar, setSimilar] = useState([]);
  console.log("similar", similar);
  const navigate = useNavigate();
  const [video,setVideo] = useState();
  console.log('video',video);
  


  const darkmode = useSelector((state)=> state.theme.darkmode)



  useEffect(() => {
    const api_key = "82b3e7e54bf4f2f9076123316bf5bd8c";
    const showData = async () => {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmIzZTdlNTRiZjRmMmY5MDc2MTIzMzE2YmY1YmQ4YyIsIm5iZiI6MTczMzU1ODMwMy44ODksInN1YiI6IjY3NTQwMDFmYjQ2NzU2MGNkNzA1NDM5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._0AzRCATkJTHoyYbdhKnPnvegVsMVE6ceXtD9vxONg4",
        },
      };

      try {
        // const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
        // const imdbId = res.data.imdb_id;
        // console.log("IMDb ID:", imdbId);

        axios.request(options).then((res) => setShow(res.data));

        // const resp = await axios.get(`https://api.themoviedb.org/3/find/${imdbId}?external_source=imdb_id`, options);
        // setShow(resp.data)
      } catch (error) {
        console.error("error", error);
      }
    };

    const showReviews = async () => {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmIzZTdlNTRiZjRmMmY5MDc2MTIzMzE2YmY1YmQ4YyIsIm5iZiI6MTczMzU1ODMwMy44ODksInN1YiI6IjY3NTQwMDFmYjQ2NzU2MGNkNzA1NDM5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._0AzRCATkJTHoyYbdhKnPnvegVsMVE6ceXtD9vxONg4",
        },
      };
      try {
        axios.request(options).then((res) => setReview(res.data.results));
      } catch (error) {
        console.error("error", error);
      }
    };

    const similarResult = async () => {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/similar`,
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmIzZTdlNTRiZjRmMmY5MDc2MTIzMzE2YmY1YmQ4YyIsIm5iZiI6MTczMzU1ODMwMy44ODksInN1YiI6IjY3NTQwMDFmYjQ2NzU2MGNkNzA1NDM5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._0AzRCATkJTHoyYbdhKnPnvegVsMVE6ceXtD9vxONg4",
        },
      };

      try {
        axios.request(options).then((res) => setSimilar(res.data.results));
      } catch (error) {
        console.error("error", error);
      }
    };

    const fetchVideo = async ()=>{
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`,
        // params: { language: "en-US", page: "1" },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmIzZTdlNTRiZjRmMmY5MDc2MTIzMzE2YmY1YmQ4YyIsIm5iZiI6MTczMzU1ODMwMy44ODksInN1YiI6IjY3NTQwMDFmYjQ2NzU2MGNkNzA1NDM5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._0AzRCATkJTHoyYbdhKnPnvegVsMVE6ceXtD9vxONg4'
        }
      };

      try {
      //  await axios.request(options).then((res)=> setVideo(res.data));

      const response = await axios.request(options);
      const result = response.data.results;
      console.log('result',result);

       if(result && result.length > 0){
        setVideo(result[0].key)
       }
       else{
        console.error('No video found for this movie')
       }
      
      } catch (error) {
          console.error('Error fetching video',error);
      }

    }

    fetchVideo();
    showData();
    showReviews();
    similarResult();
  }, [id]);

  const imageUrl = "https://image.tmdb.org/t/p/original/";
  const defaultImg =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fblank-avatar&psig=AOvVaw06IFCC3GEUrl7Bl5IQotoU&ust=1734169871857000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICBmay8pIoDFQAAAAAdAAAAABAT";

    const handleClick = (newId) => {
      const currentId = window.location.pathname.split('/').pop(); 
      if (currentId !== newId) { 
        navigate(`/movie_details/${newId}`);
      }
    };
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <div className="">
        <div
          className="movie_details"
          style={{
            backgroundImage: `url(${imageUrl}${show?.backdrop_path})`,
          }}
        >
          <figure className="m-0">
            <img src={imageUrl + show?.poster_path} alt="" srcset="" />
          </figure>
        </div>
        <div className={`movie_details_text ${darkmode ? "light" : "dark"}`}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                {video ? (
                  <iframe
                 width="700"
                  height="350"
                  src={`https://www.youtube.com/embed/${video}`}
                  title="Movie Trailer"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  ></iframe>

                ): (
                 <p>Loading video....</p>
                )}
              </div>
              <div className="col-12 col-md-12 col-lg-12">
              <h1 className="fw-medium">{show?.original_title}</h1>
              <p className="fw-normal">{show?.overview}</p>
              <p>
                <b>Release Date:</b> <span>{show?.release_date}</span>
              </p>
              <p>
                <b>Language:</b> <span>{show?.spoken_languages[0].name}</span>
              </p>
              <p>
                {" "}
                <b>Rating: </b>
                <span>
                  {Array.from({ length: 5 }, (_, index) => {
                    const fullStar = Math.floor(show?.vote_average / 2);
                    if (index < fullStar) {
                      return (
                        <i
                          key={index}
                          class="bi bi-star-fill"
                          style={{ color: "orange" }}
                        ></i>
                      );
                    } else if (index < show?.vote_average / 2) {
                      return (
                        <i
                          key={index}
                          class="bi bi-star-half"
                          style={{ color: "orange" }}
                        ></i>
                      );
                    } else {
                      return (
                        <i
                          key={index}
                          class="bi bi-star"
                          style={{ color: "gray" }}
                        ></i>
                      );
                    }
                  })}
                  {/* <i class="bi bi-star-fill" style={{color:"orange"}}></i> {show?.vote_average} */}
                </span>
              </p>
              <p>
                <b>Origin Country: </b>
                <span>{show?.production_countries[0].name}</span>
              </p>
              <p>
                <b>Popularity: </b> <span>{show?.popularity}</span>
              </p>
              </div>
            </div>
            <div className="row py-4">
              <h1>Reviews</h1>

              <ul className="review_style">
                {review?.length > 0 ? (
                  <li>
                    <div className="">
                      <p>
                        <figure>
                          {review?.avatar_path == null ? (
                            <img
                              src={_default}
                              alt=""
                              srcset=""
                            />
                          ) : (
                            <img
                              src={
                                imageUrl + review[0]?.author_details.avatar_path
                              }
                              alt=""
                              srcset=""
                            />
                          )}
                        </figure>
                        <b>
                          <h6>{review[0]?.author_details.name || "XYZ"}</h6>
                          <span>
                            {Array.from({ length: 5 }, (_, index) => {
                              const fullStar = Math.floor(
                                review[0]?.author_details.rating / 2
                              );
                              if (index < fullStar) {
                                return (
                                  <i
                                    key={index}
                                    className="bi bi-star-fill"
                                    style={{ color: "orange" }}
                                  ></i>
                                );
                              } else if (
                                index <
                                review[0]?.author_details.rating / 2
                              ) {
                                return (
                                  <i
                                    key={index}
                                    className="bi bi-star-half"
                                    style={{ color: "orange" }}
                                  ></i>
                                );
                              } else {
                                return (
                                  <i
                                    key={index}
                                    className="bi bi-star"
                                    style={{ color: "gray" }}
                                  ></i>
                                );
                              }
                            })}
                          </span>
                        </b>
                      </p>
                      <p style={{ flexDirection: "column", gap: "10px" }}>
                        <span >
                          {review[0]?.content}
                        </span>
                        <span style={{ color: "gray" }}>
                          {review[0]?.created_at
                            ? new Date(
                                review[0]?.created_at
                              ).toLocaleDateString("en-US", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })
                            : "N/A"}
                        </span>
                      </p>
                    </div>
                  </li>
                ) : (
                  <h2 style={{ textShadow: "0 0  Black" }}>No Reviews Found</h2>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className={`similar_content movie_showcase ${darkmode ? "dark" : "light"}`}>
          <div className="container">
            <div className="row">
              <h2>Similar Movie (Based on Genres)</h2>
              {similar.length > 0 ?
              <ul className="inner_showcase">
              {similar?.map((item, index) => {
                return (
                  <li key={index} onClick={()=>handleClick(item?.id)}>
                    <figure className="m-0">
                      <img
                        src={imageUrl + item?.poster_path}
                        alt=""
                        srcset=""
                      />
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
            :
              <h2 className="text-uppercase">No Results Found</h2>
            }
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MovieDetails;
