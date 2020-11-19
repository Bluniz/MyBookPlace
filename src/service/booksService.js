import api from './api';



export function getBooks(term){

  return api.get(`/volumes?q=${term}`).then(response=>{
    console.log('data')
    console.log(response.data.items);
  })
};


export function getBook(id){

  return api.get(`/volumes/${id}`)
}