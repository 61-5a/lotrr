import React from "react"
import {Link} from 'react-router-dom';
import styles from './index.module.css';

function CharList ({ characters }) {
    return (
        characters.map((char,index) => {
            return ( 
            <tr className={styles.list_outer} key={ index+1 }>
                <td>{ index+1 }</td>
                <td>{ char.name }</td>
                <td>{ char.race }</td>
                <td>{ char.gender }</td>
                <td><Link to={`/${char._id}`}>Details →</Link></td>
            </tr>
        )})
    )
}
export default CharList;