import React, { Component } from "react";
import { Chat, addResponseMessage } from "react-chat-popup";

class MyChat extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  };

  render() {
    return (
      <div className="App">
        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />
      </div>
    );
  }
}

export default MyChat;
