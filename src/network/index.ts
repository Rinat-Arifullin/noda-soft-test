const baseURL = 'https://jsonplaceholder.typicode.com';

export const getUserByIdRequest = async (id: number) => {
  return fetch(`${baseURL}/users/${id}`);
};
