function Settings() {
    return (
      <div className="settings">
        <label htmlFor="reminder">Set Reminder:</label>
        <input type="time" id="reminder" />
        <button id="setReminder">Set</button>
      </div>
    );
  }
  export default Settings;
  