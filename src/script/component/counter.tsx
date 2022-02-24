import React, { useState } from "https://esm.sh/react@17.0.2";

export default function () {
  const [count, setCount] = useState(0);

  return (
    <div class="row">
      <div class="two columns">
        <p>{count}</p>
      </div>
      <div class="two columns">
        <button class="button-primary" onClick={() => setCount(count + 1)}>
          ＋
        </button>
      </div>
      <div class="two columns">
        <button onClick={() => setCount(count - 1)}>―</button>
      </div>
    </div>
  );
}


