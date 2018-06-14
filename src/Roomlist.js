
import React from 'react'
import {StyleSheet, css } from 'aphrodite'


const Roomlist = (props) => {
    return (
        <nav className={`RoomList ${css(styles.nav)}`}>
                <h2  className={css(styles.h2)}>rooms</h2>
                <ul className={css(styles.ul)}>
                {props.channels.map(channel => 
                <li className={css(styles.li)}>General
                <a href='#' onClick={ () => props.changeChannel(channel)} className={css(styles.a)}>{channel}</a>
                </li>)}
                </ul>
                 <button onClick={ () => props.addChannel('test')} className={css(styles.button)}>Add Room</button> 
        </nav>
    )
}
const styles= {
  nav: {
    padding: '0 1rem',
  },
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

    '::before': {
      content: '"# "',
    },

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }
},

button: {
  fontSize: '1.5rem',
  backgroundColor: '#1A8FE3',
  color: 'white',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  borderTopRightRadius: '0.5rem',
  borderBottomRightRadius: '0.5rem',
  borderTopLeftRadius: '0.5rem',
  borderBottomLeftRadius: '0.5rem',
  border: '1px solid white',

  ':hover': {
    cursor: 'pointer',
  },
},
  
}

export default Roomlist