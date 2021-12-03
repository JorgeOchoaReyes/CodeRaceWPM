import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap'; 

const LangOptions = props => {

    const List = ['React.js', 'C++', 'Python', 'JavaScript'];
    
    const mouseEnter = e => {
       document.getElementById(e.target.id).style.backgroundColor = 'green'; 
       return; 
    }

    const mouseExit = e => {
        document.getElementById(e.target.id).style.backgroundColor ='#ff6600';
        return; 
    }

    return(
        <> 
            <ButtonGroup  className="mb-2">
                {List.map((i) => <Button 
                                    id={i}    
                                    size='lg' 
                                    style={ { fontFamily: 'consolas', backgroundColor: '#ff6600', border: '0px'}} 
                                    name={i} 
                                    variant='primary' 
                                    onMouseEnter={(e) => mouseEnter(e)}
                                    onMouseLeave={(e) => mouseExit(e)}
                                    onClick={e => {
                                        props.langChangeHandle(e);
                                        
                                        }} > {i} </Button>)}
            </ButtonGroup>
        </> 
    );
}


export default LangOptions; 