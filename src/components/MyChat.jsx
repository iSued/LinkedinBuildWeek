import React, { Component } from "react";
import { Chat, addResponseMessage } from "react-chat-popup";

class MyChat extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
  };

  render() {
    return (
      <div className="App">
        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
          title="LinedIn Chat"
        />
      </div>
    );
  }
}

export default MyChat;
