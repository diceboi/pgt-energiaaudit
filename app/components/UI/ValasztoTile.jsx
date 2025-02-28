"use client";

import { useState, useEffect, useContext } from "react";
import { Context } from "../../Context";
import { motion } from "framer-motion";
import Paragraph from "../Typo/Paragraph";
import H3 from "../Typo/H3";
import H4 from "../Typo/H4";
import TimeSelector from "./TimeSelector";
import { TbTrash } from "react-icons/tb";

export default function ValasztoTile({
  icon,
  nev,
  isNew,
  onRemove,
  value,
  egyeninev,
  onNameChange,
  setContext,
}) {
  const context = useContext(Context);
  const [isOn, setIsOn] = useState(false);
  const [selectedIntervals, setSelectedIntervals] = useState([]);
  const [title, setTitle] = useState(egyeninev || nev);
  const [clearIntervals, setCleanIntervals] = useState(false);
  const [areaValue, setAreaValue] = useState("");
  const [kwhValue, setKwhValue] = useState("");

  useEffect(() => {
    if (setContext) {
      const intervalsString = selectedIntervals
        .map((interval) => `${title || value} ${interval}`)
        .join(", ");
      setContext(intervalsString);
    }
  }, [selectedIntervals, title]);

  const handleNameChange = (e) => setTitle(e.target.value);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const clearSwitch = () => {
    setSelectedIntervals([]); // Reset the selected intervals in local state
    setCleanIntervals(true); // Trigger re-render in TimeSelector
    setAreaValue(""); // Reset local state for area
    setKwhValue(""); // Reset local state for power

    // Clear the stored values in the context
    if (setContext) {
      setContext("");
    }

    const setterArea = getSetterName("m2");
    const setterKwh = getSetterName("kwh");

    if (context[setterArea]) {
      context[setterArea](""); // Clear area value in context
    }

    if (context[setterKwh]) {
      context[setterKwh](""); // Clear kWh value in context
    }

    // Reset `setCleanIntervals` back to false after a short delay to allow re-rendering
    setTimeout(() => {
      setCleanIntervals(false);
    }, 100);
  };

  const hasDataInContext = context[value] && context[value].length > 0;

  const handleChange = (e) => {
    const newName = e.target.value;
    setTitle(newName);

    // Update the correct egyeninevX field dynamically
    const setterKey = `setEgyeniNev${value.replace("egyeni", "")}`;
    if (context[setterKey]) {
      context[setterKey](newName);
    }
  };

  const getSetterName = (type) =>
    `set${value.charAt(0).toUpperCase() + value.slice(1)}${type}`;

  const handleAreaChange = (e) => {
    const setterName = getSetterName("m2");
    if (context[setterName]) {
      context[setterName](e.target.value);
    }
  };

  const handleKwhChange = (e) => {
    const setterName = getSetterName("kwh");
    if (context[setterName]) {
      context[setterName](e.target.value);
    }
  };

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
        isOn || hasDataInContext ? "bg-[--green-bg-tile]" : "bg-[--white-bg]"
      }`}
    >
      <div className="flex flex-row items-center justify-between w-full border-b border-[--antracit] pr-4 pl-2 py-3">
        <div
          onClick={toggleSwitch}
          className="flex flex-row items-center justify-start gap-4 w-full cursor-pointer"
        >
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
              value={title || ""}
              onChange={handleChange}
              className="py-2 px-4 my-4 ml-4 lg:w-1/2 w-full rounded-full text-white bg-[--black]"
            />
          ) : (
            <H3 classname="lg:w-full w-1/2">{title}</H3>
          )}
        </div>

        <div className="flex flex-nowrap gap-2">
          {isNew && (
            <button
              onClick={onRemove}
              className="bg-red-600 rounded-full px-2 py-1"
            >
              <TbTrash className="text-white min-w-7 min-h-auto" />
            </button>
          )}
          <button
            className="toggle-container z-10"
            style={{
              ...container,
              justifyContent: hasDataInContext ? "flex-end" : "flex-start",
            }}
            onClick={clearSwitch}
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
        <TimeSelector
          tilename={value}
          name={egyeninev}
          clearIntervals={clearIntervals === true ? [] : null}
        />
        {(value === "elektromosfutotestek" ||
          value === "hoszivattyusrendszer" ||
          value === "klimaberendezes") && (
          <div className="flex lg:flex-row flex-col gap-8">
            <div className="flex flex-col gap-4">
              <H4>Kérlek add meg a fűtendő/hűtendő helyiségek alapterületét</H4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Csak a számot add meg"
                  className="relative px-4 py-2 rounded-full w-full bg-[--black] text-white"
                  value={areaValue}
                  onChange={(e) => {
                    setAreaValue(e.target.value);
                    const setterArea = getSetterName("m2");
                    if (context[setterArea]) {
                      context[setterArea](e.target.value); // Update context
                    }
                  }}
                />
                <p className="absolute right-2 top-2 z-10 text-white">m²</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <H4>vagy a berendezés(ek) névleges (össz)teljesítményét</H4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Csak a számot add meg"
                  className="px-4 py-2 rounded-full bg-[--black] text-white w-full"
                  value={kwhValue}
                  onChange={(e) => {
                    setKwhValue(e.target.value);
                    const setterKwh = getSetterName("kwh");
                    if (context[setterKwh]) {
                      context[setterKwh](e.target.value); // Update context
                    }
                  }}
                />
                <p className="absolute right-2 top-2 z-10 text-white">kWh</p>
              </div>
            </div>
          </div>
        )}
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
