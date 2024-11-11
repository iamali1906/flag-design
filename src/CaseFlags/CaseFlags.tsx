import React, { useState, useEffect } from "react";
import "./CaseFlags.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CaseFlagsDetails, {
  formatFlagDate,
} from "./CaseFlagsDetails/CaseFlagsDetails";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { flagsList } from "./constant";

function CaseFlags() {
  const [upcomingFlag] = useState(flagsList[1]);
  const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
  const timerInterval = 500;

  useEffect(() => {
    const timerCircleElement: HTMLElement | null = document.getElementById("timer-circle");

    const updateTimerBorderColor = () => {
      if (!timerCircleElement) return;

      const borderPositions: Array<"borderTopColor" | "borderLeftColor" | "borderBottomColor" | "borderRightColor"> = [
        "borderTopColor",
        "borderLeftColor",
        "borderBottomColor",
        "borderRightColor",
      ];

      borderPositions.forEach((position) => {
        timerCircleElement.style[position] = "#ccc";
      });

      const activeFlagIndex = currentFlagIndex % flagsList.length;
      const activeColor = flagsList[activeFlagIndex].color;
      timerCircleElement.style[borderPositions[currentFlagIndex % borderPositions.length]] = activeColor;

      setCurrentFlagIndex((prevIndex) => prevIndex + 1);
    };

    const intervalId = setInterval(updateTimerBorderColor, timerInterval);

    return () => clearInterval(intervalId);
  }, [currentFlagIndex]);

  return (
    <div className="case-flags-container">
      <div className="case-flags-header">
        <div className="case-flags-header-left">
          <h2>Case Flags</h2>
          <button className="clear-flag-button">
            <span role="img" aria-label="flag">
              <FontAwesomeIcon icon={faFlag} />
            </span>{" "}
            Clear Flag
          </button>
          <div className="next-flag-details">
            <p>Next Flag: {upcomingFlag.name}</p>
            <h3>{formatFlagDate(upcomingFlag.date)}</h3>
          </div>
        </div>
        <div className="flag-timer">
          <div className="timer-circle" id="timer-circle">
            <div className="timer-text">5h 13min</div>
            <div className="timer-label">until next flag</div>
          </div>
          <button
            className="timer-next-button"
            onClick={() => setCurrentFlagIndex((prevIndex) => (prevIndex + 1) % flagsList.length)}
          >
            Next
          </button>
        </div>
      </div>
      <CaseFlagsDetails />
    </div>
  );
}

export default CaseFlags;
