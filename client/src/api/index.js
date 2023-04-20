import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:8080'});
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;  
});
// import jwt_decode from 'jwt-decode';

// const url = 'http://localhost:8080/posts';
//show all the post currently in the database


export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none' }&tags=${searchQuery.tags} `);
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
















// export const createOrGetUser = async (res) => {
//     // console.log(res.credential)
//     const decoded = jwt_decode(res.credential); 
//     const { name, picture, sub } = decoded;
//     const user = {
//         _id: sub,
//         _type: 'user',
//         userName: name,
//         image: picture
//     }
//     // await .post('http://localhost:3000', user);
//     console.log(user);
    
// };