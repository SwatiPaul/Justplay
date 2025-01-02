import React, { useState, useEffect } from "react";

const Account = () => {

    const [account,setAccount] = useState();
    console.log('account',account);
  useEffect(() => {
    const getAccountDetails = async () => {
      const apiKey = "82b3e7e54bf4f2f9076123316bf5bd8c";

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
      window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}`;
      

      // Step 2: Validate the request token (user must log in)
      // Redirect user to: `https://www.themoviedb.org/auth/access?request_token=${requestToken}`

      // After user authorizes, create a session ID

     const options2 = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmIzZTdlNTRiZjRmMmY5MDc2MTIzMzE2YmY1YmQ4YyIsIm5iZiI6MTczMzU1ODMwMy44ODksInN1YiI6IjY3NTQwMDFmYjQ2NzU2MGNkNzA1NDM5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._0AzRCATkJTHoyYbdhKnPnvegVsMVE6ceXtD9vxONg4'
        }
      };
      const sessionResponse = await fetch(
        'https://api.themoviedb.org/3/authentication/session/new',options2,
        
      );
      const sessionData = await sessionResponse.json();
      const sessionId = sessionData.session_id;
      console.log('sessionData',sessionData);


      // Step 3: Get account details
      const accountResponse = await fetch(
        `https://api.themoviedb.org/3/account?api_key=${apiKey}&session_id=${sessionId}`
      );
      console.log("accountResponse", accountResponse);

      const accountData = await accountResponse.json();
      const accountId = accountData.id;
      setAccount(accountId);

      console.log("Session ID:", sessionId);
      console.log("Account ID:", account);
    };

    getAccountDetails();
  }, []);

  return (
    <>
      <div className=""></div>
    </>
  );
};

export default Account;
