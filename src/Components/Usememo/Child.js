import React from "react";
// one approach is we can use memo also
import {memo} from 'react'

const Child = (props) => {
    const {Passing} = props
  console.log("Are bhai mujhe kyo bulaya");
  return <div>Child</div>;
};

// export default Child;
// in this way by calling memo withb export we an use it
export default memo(Child);
