import React from 'react';
import '../card/card-styles.css';
import { Link } from 'react-router-dom';


export const Card = props => (
  <div className="card-container">
    <img alt={props.monster.name} src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
    <h5>{props.monster.name}</h5>
    <p>{props.monster.email}</p>
    <Link to={`monsters-detail/${props.monster.id}`}>View</Link>
  </div>
);