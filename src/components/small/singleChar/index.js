import React from "react"
import {Link} from 'react-router-dom';
import styles from './index.module.css';

function SingleChar ({ singleCharacters }) {
    return (
        singleCharacters.map((char,index) => {
            return ( 
                <>
                    <div className={styles.single_heading}>
                        <h2>Characters » { char.name }</h2>
                    </div>
                    <div className={styles.single_outer}>
                        <table key={index} className={styles.single_table_outer}>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{ char.name }</td>
                                </tr>
                                <tr>
                                    <td>WikiURL</td>
                                    <td><Link to={ char.wikiUrl }>{ char.wikiUrl }</Link></td>
                                </tr>
                                <tr>
                                    <td>Race</td>
                                    <td>{ char.race }</td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td>{ char.gender }</td>
                                </tr>
                                <tr>
                                    <td>Height</td>
                                    <td>{ char.height }</td>
                                </tr>
                                <tr>
                                    <td>Hair</td>
                                    <td>{ char.hair }</td>
                                </tr>
                                <tr>
                                    <td>Realm</td>
                                    <td>{ char.realm }</td>
                                </tr>
                                <tr>
                                    <td>Birth</td>
                                    <td>{ char.birth }</td>
                                </tr>
                                <tr>
                                    <td>Spouse</td>
                                    <td>{ char.spouse }</td>
                                </tr>
                                <tr>
                                    <td>Death</td>
                                    <td>{ char.death }</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            )})
    )
}
export default SingleChar;