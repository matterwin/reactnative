import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults(); //custom hook for reuseability
  
    const filterResultsByPrice = () => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return ( 
        // can just use empty component <></> and wrap it around everything
        // or another method is using flex:
        // if you have content cut off, try using flex
        // flex 1 tells the component to fill the max of the visible space available
        <View style={{ flex: 1 }}> 
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective" 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricier"
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title="Big Spender"
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;