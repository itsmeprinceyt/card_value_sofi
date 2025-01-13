"use client";
import { useState } from "react";
import Settings from "@/(components)/Settings";
import calculateValue from "@/utils/calculateValue";

interface SettingsType {
  scalingConstant: number;
}

export default function Home() {
  const [group, setGroup] = useState<number>(1);
  const [wishlist, setWishlist] = useState<number>(1);
  const [value, setValue] = useState<number>(0);
  const [settings, setSettings] = useState<SettingsType>({ scalingConstant: 1000 });

  const handleCalculate = (): void => {
    const calculatedValue = calculateValue(group, wishlist, settings.scalingConstant);
    setValue(calculatedValue);
  };

  return (
    <div className="bg-pink-300 h-screen flex flex-col justify-center items-center gap-2">

      <div className="p-20 rounded-lg bg-pink-200 flex flex-col items-center gap-2">
        <h1 className="font-bold text-4xl ">Card Value Calculator</h1>
        <div>
          <label>
            Gen Number (G1-G2000):
            <input
              className="rounded-md ml-1 p-1 border-b-2 border-r-2 border-black focus:outline-none focus:bg-black focus:text-white focus:border-pink-500 w-[100px]"
              type="number"
              value={group}
              min={1}
              max={2000}
              onChange={(e) => setGroup(Number(e.target.value))}
            />
          </label>
        </div>

        <div>
          <label>
            Wishlist Count:
            <input
              className="rounded-md ml-1 p-1 border-b-2 border-r-2 border-black focus:outline-none focus:bg-black focus:text-white focus:border-pink-500 w-[100px]"
              type="number"
              value={wishlist}
              min={1}
              onChange={(e) => setWishlist(Number(e.target.value))}
            />
          </label>
        </div>

        <button onClick={handleCalculate} className="bg-pink-500 rounded-md p-2 text-white border-black border-b-2 border-r-2">
          Calculate Value
        </button>

        <div className="border-2 p-2 rounded-lg border-red-600 text-2xl font-bold text-red-600">
          <h2>
            Card Value: {value} {value > 1 ? 'Wists' : (value === 1 || value === 0) ? 'Wist' : ''}
          </h2>
        </div>

        <Settings settings={settings} setSettings={setSettings} />
      </div>

      <div className="p-2 rounded-lg bg-pink-200 flex flex-col items-center gap-2 text-center">
        Note
        <div>
          • This may not give you accurate results.
          <br></br>
          • It is advised to use this only for 2D Non-Event Cards.
        </div>
      </div>
    </div>
  );
}