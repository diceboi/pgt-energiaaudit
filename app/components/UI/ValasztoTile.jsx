"use client";

import { useState, useEffect, useContext } from "react";
import { Context } from "../../Context";
import { motion } from "framer-motion";
import Paragraph from "../Typo/Paragraph";
import H3 from "../Typo/H3";
import H4 from "../Typo/H4";
import TimeSelector from "./TimeSelector";
import { TbTrash } from "react-icons/tb";

export default function ValasztoTile({ icon, nev, isNew, onRemove, value, egyeninev, onNameChange, setContext}) {

  const context = useContext(Context);
  const [isOn, setIsOn] = useState(false);
  const [selectedIntervals, setSelectedIntervals] = useState([]);
  const [title, setTitle] = useState(egyeninev || nev);

  const handleChange = (e) => {
    setTitle(e.target.value);
    if (onNameChange) {
      onNameChange(value, e.target.value);
    }
  };

  useEffect(() => {
    if (setContext) {
      const intervalsString = selectedIntervals.map(interval => `${title || value} ${interval}`).join(", ");
      setContext(intervalsString);
    }
  }, [selectedIntervals, title]);

  const handleNameChange = (e) => setTitle(e.target.value);

  const toggleSwitch = () => setIsOn(!isOn);

  const hasDataInContext = context[value] && context[value].length > 0;

  return (
    <motion.div
      layout
      animate={{ height: isOn ? "100%" : "100px" }}
      transition={{
        ease: "easeOut",
        type: "spring",
        duration: 0.4,
        bounce: 0.8,
      }}
      className={`relative rounded-2xl flex flex-col transition-all duration-400 overflow-hidden shadow-md ${
        isOn || hasDataInContext
          ? "bg-[--black]"
          : "bg-[--white-bg]"
      }`}
    >
      <div className="w-full border-b border-[--antracit] flex flex-row items-center justify-between gap-4 pr-4 pl-2 py-3">
        {icon && (
          <motion.div className="flex flex-nowrap items-center w-20 h-20">
            <img
              src={icon}
              alt="Icon"
              className="w-full h-full object-contain"
            />
          </motion.div>
        )}
        {isNew ? (
          <input
            type="text"
            placeholder="Eszköz neve..."
            value={title || ''}
            onChange={handleChange}
            className="py-2 px-4 my-4 ml-4 lg:w-1/2 w-full rounded-full text-white bg-[--black]"
          />
        ) : (
          <H3 classname="lg:w-full w-1/2">{title}</H3>
        )}
        <div className="flex flex-nowrap gap-2">
        {isNew && <button onClick={onRemove} className="bg-red-600 rounded-full px-2 py-1"><TbTrash className="text-white min-w-7 min-h-auto"/></button>}
          <button
            className="toggle-container"
            style={{
              ...container,
              justifyContent: isOn ? "flex-end" : "flex-start",
            }}
            onClick={toggleSwitch}
          >
            <motion.div
              className="toggle-handle"
              style={handle}
              layout
              transition={{ type: "spring", duration: 0.2, bounce: 0.2 }}
            />
          </button>
          
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 p-4">
        <H4>
          Válaszd ki{" "}
          <span className="text-[--yellow]">a nap melyik órájában</span>{" "}
          használod az adott eszközt:
        </H4>
        <TimeSelector tilename={value} name={egyeninev}/>
      </div>
    </motion.div>
  );
}

const container = {
  width: 50,
  height: 30,
  backgroundColor: "black",
  borderRadius: 50,
  cursor: "pointer",
  display: "flex",
  padding: 5,
};

const handle = {
  width: 20,
  height: 20,
  backgroundColor: "var(--green)",
  borderRadius: "50%",
};
