import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch(action.type){
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            })
        case 'delete_blogpost': //just filtering and returning the correct blogpost
            return state.filter(blogPost => blogPost.id !== action.payload);
        case 'add_blogpost':
            return [
                ...state, 
                { 
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content 
                }
            ];
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: { title, content } });
        if(callback){
            callback();
        }
    };
};

//api example
// const addBlogPost = dispatch => {
//     return (title, content, callback) => {
//         try {
//             await axios.post('fasefes', title, content);
//             dispatch({ type: 'add_blogpost', payload: { title, content } });
//             callback();
//         } catch (error) {
//             //perform error state and let user know
//         }
//     };
// };

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id });
    };
};

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({ 
            type: 'edit_blogpost', 
            payload: { id, title, content } 
        });
        if(callback){
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ title: 'TEST POST', content: 'TEST CONTENT', id: 1 }]
);