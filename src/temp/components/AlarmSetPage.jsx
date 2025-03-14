"use client";
import React from "react";
import styles from "./AlarmSetPage.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const AlarmSetPage2 = ({ alarms, setAlarms }) => {
  const [fromHour, setFromHour] = useState("08");
  const [fromMin, setFromMin] = useState("00");
  const [untilHour, setUntilHour] = useState("09");
  const [untilMin, setUntilMin] = useState("30");
  const handle = (event, handler) => {
    event.preventDefault();
    const newVal = event.target.value;
    handler(Number(newVal) > 9 ? newVal : `0${newVal}`);
  };
  const handleOK = () => {
    console.log(alarms);
    setAlarms(
      alarms.concat({
        id: alarms.length,
        start: `${fromHour}:${fromMin}`,
        end: `${untilHour}:${untilMin}`,
      })
    );
    navigate("/");
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
          <Form>
            <Form.Group
              className={styles.keyboardPicker}
              style={{ paddingTop: "2rem" }}
              controlId="formBasicEmail"
            >
              <Form.Label
                className={styles.pickerHeader}
                style={{ paddingLeft: "2rem" }}
              >
                Enter wake up period
              </Form.Label>
              <div className={styles.timeLabel}>From</div>
              <div className={styles.timeLabel}>From</div>
              <div className={styles.inputSelection}>
                <div
                  className={styles.timeSelector}
                  style={{ width: "15rem", display: "flex" }}
                >
                  <div className={styles.timeField}>
                    <Form.Control
                      className={styles.activeInputField}
                      type="number"
                      value={fromHour}
                      max="23"
                      min="00"
                      onChange={({ target }) => setFromHour(target.value)}
                    />
                    <Form.Text
                      className={styles.timeLabel}
                      style={{ marginTop: "10px" }}
                    >
                      Hour
                    </Form.Text>
                  </div>
                </div>
                <div className={styles.separator}>:</div>
                <div
                  className={styles.timeSelector}
                  style={{ width: "15rem", display: "flex" }}
                >
                  <div className={styles.timeField}>
                    <Form.Control
                      className={styles.activeInputField}
                      type="number"
                      value={fromMin}
                      max="23"
                      min="00"
                      onChange={(e) => handle(e, setFromMin)}
                    />
                    <Form.Text className={styles.timeLabel}>Minute</Form.Text>
                  </div>
                </div>
              </div>
              <Form.Label
                className={styles.timeLabelUntil}
                style={{ paddingLeft: "2rem" }}
              >
                Until
              </Form.Label>
              <div className={styles.timeLabel}>Until</div>
              <div className={styles.inputSelection}>
                <div
                  className={styles.timeSelector}
                  style={{ width: "15rem", display: "flex" }}
                >
                  <div className={styles.timeField}>
                    <Form.Control
                      className={styles.activeInputField}
                      type="number"
                      value={untilHour}
                      max="23"
                      min="00"
                      onChange={({ target }) => setUntilHour(target.value)}
                    />
                    <Form.Text className={styles.timeLabel}>Hour</Form.Text>
                  </div>
                </div>
                <div className={styles.separator}>:</div>
                <div
                  className={styles.timeSelector}
                  style={{ width: "15rem", display: "flex" }}
                >
                  <div className={styles.timeField}>
                    <Form.Control
                      className={styles.activeInputField}
                      type="number"
                      value={untilMin}
                      max="23"
                      min="00"
                      onChange={(e) => handle(e, setUntilMin)}
                    />
                    <Form.Text
                      className={styles.timeLabel}
                      style={{ padding: "2rem" }}
                    >
                      Minute
                    </Form.Text>
                  </div>
                </div>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.secondaryButton}>
                  <div
                    className={styles.buttonContent}
                    onClick={() => navigate("/")}
                  >
                    Cancel
                  </div>
                </div>
                <div className={styles.primaryButton}>
                  <div className={styles.buttonContent} onClick={handleOK}>
                    OK
                  </div>
                </div>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

const AlarmSetPage = () => {
  const [fromHour, setFromHour] = useState("08");
  const [fromMin, setFromMin] = useState("00");
  const [untilHour, setUntilHour] = useState("09");
  const [untilMin, setUntilMin] = useState("30");
  const handle = (event, handler) => {
    event.preventDefault();
    handler(event.target.value);
  };
  const handleOK = () => {
    navigate("/");
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
                  <div className={styles.timeText}>
                    <form>
                      <input
                        className={styles.inputForm}
                        type="text"
                        value={untilHour}
                        maxLength={2}
                        onChange={(e) => handle(e, setUntilHour)}
                      ></input>
                    </form>
                  </div>
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
                      value={untilMin}
                      maxLength={2}
                      onChange={(e) => handle(e, setUntilMin)}
                    ></input>
                  </form>
                </div>
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
              <div className={styles.buttonContent} onClick={handleOK}>
                OK
              </div>
            </div>
          </div>
        </div>
        <div className={styles.alarmSoundMenu2}></div>
      </div>
    </div>
  );
};

export default AlarmSetPage;
