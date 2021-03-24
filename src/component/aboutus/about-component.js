import React, {Component} from 'react';
import PageComponent from '../common/pageComponent';
import './About-us.scss';
import { Button } from 'reactstrap';

class AboutUs extends Component{
  render(){
    return(
      <PageComponent classTitle="red-clr" title="About Us">
        <div className="red-clr">
          About us text goes here <br /><br />
          <Button color="success">Success!</Button>
        </div>
      </PageComponent>
      
    )
  }

}

export default AboutUs;