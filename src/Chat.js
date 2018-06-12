import React, { Component } from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForum from './MessageForum'

class Chat extends Component {
    constructor(){
        super()
        this.state = {
             message: [
                { id: 1, userName: 'dstrus', body: 'Chatting up a storm, yo!' },
                { id: 2, userName: 'dpalazzo', body: 'This guy is so annoying. I hate my job.' },
              ]
        }
    }
  render() {
    return (
      <div className="Chat">
        <ChatHeader/>
        <MessageList messages={this.state.message} />
        <MessageForum/>
      </div>
    )
  }
}

export default Chat