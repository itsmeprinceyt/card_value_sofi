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
    <div className="flex flex-col justify-center items-center text-center">
      <p>Increase/Decrease this value by 60-70% <br></br> if you think the value is off price!</p>
      <label>
        Scaling Constant:
        <input
          className="rounded-md ml-1 p-1 border-b-2 border-r-2 border-black focus:outline-none focus:bg-black focus:text-white focus:border-pink-500 w-[100px]"
          type="number"
          min={1}
          max={1000}
          value={settings.scalingConstant}
          onChange={handleScalingChange}
        />
      </label>
    </div>
  );
};

export default Settings;