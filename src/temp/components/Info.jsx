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
        </div>
      </div>
    </div>
  );
};

export default Info;
