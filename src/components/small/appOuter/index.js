import React, {useState, useEffect} from "react"
import AppSearch from "../appSearch";
import CharList from "../charList";
import Pagination from "../pagination";
import backendURL from "../../common/asset";
import styles from './index.module.css';

function AppOuter () {
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState({
        limit:15,
        offset:0,
        page:1,
        pages:1,
        total:1})
    const [search, setSearch] = useState({
        search:"",
        sort:"name:asc",
        race:"",
        gender:""})
    useEffect(() => {
        const fetchData = async () => {
            const allCharacters = await fetch(`${backendURL}character?limit=${page.limit}&page=${page.page}&offset=${((page.page-1)*page.limit)}&sort=${search.sort}&race=${search.race}&gender=${search.gender}&name=/${search.search}/i`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer BfMQ3HhYOrlhdvasiw-T'
                }
            })
            const char = await allCharacters.json();
            setCharacters(char.docs)
            setPage({...page,
                //limit:char.limit,
                offset:char.offset,
                //page:((char.offset/char.limit)+1),
                pages:Math.ceil(char.total/char.limit),
                total:char.total
            })
            setIsLoading(false)
        };
        fetchData();
    }, [page.page , page.limit , search]);

    return (
        <div className={styles.app_outer}>
            <h2>Characters</h2>
            <AppSearch setSearch={setSearch} />
            {isLoading ?  
                <div className={styles.innerpage_center}> Loading </div> :
                <table className={styles.table_outer}>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Race</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                        <CharList characters={characters} />
                    </tbody>
                </table>
            }
            <Pagination page={page} setPage={setPage} />
        </div>
    )
}
export default AppOuter;