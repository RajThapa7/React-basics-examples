import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(refContainer.current.value)

  }
  useEffect(()=>{
    console.log(refContainer.current);
    refContainer.current.focus();

  })
  console.log(refContainer)
  return <>
  <form action="" className="form" onSubmit={handleSubmit}>
    <div>
      <input type="text" name="" id=""ref = {refContainer}/>
      <button type="submit">submit</button>
    </div>
  </form>
  <div ref={divContainer}>Hello world</div>
  </>

};

export default UseRefBasics;
