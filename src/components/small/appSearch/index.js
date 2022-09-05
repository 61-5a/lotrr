import { useState } from 'react';
import React from 'react';
import { Input, Select, Button } from 'antd';
import styles from './index.module.css';

function AppSearch ({ setSearch }) {
    const [formData, setFormData] = useState({
        search:"",
        race:[],
        sort:"name:asc",
        gender:""})
    const { Search } = Input;
    const { Option } = Select;
    const onSearch = (value) => setFormData({ ...formData, search: value, });
    const onSort = (value) => setFormData({ ...formData, sort: value, });
    const onRace = (value) => setFormData({ ...formData, race: value, });
    const onGender = (value) => setFormData({ ...formData, gender: value, });
    const submit = () => {
        if(!formData.search == "") {
            setSearch({ ...formData, search:formData.search });
        }
        if(!formData.sort == "") {
            setSearch({ ...formData, sort:formData.sort });
        }
        if(!formData.race == "") {
            setSearch({ ...formData, race:formData.race });
        }
        if(!formData.gender == "") {
            setSearch({ ...formData, gender:formData.gender });
        }
    }
    return (
        <>
            {/* <div>Search {formData.search} <br />
            sort {formData.sort} <br />
            race {formData.race} <br />
            gender {formData.gender} <br /><br /> </div> */}

            <div className={styles.search_outer_one}>
                <span>
                    <span>Search</span><Search
                        placeholder="Search here.."
                        onSearch={onSearch}
                        style={{
                            width: '80%',
                        }}
                        />
                </span>
                <span>
                    <span>Sort By</span><Select
                    style={{
                        width: '40%',
                    }}
                    value={formData.sort}
                    onChange={onSort}
                    >
                        <Option value="name:asc">by name asc</Option>
                        <Option value="name:desc">by name desc</Option>
                    </Select>
                </span>
            </div>
            <div className={styles.search_outer_two}>
                <span className={styles.one}>
                    <span>Race</span><Select
                        mode="multiple"
                        placeholder="Please select"
                        value={formData.race}
                        onChange={onRace}
                        style={{
                        width: '78.5%',
                        }}
                    >
                        <Option value="">Any</Option>
                        <Option value="Human">Human</Option>
                        <Option value="Elf">Elf</Option>
                        <Option value="Dwarf">Dwarf</Option>
                        <Option value="Hobbit">Hobbit</Option>
                        <Option value="Maiar">Maiar</Option>
                        <Option value="Orcs">Orcs</Option>
                        <Option value="Dragon">Dragon</Option>
                        <Option value="Elves">Elves</Option>
                        <Option value="Half-elven">Half Elven</Option>
                    </Select>
                </span>
                <span className={styles.two}>
                    <span>Gender</span><Select
                    value={formData.gender}
                    onChange={onGender}
                    style={{
                        width: '60%',
                    }}
                    >
                        <Option value="">Any</Option>
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                    </Select>
                </span>
                <span className={styles.three}>
                    <Button onClick={submit} >SUBMIT</Button>
                </span>
            </div>
        </>
    )
}
export default AppSearch;