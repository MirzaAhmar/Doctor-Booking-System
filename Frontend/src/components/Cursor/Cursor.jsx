import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='0, 193, 162'  // Updated color to #00c1a2 (teal)
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 12,
              color: '255, 255, 255',  // This can be changed to a different color if needed
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5
            }
          }
        ]}
      />
    </div>
  );
}
