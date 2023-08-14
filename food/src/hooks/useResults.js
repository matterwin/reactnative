import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            // await just means do this and only continue on after this line runs, 
            // aka wait for this line to return
            const res = await yelp.get('/search', {
                params: {
                    limit: 50, //makes end-point to be /search?limit=50
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(res.data.businesses);
        } catch(e) {
            console.log(e);
            setErrorMessage('Something went wrong');
        }
    };

    // Call searchApit when component
    // is first rendered. BAD CODE!
    // searchApi('pasta'); causes unnecessary rerenders! bad!

    // useEffect(() => {}) runs every time the component is rendered
    // useEffect(() => {},[]) runs only when the component is first rendered
    // useEffect(() => {},[value]) runs only when the component is first rendered and when the 'value' changes

    useEffect(() => {
        setTerm('pasta');
    },[])  

    return [searchApi, results, errorMessage];
};