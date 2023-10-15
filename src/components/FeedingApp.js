import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from './ThemeContext';


export default function FeedingApp() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerDisplay, setTimerDisplay] = useState("00:00");
  const [feedingSide, setFeedingSide] = useState("None");
  const [feedingHistory, setFeedingHistory] = useState([]);
  const navigate = useNavigate(); 
  const [feedingSessions, setFeedingSessions] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    let timerInterval;
    if (isTimerRunning) {
      timerInterval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [isTimerRunning]);

  useEffect(() => {
    const minutes = Math.floor(timer / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timer % 60).toString().padStart(2, "0");
    setTimerDisplay(`${minutes}:${seconds}`);
  }, [timer]);

  const toggleTimer = () => {
    if (isTimerRunning) {
      const newSession = {
        id: uuidv4(),
        date: new Date(),
        duration: timer,
        side: feedingSide,
      };
      setFeedingHistory([...feedingHistory, newSession]);
      localStorage.setItem(
        "feedingHistory",
        JSON.stringify([...feedingHistory, newSession])
      );
    }
    setIsTimerRunning(!isTimerRunning);
  };

  const chooseFeedingSide = (side) => {
    setFeedingSide(side);
  };

  return (
    <div className={`app-container ${theme}`}>
    
      <div id="timerContainer">
        <p id="timerDisplay">{timerDisplay}</p>
        <button id="timerButton" onClick={toggleTimer}>
          {isTimerRunning ? "Stop" : "Start"}
        </button>
        <div id="feedingSideButtons">
          <button
            className="sideButton"
            onClick={() => chooseFeedingSide("Left")}
          >
            Left
          </button>
          <button
            className="sideButton"
            onClick={() => chooseFeedingSide("Both")}
          >
            Both
          </button>
          <button
            className="sideButton"
            onClick={() => chooseFeedingSide("Right")}
          >
            Right
          </button>
        </div>
        <p>Current side: {feedingSide}</p>
      </div>
    
    </div>
  );
}
