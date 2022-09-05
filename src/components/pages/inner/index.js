import React, {useState,useEffect} from "react";
import {useParams} from 'react-router-dom';
import Header from '../../common/header';
import SingleChar from '../../small/singleChar';
import backendURL from "../../common/asset";
import styles from './index.module.css';

function InnerPage () {
    const [singleCharacters, setSingleCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        const fetchSingleData = async () => {
            const singleCharacters = await fetch(`${backendURL}character/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer BfMQ3HhYOrlhdvasiw-T'
                }
            })
            const char = await singleCharacters.json();
            setSingleCharacters(char.docs)
            setIsLoading(false)
        };
        fetchSingleData();
    }, []);
    console.log(singleCharacters)
    return (
        <>
            <div className={styles.innerpage_outer}>
                <Header />
                {isLoading ?  
                    <div className={styles.innerpage_center}> Loading </div> :
                    <SingleChar singleCharacters={singleCharacters} />
                }
            </div>
        </>
    )
}
export default InnerPage;