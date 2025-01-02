import React, { useState, useEffect } from "react";

const Authenticate = () => {

    useEffect(() => {
        const authenticate = async () => {
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmIzZTdlNTRiZjRmMmY5MDc2MTIzMzE2YmY1YmQ4YyIsIm5iZiI6MTczMzU1ODMwMy44ODksInN1YiI6IjY3NTQwMDFmYjQ2NzU2MGNkNzA1NDM5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._0AzRCATkJTHoyYbdhKnPnvegVsMVE6ceXtD9vxONg4'
                }
              };
        
              // Step 1: Create a request token
              const tokenResponse = await fetch(
                'https://api.themoviedb.org/3/authentication/token/new',options
              );
              const tokenData = await tokenResponse.json();
              const requestToken = tokenData.request_token;
              console.log('tokenData',tokenData);
            //   window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}`;
        //   const tokenData = await tokenResponse.json();
          if (!tokenData.success) {
            console.error("Failed to generate request token:", tokenData);
            return;
          }
    
        //   const requestToken = tokenData.request_token;
        //   console.log("Request Token:", requestToken);
    
          // Step 2: Redirect user to TMDb authentication page
        //   window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}`;
        };
    
        authenticate();
      }, []);
  return (
    <>
    {/* <div>Redirecting to TMDb for authentication...</div> */}
    </>
  )
}

export default Authenticate