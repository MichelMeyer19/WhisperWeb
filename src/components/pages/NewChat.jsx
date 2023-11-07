import React from "react";
import {useState} from 'react';

import {TopicList} from '../molecules/TopicList.jsx';
import {NewChatButton} from "../atoms/newChatButton";

// define array that contains most relevant topics
let initialTopics = [
  {id: "0", topic_name: "Family Relationships", isClicked: false},
  {id: "1", topic_name: "Anxiety", isClicked: false},
  {id: "2", topic_name: "Stress", isClicked: false},
  {id: "3", topic_name: "Imposter Syndrome", isClicked: false},
  {id: "4", topic_name: "Future", isClicked: false},
  {id: "5", topic_name: "Friends", isClicked: false},
  {id: "6", topic_name: "University", isClicked: false},
  {id: "7", topic_name: "Career", isClicked: false},
  {id: "8", topic_name: "Counselling", isClicked: false},
  {id: "9", topic_name: "Dating", isClicked: false},
  {id: "10", topic_name: "Self Care", isClicked: false},
  {id: "11", topic_name: "Homesickness", isClicked: false},
  {id: "12", topic_name: "Self-Image", isClicked: false},
  {id: "13", topic_name: "Clubs", isClicked: false},
  {id: "14", topic_name: "Campus Life", isClicked: false}
];

import {TopicList} from '../organisms/TopicList.jsx';
import newChatButton from "../atoms/newChatButton.jsx";

export const NewChat = () => {

  // define state that contains most relevant topics
  const [topics, setTopics] = useState(initialTopics);

  return (
    <>
      <h1>New Chat</h1>
      <main>
        <div className="space-y-4">
          <TopicList 
          topics={topics} 
          setTopics={setTopics}/>

          <div>
            <NewChatButton
              text = "Request Themed Chat"
              topics = {topics}
            />
            <NewChatButton
              text = "Request General Chat"
              topics = {''}
            />
          </div>
        </div>
      </main>
    </>
  );
};
