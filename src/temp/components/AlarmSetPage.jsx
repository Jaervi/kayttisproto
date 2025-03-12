"use client";
import React from "react";
import styles from "./AlarmSetPage.module.css";
import { useNavigate } from "react-router-dom";
import { Alarms } from "./SettingsScreen/SettingsScreen";
import { useState } from "react";

const AlarmSetPage = () => {
  const [fromHour, setFromHour] = useState("08");
  const [fromMin, setFromMin] = useState("00");
  const handle = (event, handler) => {
    event.preventDefault();
    handler(event.target.value);
  };
  const navigate = useNavigate();
  return (
    <div className={styles.alarmPageContainer}>
      <div className={styles.backgroundContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.headerContainer}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a8c7d2f80eb5c331159f8fbffa49259337b415f137e959c4146803f791e9cc9?placeholderIfAbsent=true"
              className={styles.headerIcon}
              alt="Alarm icon"
              onClick={() => navigate("/")}
            />
            <div className={styles.headerTitle}>New alarm</div>
          </div>

          <div className={styles.keyboardPicker}>
            <div className={styles.pickerHeader}>Enter wake-up period</div>
            <div className={styles.timeLabel}>From</div>

            <div className={styles.inputSelection}>
              <div className={styles.timeSelector}>
                <div className={styles.timeField}>
                  <div className={styles.activeInputField}>
                    <form>
                      <input
                        className={styles.inputForm}
                        type="text"
                        value={fromHour}
                        maxLength={2}
                        onChange={(e) => handle(e, setFromHour)}
                      ></input>
                    </form>
                  </div>
                  <div className={styles.timeLabel}>Hour</div>
                </div>

                <div className={styles.separator}>:</div>

                <div className={styles.timeField}>
                  <div className={styles.activeInputField}>
                    <form>
                      <input
                        className={styles.inputForm}
                        type="text"
                        value={fromMin}
                        maxLength={2}
                        onChange={(e) => handle(e, setFromMin)}
                      ></input>
                    </form>
                  </div>
                  <div className={styles.timeLabel}>Minute</div>
                </div>
              </div>
            </div>
            <div className={styles.timeLabelUntil}>Until</div>
          </div>

          <div className={styles.inputSelectionUntil}>
            <div className={styles.timeSelector}>
              <div className={styles.timeField}>
                <div className={styles.activeInputField}>
                  <div className={styles.timeText}>9</div>
                </div>
                <div className={styles.timeLabel}>Hour</div>
              </div>

              <div className={styles.separator}>:</div>

              <div className={styles.timeField}>
                <div className={styles.activeInputField}>30</div>
                <div className={styles.timeLabel}>Minute</div>
              </div>
            </div>
          </div>

          <div className={styles.iconButton}>
            <div className={styles.iconContainer}>
              <div className={styles.stateLayer}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cb65b877b0392232ab53c56c7bdbb994322bc4a7600780bd738dbf5f33b4caa?placeholderIfAbsent=true"
                  className={styles.actionIcon}
                  alt="Action icon"
                />
              </div>
            </div>
          </div>

          <div className={styles.actionButtons}>
            <div className={styles.secondaryButton}>
              <div
                className={styles.buttonContent}
                onClick={() => console.log("cancel")}
              >
                Cancel
              </div>
            </div>
            <div className={styles.primaryButton}>
              <div
                className={styles.buttonContent}
                onClick={() => navigate("/")}
              >
                OK
              </div>
            </div>
          </div>
        </div>
        <div className={styles.alarmSoundMenu2}>
          <Alarms />
        </div>
      </div>
    </div>
  );
};

export default AlarmSetPage;
