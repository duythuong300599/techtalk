import { sendGet } from "../utils/axios";

// export const getUser = () => sendGet('/users');

const dataUsers = (() => {
  const data = [];
  for(let i = 0; i < 100 ; i= i + 1 ){
    data.push({
      id: i,
      name: `John Doe ${i + 1}`,
      username: `john.doe.${i+1}`,
      email: `john.doe.${i+1}@gmail.com`,
      address: `Address ${i + 1}`,
      is_active: Math.floor(Math.random() * 100) % 2 === 0,
      avatar: 'avatar'
    });
  }

  return data;
})();

export const getUser =() =>  Promise.resolve({
  data: dataUsers,
  error: null,
  message: ''
});