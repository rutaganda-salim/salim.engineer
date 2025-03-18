'use client';

import { useState, useRef, useEffect } from 'react';

interface KnobProps {
  value: number;
  onChange: (value: number) => void;
  color?: string;
}

const Knob: React.FC<KnobProps> = ({ value, onChange, color = 'rgb(100, 100, 100)' }) => {
  const knobRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Calculate the stroke dashoffset based on the value
  const dashArray = 251.32741228718345;
  const dashOffset = dashArray - (dashArray * value);
  const valueFmt = value.toFixed(2);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !knobRef.current) return;

      const knobRect = knobRef.current.getBoundingClientRect();
      const knobCenterX = knobRect.left + knobRect.width / 2;
      const knobCenterY = knobRect.top + knobRect.height / 2;

      // Calculate angle from center of knob to mouse position
      const angleRad = Math.atan2(e.clientY - knobCenterY, e.clientX - knobCenterX);

      // Convert angle to a value between 0 and 1
      // We add PI to make the range 0 to 2*PI instead of -PI to PI
      let normalizedValue = (angleRad + Math.PI) / (2 * Math.PI);

      // Adjust for visual orientation (top is 0, clockwise increases)
      normalizedValue = (normalizedValue + 0.75) % 1;

      // Clamp value between 0 and 1
      normalizedValue = Math.max(0, Math.min(1, normalizedValue));

      onChange(normalizedValue);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, onChange]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <div className="flex flex-col">
      <div
        ref={knobRef}
        className="size-16 border rounded-full shadow-sm shadow-neutral-600/50 bg-neutral-900 border-neutral-800 relative select-none cursor-pointer"
        onMouseDown={handleMouseDown}
      >
        <svg viewBox="0 0 100 100" className="block absolute top-[-24%] left-[-25%] size-[150%] pointer-events-none">
          <circle
            transform="rotate(108 50 50)"
            cx="50"
            cy="50"
            r="40"
            strokeWidth="4"
            strokeDasharray={dashArray}
            strokeDashoffset="25.132741228718345"
            fill="none"
            stroke="rgb(25, 25, 25)"
            strokeLinecap="round"
          ></circle>
          <circle
            transform="rotate(108 50 50)"
            cx="50"
            cy="50"
            r="40"
            strokeWidth="4"
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            fill="none"
            stroke={color}
            strokeLinecap="round"
          ></circle>
        </svg>

        {/* Indicator dot */}
        <div
          className="absolute size-1.5 bg-white rounded-full"
          style={{
            left: '50%',
            top: '10%',
            transform: `translate(-50%, -50%) rotate(${value * 360}deg) translateY(-12px)`,
            transformOrigin: 'center 13px',
          }}
        ></div>
      </div>
      <p className="text-center font-mono text-sm py-4 w-16">{valueFmt}</p>
    </div>
  );
};

export default function RGBKnob() {
  const [red, setRed] = useState(0.5);
  const [green, setGreen] = useState(0.5);
  const [blue, setBlue] = useState(0.5);

  const rgb = `rgb(${Math.round(red * 255)}, ${Math.round(green * 255)}, ${Math.round(blue * 255)})`;
  const hex = `#${Math.round(red * 255).toString(16).padStart(2, '0')}${Math.round(green * 255).toString(16).padStart(2, '0')}${Math.round(blue * 255).toString(16).padStart(2, '0')}`;

  // Color preview box
  const colorPreviewStyle = {
    backgroundColor: rgb,
    width: '100%',
    height: '100px',
    borderRadius: '4px',
    marginBottom: '1rem',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  return (
    <div className="w-full">
      <div style={colorPreviewStyle}></div>

      <div className="flex gap-4 text-sm font-mono opacity-50 hover:opacity-100 transition-opacity justify-center my-4">
        <button className="hover:text-neutral-200 transition-colors">{rgb}</button>
        <button className="hover:text-neutral-200 transition-colors">{hex}</button>
      </div>

      <div className="flex gap-8 py-5 justify-center">
        <Knob value={red} onChange={setRed} color="rgb(255, 100, 100)" />
        <Knob value={green} onChange={setGreen} color="rgb(100, 255, 100)" />
        <Knob value={blue} onChange={setBlue} color="rgb(100, 100, 255)" />
      </div>

      <div className="text-center mt-4 text-neutral-500 text-xs">
        Click and drag the knobs to adjust RGB values
      </div>
    </div>
  );
}
