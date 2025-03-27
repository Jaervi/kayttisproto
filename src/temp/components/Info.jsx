import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  return (
    <div className="settings-container">
      <div className="settings-background">
        <div className="settings-header">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2318c707ad652091920d1a0a7367862be3ea22846934b6d65572ebc432fa1cb9?placeholderIfAbsent=true"
            className="settings-icon"
            alt="Settings icon"
            width="15%"
            onClick={() => navigate("/")}
          />
          <div className="settings-title">AI-Wake Info</div>
        </div>
        <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
          <h3 style={{ marginTop: 10 }}>
            AI-Wake wakes you up in the optimal time during a time interval of
            your choice
          </h3>
          <h3 style={{ marginTop: 30 }}>To get started</h3>
          <p style={{ marginTop: 10 }}>
            1. Set up your sleep tracking device in settings
          </p>
          <p style={{ marginTop: 10 }}>2. Choose an alarm sound in settings</p>
          <p style={{ marginTop: 10 }}>
            3. Create a new alarm in "New alarm" page by choosing a time
            interval
          </p>
          <div style={{ marginTop: 30 }}>
            <div>
              Settings can be found from{" "}
              <a href="/kayttisproto/settings" style={{ color: "white" }}>
                Settings
              </a>
            </div>
            <div style={{ marginTop: 5 }}>
              New alarm can be set in{" "}
              <a href="/kayttisproto/settings" style={{ color: "white" }}>
                New alarm
              </a>
            </div>
          </div>
          <h3 style={{ marginTop: 30 }}>How does the app work?</h3>
          <p style={{ marginTop: 10 }}>- Using the connected tracking device, the app monitors your sleep</p>
          <p style={{ marginTop: 10 }}>- During the given time interval, the app wakes you up when your sleep phase is the most optimal for waking up</p>
          <p style={{ marginTop: 10 }}>- A longer time interval gives a better probability for an optimized wake-up time</p>
          <img style={{marginTop: 10 }}src="sleep.png" width="100%" height="100%"></img>
          <p style={{ fontSize: "14px", color: "#c8c8c8", marginTop: "8px" }}>
            A demonstration of sleep cycles. The person woke up in the middle of a sleep cycle resulting in tiredness in the morning.<br/>
            The app aims to wake the user at the end of a sleep cycle (indicated by the arrow) resulting in better wake-up quality.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
