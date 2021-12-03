import React from 'react'; 
import {Navbar} from 'react-bootstrap';
import {ImStack} from 'react-icons/im';

const Header = props => {


    return (
      <Navbar style={{background: '#0099ff', height: '3.5rem', display: 'flex', justifyContent: 'space-between'}} variant="dark">
       
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Navbar.Brand style={styles.font} href="/welcome">
            <ImStack style={styles.icon} size='35' />
            Coding Race 
          </Navbar.Brand>
        </div>        
      </Navbar> 
    )
}

let styles = { 
  icon: {
    paddingRight: '10px',
    paddingLeft: '5px', 
  },
  font: { 
    fontSize: '20px',
    alignContent: 'center'
  }, 
  links: {
  fontSize: '15px'
  },
  container: {
    justifyContent: 'space-between', 
    alignContent: 'end',
    flexDirection: 'row-reverse', display:'flex'
  }
}

export default Header; 
