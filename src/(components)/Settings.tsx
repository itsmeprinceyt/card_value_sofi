import React from "react";

interface SettingsProps {
  settings: { scalingConstant: number };
  setSettings: React.Dispatch<React.SetStateAction<{ scalingConstant: number }>>;
}

const Settings: React.FC<SettingsProps> = ({ settings, setSettings }) => {
  const handleScalingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newScalingConstant = Number(event.target.value);
    setSettings({ ...settings, scalingConstant: newScalingConstant });
  };

  return (
    <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
      <h3>Settings</h3>
      <label>
        Scaling Constant:
        <input
          type="number"
          value={settings.scalingConstant}
          onChange={handleScalingChange}
        />
      </label>
    </div>
  );
};

export default Settings;