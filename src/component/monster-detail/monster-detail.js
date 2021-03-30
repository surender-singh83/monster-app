import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageComponent from '../common/pageComponent';
import Loader from '../loader/loader';

function MonsterDetail({ match }) {
  //console.log(match.params.id);
  const [users, setItem] = useState(null);
  const url = `https://jsonplaceholder.typicode.com/users/${match.params.id}`;
  let content = null;
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setItem(response.data);
      })
  }, [url]);
  const pageTitle = {
    fontSize: "22px"
  }
  const detailPage = {
    maxWidth: "1050px",
    margin: "30px auto",
    textAlign: "left"
  }
  const detailsubtextPage = {
    fontSize: "16px",
    color: "#000",
    marginBottom: "20px"
  }
  const title = {
    fontSize: "14px",
    display: "block",
    marginBottom: "5px",
    fontWeight: "700"
  }
  const childElement = {
    fontSize: "13px",
    padding: "0 2px",
    color: "blue"
  }
  const imgStyle = {
    maxWidth: "100%", 
    height: "auto", 
    display: "block"
  }

  if (users) {
    content =
    <PageComponent style={detailPage} title={"Details About " + users.name}>
      <div className="row">
        <div className="col m6">
          <figure style={{ margin: "0" }}>
            <img style={imgStyle} alt={users.name} src={`https://robohash.org/${match.params.id}?set=set2&size=500x500`} />
          </figure>
        </div>
        <div className="col m6">
          <div className="detail-info">
            <h3 style={pageTitle}>{users.name}</h3>
            <div style={detailsubtextPage}>{users.email}</div>
            <div style={detailsubtextPage}>{users.phone}</div>
            <div style={detailsubtextPage}>{users.website}</div>
            <strong style={title}>Company Info</strong>
            <div style={detailsubtextPage}>
              <span style={childElement}>{users.company.name},</span>
  
              <span style={childElement}> {users.company.catchPhrase}</span>
      
            </div>
            <strong style={title}>Address</strong>
            <div style={detailsubtextPage}>
                <span style={childElement}>{users.address.suite},</span>
                <span style={childElement}>{users.address.street},</span> 
                <span style={childElement}>{users.address.city},</span>  
                <span style={childElement}>{users.address.zipcode}</span>
            </div>
          </div>
        </div>
      </div>
      </PageComponent>
  }else {
    content = <div><Loader /></div>
  }


  return (
   <div>
      {content}
    </div>
  )


}

export default MonsterDetail;