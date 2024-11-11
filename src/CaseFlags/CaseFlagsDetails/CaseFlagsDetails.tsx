import React, { useState } from "react";
import "./CaseFlagsDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { format, isToday } from "date-fns";
import { flagsList as currentFlagsList, flagsHistoryList } from "../constant";

export const formatFlagDate = (flagDate: Date) => {
  const formattedDate = format(flagDate, "M/d/yyyy 'at' h:mm a");
  return isToday(flagDate)
    ? `Today at ${format(flagDate, "h:mm a")}`
    : formattedDate;
};

function CaseFlagsDetails() {
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(true);
  const [activeFlagsList, setActiveFlagsList] = useState(currentFlagsList);
  const [isCurrentFlagsActive, setIsCurrentFlagsActive] = useState(true);

  const handleTabSwitch = (shouldShowCurrentFlags: boolean) => {
    setIsCurrentFlagsActive(shouldShowCurrentFlags);
    setActiveFlagsList(
      shouldShowCurrentFlags ? currentFlagsList : flagsHistoryList
    );
  };

  return (
    <div className="case-flags-details">
      <div
        className="case-details-header"
        onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
      >
        <FontAwesomeIcon
          className={isDetailsExpanded ? "icon-expanded" : "icon-collapsed"}
          icon={faAngleDown}
        />
        <span>Case Flags Details</span>
      </div>
      {isDetailsExpanded && (
        <div>
          <div className="tab-navigation">
            <button
              className={isCurrentFlagsActive ? "active-tab" : ""}
              onClick={() => handleTabSwitch(true)}
            >
              Current Timings
            </button>
            <button
              className={!isCurrentFlagsActive ? "active-tab" : ""}
              onClick={() => handleTabSwitch(false)}
            >
              Case Flags History
            </button>
          </div>
          <div className="flag-list">
            {activeFlagsList.map((flagItem, index) => (
              <div key={index} className="flag-item">
                <span
                  className={`flag-icon icon-color-${index + 1}`}
                  role="img"
                  aria-label="flag"
                >
                  <FontAwesomeIcon icon={flagItem.icon} />
                </span>
                <div className="flag-details">
                  <p>{flagItem.name}</p>
                  <span>{formatFlagDate(flagItem.date)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CaseFlagsDetails;
