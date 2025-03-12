"use client";
import React from "react";
import styles from "./AlarmSetPage.module.css";
import { useNavigate } from "react-router-dom";

const AlarmSetPage = () => {
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

          <div className={styles.timeLabelUntil}>Until</div>

          <div className={styles.keyboardPicker}>
            <div className={styles.pickerHeader}>Enter wake-up period</div>
            <div className={styles.timeLabel}>From</div>

            <div className={styles.inputSelection}>
              <div className={styles.timeSelector}>
                <div className={styles.timeField}>
                  <div className={styles.activeInputField}>
                    <div className={styles.timeText}>8</div>
                    <div className={styles.cursor} />
                  </div>
                  <div className={styles.timeLabel}>Hour</div>
                </div>

                <div className={styles.separator}>:</div>

                <div className={styles.timeField}>
                  <div className={styles.inactiveInputField}>00</div>
                  <div className={styles.timeLabel}>Minute</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.inputSelectionUntil}>
            <div className={styles.timeSelector}>
              <div className={styles.timeField}>
                <div className={styles.activeInputField}>
                  <div className={styles.timeText}>9</div>
                  <div className={styles.cursor} />
                </div>
                <div className={styles.timeLabel}>Hour</div>
              </div>

              <div className={styles.separator}>:</div>

              <div className={styles.timeField}>
                <div className={styles.inactiveInputField}>30</div>
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
              <div className={styles.buttonContent}>Cancel</div>
            </div>
            <div className={styles.primaryButton}>
              <div className={styles.buttonContent}>OK</div>
            </div>
          </div>
        </div>

        <div className={styles.alarmSoundMenu}>
          <div className={styles.menuHeader}>Alarm sound</div>
          <div className={styles.menuSeparator}>
            <div className={styles.divider} />
          </div>
          <div className={styles.menuSection}>
            <div className={styles.menuItem}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/57e45dae4b5af1c85da523030744aff88798a2073022ab61ff139470a5a6b003?placeholderIfAbsent=true"
                className={styles.menuItemIcon}
                alt="Selected alarm"
              />
              <div className={styles.menuItemBody}>
                <div className={styles.menuItemTitle}>Alarm 1</div>
                <div className={styles.menuItemDescription}>Selected</div>
              </div>
            </div>
            <div className={styles.menuItem}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cb0a6df828835e02fbaeffcdfa6a099872c40b03103bc66581fc207fe910c93?placeholderIfAbsent=true"
                className={styles.menuItemIcon}
                alt="Alarm option"
              />
              <div className={styles.menuItemBody}>
                <div className={styles.menuItemTitle}>Alarm 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlarmSetPage;
