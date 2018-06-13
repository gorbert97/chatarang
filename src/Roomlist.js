
import React from 'react'

const Roomlist = (props) => {
    return (
        <nav className="Roomlist" style ={props.style}>
                <h2 style={styles.h2}>rooms</h2>
                <ul style={styles.ul}>
                <li style={styles.li}>General<a href="#" style={styles.a}>{props.room1}</a></li>
                <li style={styles.li}>Sweaty-Basement-Dwellers<a href="#" style={styles.a}>{props.room2}</a></li>
                </ul>
        </nav>
    )
}
const styles= {
 h2: {
    fontSize: '1rem',
  },
  
 ul: {
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
  },
  
  li: {
    marginBottom: '0.5rem',
  },
  a: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',
},
  
}

export default Roomlist