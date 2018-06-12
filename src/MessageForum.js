import React from 'react'

const MessageForum = (props)=>{

    return (
        <form className="MessageForum">
          <input type="text" name="body" placeholder="type a message ..." />
          <button type="submit">Send </button>
        </form>
      )
}

export default MessageForum