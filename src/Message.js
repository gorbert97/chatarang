import React from 'react'
import Avatar from './Avatar';

const Message = (props) => {
  return (
    <div className="Message" style={styles.message}>
     <Avatar />
      {props.message.userName}: {props.message.body}
    </div>
  )
}

const styles = {
  message: {
    display: 'flex',
  marginTop: '1rem',
  padding: '0 1rem',
  },

  details: {
    flex: 1,
  paddingLeft: '0.5rem',
  },
}

export default Message