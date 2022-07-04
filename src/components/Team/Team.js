import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Team.css'

const Team = (props) => {
    const {name, face, gender, company, email, country, salary} = props.team

    const element = <FontAwesomeIcon icon={faUser}/>
    return (
        <div className='team'>
            <img src={face} alt="" />
            <h5>Name: {name}</h5>
            <h5>gender: {gender}</h5>
            <h5>Company: {company}</h5>
            <h5>Email: {email}</h5>
            <h5>Country: {country}</h5>
            <h5>Salary: ${salary}</h5>
            <div onClick={() => props.addPlayer(props.team)} className='button'><button>{element} Select Player</button></div>
        </div>
    );
};

export default Team;