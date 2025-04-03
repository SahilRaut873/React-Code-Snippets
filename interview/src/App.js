// import LifecycleDemo from "./LifeCycle";
// import Timer from "./Timer";
// import ObjLiteral from "./U_Interview/objLiteral";

// function App() {
//   return (
//     <>
//     {/* <ObjLiteral/> */}
//     {/* <LifecycleDemo/> */}
//     <Timer/>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import Timer from "./Timer"; // Import Timer component
import Counter from "./Counter";
import UseMemo from "./useMemo";
import UseCallback from "./UseCallback";
import UsersCRUD from "./UserCrud";

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      {/* <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Stop Timer" : "Start Timer"}
      </button>
      {showTimer && <Timer />} Timer mounts/unmounts based on state */}
      {/* <Counter/> */}
      <UseMemo/>
      {/* <UseCallback/> */}
      {/* <UsersCRUD/> */}
    </div>
  );
}

export default App;
