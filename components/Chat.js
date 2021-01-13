import React, { useRef, useState } from "react";
import "@/styles/chat.module.css";
import {
  ChakraProvider,
  extendTheme,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import theme from "@/styles/theme";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { useAuth } from "@/lib/auth";
import LoginModal from "@/components/LoginModal";

import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

function Chat() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = useAuth();
  const myTheme = extendTheme(theme);

  return (
    <ChakraProvider theme={myTheme}>
      <div className="App">
        <header>
          <h1>⚛️🔥💬</h1>
          <LoginModal />
        </header>

        <section>{auth.user ? <ChatRoom /> : <div />}</section>
      </div>
    </ChakraProvider>
  );
}

function ChatRoom() {
  const dummy = useRef();
  const auth = useAuth();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default Chat;
