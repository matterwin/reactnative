import axios from "axios";

//some people like axios; I like fetch that is built-in with React

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/business',
    headers: {
        Authorization:
        'Bearer 140789234097239FAKEAPIKEYFAKEAPIKEY2348723'
    }
});

//example: yelp.get('/search') its like express with controller and routes