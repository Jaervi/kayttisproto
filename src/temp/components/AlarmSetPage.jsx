"use client";
import React from "react";
import styles from "./AlarmSetPage.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Form from "react-bootstrap/Form";

export const AlarmSetPage2 = ({ alarms, setAlarms }) => {
  const [fromHour, setFromHour] = useState("08");
  const [fromMin, setFromMin] = useState("00");
  const [untilHour, setUntilHour] = useState("09");
  const [untilMin, setUntilMin] = useState("30");
  const [minBefore, setMinBefore] = useState("00");
  const [check, setCheck] = useState(false);
  const handleMin = (event, handler, cur) => {
    event.preventDefault();
    const newVal = event.target.value;
    const num = Number(newVal);
    handler(num < 60 && num >= 0 ? newVal : cur);
  };
  const handleHour = (handler, value, cur) => {
    handler((value < 24) & (value >= 0) ? value : cur);
  };
  const handleOK = () => {
    const checkStart =
      Number(minBefore) > Number(untilMin)
        ? `${Number(untilHour) - 1}:${
            Number(untilMin) + (60 - Number(minBefore))
          }`
        : `${untilHour}:${Number(untilMin) - Number(minBefore)}`;
    setAlarms(
      alarms.concat({
        id: alarms.length,
        start: check ? checkStart : `${fromHour}:${fromMin}`,
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
              width="15%"
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
                style={{ paddingLeft: "2rem", fontSize: 20 }}
              >
                Enter wake up period
              </Form.Label>
              <div className={styles.timeLabel} style={{ fontSize: 20 }}>
                From
              </div>
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
                      onChange={({ target }) =>
                        handleHour(setFromHour, target.value, fromHour)
                      }
                    />
                    <Form.Text
                      className={styles.timeLabel}
                      style={{ marginTop: "10px", fontSize: 20 }}
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
                      max="59"
                      min="00"
                      onChange={(e) => handleMin(e, setFromMin, fromMin)}
                    />
                    <Form.Text
                      className={styles.timeLabel}
                      style={{ fontSize: 20 }}
                    >
                      Minute
                    </Form.Text>
                  </div>
                </div>
              </div>
              <Form.Label
                className={styles.timeLabelUntil}
                style={{ paddingLeft: "2rem", fontSize: 20 }}
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
                      onChange={({ target }) =>
                        handleHour(setUntilHour, target.value, untilHour)
                      }
                    />
                    <Form.Text
                      className={styles.timeLabel}
                      style={{ fontSize: 20 }}
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
                      value={untilMin}
                      max="59"
                      min="00"
                      onChange={(e) => handleMin(e, setUntilMin, untilMin)}
                    />
                    <Form.Text
                      className={styles.timeLabel}
                      style={{ padding: "2rem", fontSize: 20 }}
                    >
                      Minute
                    </Form.Text>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: -50, paddingLeft: "24px" }}>
                <Form.Check
                  style={{ color: check ? "#1e1e1e" : "" }}
                  type="checkbox"
                  id="checkbox"
                  label={`  Choose X minutes before "Until" time`}
                  onClick={() => setCheck(!check)}
                />
                {check && (
                  <div style={{ paddingTop: 10 }}>
                    <Form.Control
                      className={styles.activeInputField}
                      style={{ width: "38%" }}
                      type="number"
                      value={minBefore}
                      max="59"
                      min="00"
                      onChange={(e) => handleMin(e, setMinBefore, minBefore)}
                    />
                  </div>
                )}
              </div>
              <div style={{ marginBottom: 50 }}></div>
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
