import React, { useState, useEffect } from "react"
import { FormControl, Input } from "@material-ui/core"
import "./App.css"
import Message from "./Message"
import db from "./firebase"
import firebase from "firebase"
import FlipMove from "react-flip-move"
import SendIcon from "@material-ui/icons/Send"
import { IconButton } from "@material-ui/core"

function App() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState("")

  const sendMessage = e => {
    e.preventDefault()

    db.collection("messages").add({
      message: input,
      userName: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("")    
  }

  useEffect(() => {
    setUserName(prompt("Please enter your name"))
  }, [])

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    })
  }, [])

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="fb-messenger-logo" />

      <h1>Message Me</h1>
      <h2>Welcome, {userName}</h2>
      
      <form onSubmit={sendMessage} className="app__form">
        <FormControl className="app__formControl" >
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={e => setInput(e.target.value)} />
          <IconButton className="app__iconButton" type="submit" variant="contained" color="primary" disabled={!input}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({ message, id }) => (
            <Message key={id} userName={userName} data={message} />
            ))
        }
      </FlipMove>

    </div>
  )
}

export default App
