import React, {useEffect,useRef, useState} from 'react';

 
export default function OutsideAlerter(props) {
  const [showDD, setShowDD]=useState(true)
  const [select,setSelect]=useState('volvo')
  const ref = useRef(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowDD(false)
        }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [ref]);

  return (
    <div ref={ref} >
        {showDD &&
          <select name="cars" id="cars" style={{width:450}} value={select} onChange={(event) => setSelect(event.target.value)}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        }
        {select}
    </div>
  );
}
