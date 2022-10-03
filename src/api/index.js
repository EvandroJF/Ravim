import axios from 'axios';

const API_URL = 'https://zmm27qb4hj.execute-api.sa-east-1.amazonaws.com/dev/';

function getHeaders() {
  return {
    'Content-Type': 'application/json',
    'x-api-key': 'W6MNxo9TtK4iMK5rnxCqX38mwWvqr5Z4AAyo44X0',
    token: '067d9a68953999bb39b9a90390a03cd8029d',
  };
}

export const API = axios.create({
  baseURL: 'https://zmm27qb4hj.execute-api.sa-east-1.amazonaws.com/dev/',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'W6MNxo9TtK4iMK5rnxCqX38mwWvqr5Z4AAyo44X0',
    token: '067d9a68953999bb39b9a90390a03cd8029d',
  },
});

// export const createSession = async (email, password) => {
//   return api.post('df628132-e7a0-4e9f-9990-22a57c99cd46', { email, password });
// };

export const loginss = async (email, password) => {
  const myHeaders = new Headers();
  myHeaders.append('x-api-key', '');
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      user: email,
      pwd: password,
    }),
    redirect: 'follow',
  };
  const req = await fetch('', requestOptions);
  const json = await req.json();
  return json;
};

export const postBusiness = async (
  name,
  email,
  description,
  document,
  hodelName,
  holderDocument,
  bank,
  branchNumber,
  branchCheckDigit,
  accountCheckDigit,
  typeBankAccount
) => {
  // const myHeaders = new Headers();
  // myHeaders.append('x-api-key', '');
  const requestOptions = {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      name,
      email,
      description,
      document,
      holder_name: hodelName,
      holder_document: holderDocument,
      bank,
      branch_number: branchNumber,
      branch_check_digit: branchNumber,
      account_number: branchCheckDigit,
      account_check_digit: accountCheckDigit,
      type_bank_account: typeBankAccount,
    }),
    redirect: 'follow',
  };
  const req = await fetch(`https://qnoq4lz6ub.execute-api.us-east-1.amazonaws.com/prod/business`, requestOptions);
  const json = await req.json();
  return json;
};

export const getBusiness = async () => {
  try {
    const headers = getHeaders();
    const response = await API.get(`companys`, {
      headers,
    });

    return response.data.data;
  } catch (error) {
    console.log('erro getTransactionsById: ', error);
    return false;
  }
};

export const deleteBusiness = async (id) => {
  const headers = getHeaders();
  const requestOptions = {
    method: 'DELETE',
    headers,
    redirect: 'follow',
  };
  const req = await fetch(
    `https://qnoq4lz6ub.execute-api.us-east-1.amazonaws.com/prod/business?id=${id}`,
    requestOptions
  );
  const json = await req.json();
  return json;
};

export const putBusiness = async (name, email, description, id) => {
  // const headers = getHeaders();
  // const requestOptions = {
  //   method: 'PUT',
  //   headers,
  //   body: JSON.stringify({
  //     name,
  //     email,
  //     description,
  //   }),
  //   redirect: 'follow',
  // };
  // const req = await fetch(
  //   `https://qnoq4lz6ub.execute-api.us-east-1.amazonaws.com/prod/business/details?id=${id}`,
  //   requestOptions
  // );
  // const json = await req.json();
  // return json;
  const body = {
    name,
    email,
    description,
  };

  try {
    const response = await API.put(
      `https://qnoq4lz6ub.execute-api.us-east-1.amazonaws.com/prod/business/details?id=${id}`,
      body
    );
    return response.data;
  } catch (error) {
    console.log('getRequest: ', error);
    return null;
  }
};
