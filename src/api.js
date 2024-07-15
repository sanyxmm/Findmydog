//Change the URL for the backend server where the nodejs files are hosted.
const API_URL = 'http://localhost:5000/api/';

//API call for Sign Up user, returns the response from the API.
export const signup = async (formData) => {    //Takes form data from Reg.jsx file
  const response = await fetch(`${API_URL}auth/signup`, {    //URL for Signup API
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)    //Sends the form data to the API via request body
  });

  return response.json();
};

//API call for Sign In user.
export const signin = async (email, password) => {
  const response = await fetch(`${API_URL}auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  return response.json();
};

export const getUserDetails = async (ID) => {
  const response = await fetch(`${API_URL}auth/getUserData/${ID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const registerPet = async (formData) => {    //Takes form data from Reg.jsx file
  const response = await fetch(`${API_URL}registerPet/InsertPetDetails`, {    //URL for Signup API
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)    //Sends the form data to the API via request body
  });

  return response.json();
};


