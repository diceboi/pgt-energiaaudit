'use client'

import { createContext, useState } from "react";
import Modal from "./components/UI/Modal"
import H3 from "./components/Typo/H3";
import H1 from "./components/Typo/H1";
import Paragraph from "./components/Typo/Paragraph";
import H2 from "./components/Typo/H2";
import { TbAlertTriangle, TbCircleCheckFilled } from "react-icons/tb";
import H4 from "./components/Typo/H4";
import MainButton from "./components/UI/MainButton";

export const Context = createContext({
  emailaddress: '',
  honap: '',
  akvarium: '',
  bojler: '',
  borhuto: '',
  elektromosfutotestek: '',
  elektromosredony: '',
  elektromossuto: '',
  elektromosvasalo: '',
  fagyasztolada: '',
  gozkabin: '',
  hifirendszer: '',
  hoszivattyusrendszer: '',
  hutoszekreny: '',
  indukciosfozolap: '',
  jatekkonzol: '',
  klimaberendezes: '',
  kamerarendszer: '',
  laptoppc: '',
  ledvilagitas: '',
  egyeni1: '',
  egyeni2: '',
  egyeni3: '',
  egyeni4: '',
  egyeni5: '',
  egyeni6: '',
  egyeni7: '',
  egyeni8: '',
  egyeni9: '',
  egyeni10: '',
  setEmailaddress: () => {},
  setHonap: () => {},
  setCurrentPage: () => {},
  setAkvarium: () => {},
  setBojler: () => {},
  setBorhuto: () => {},
  setElektromosfutotestek: () => {},
  setElektromosredony: () => {},
  setElektromossuto: () => {},
  setElektromosvasalo: () => {},
  setFagyasztolada: () => {},
  setGozkabin: () => {},
  setHifirendszer: () => {},
  setHoszivattyusrendszer: () => {},
  setHutoszekreny: () => {},
  setIndukciosfozolap: () => {},
  setJatekkonzol: () => {},
  setKlimaberendezes: () => {},
  setKamerarendszer: () => {},
  setLaptoppc: () => {},
  setLedvilagitas: () => {},
  setEgyeni1: () => {},
  setEgyeni2: () => {},
  setEgyeni3: () => {},
  setEgyeni4: () => {},
  setEgyeni5: () => {},
  setEgyeni6: () => {},
  setEgyeni7: () => {},
  setEgyeni8: () => {},
  setEgyeni9: () => {},
  setEgyeni10: () => {},
});

export default function ContextProvider({ children }) {
  const [emailaddress, setEmailaddress] = useState();
  const [honap, setHonap] = useState()
  const [akvarium, setAkvarium] = useState();
  const [bojler, setBojler] = useState();
  const [borhuto, setBorhuto] = useState();
  const [elektromosfutotestek, setElektromosfutotestek] = useState();
  const [elektromosredony, setElektromosredony] = useState();
  const [elektromossuto, setElektromossuto] = useState();
  const [elektromosvasalo, setElektromosvasalo] = useState();
  const [fagyasztolada, setFagyasztolada] = useState();
  const [gozkabin, setGozkabin] = useState();
  const [hifirendszer, setHifirendszer] = useState();
  const [hoszivattyusrendszer, setHoszivattyusrendszer] = useState();
  const [hutoszekreny, setHutoszekreny] = useState();
  const [indukciosfozolap, setIndukciosfozolap] = useState();
  const [jatekkonzol, setJatekkonzol] = useState();
  const [klimaberendezes, setKlimaberendezes] = useState();
  const [kamerarendszer, setKamerarendszer] = useState();
  const [laptoppc, setLaptoppc] = useState();
  const [ledvilagitas, setLedvilagitas] = useState();
  const [egyeni1, setEgyeni1] = useState();
  const [egyeni2, setEgyeni2] = useState();
  const [egyeni3, setEgyeni3] = useState();
  const [egyeni4, setEgyeni4] = useState();
  const [egyeni5, setEgyeni5] = useState();
  const [egyeni6, setEgyeni6] = useState();
  const [egyeni7, setEgyeni7] = useState();
  const [egyeni8, setEgyeni8] = useState();
  const [egyeni9, setEgyeni9] = useState();
  const [egyeni10, setEgyeni10] = useState();

  return (
    <Context.Provider value={{
      emailaddress,
      honap,
      akvarium,
      bojler,
      borhuto,
      elektromosfutotestek,
      elektromosredony,
      elektromossuto,
      elektromosvasalo,
      fagyasztolada,
      gozkabin,
      hifirendszer,
      hoszivattyusrendszer,
      hutoszekreny,
      indukciosfozolap,
      jatekkonzol,
      klimaberendezes,
      kamerarendszer,
      laptoppc,
      ledvilagitas,
      egyeni1,
      egyeni2,
      egyeni3,
      egyeni4,
      egyeni5,
      egyeni6,
      egyeni7,
      egyeni8,
      egyeni9,
      egyeni10,
      setEmailaddress,
      setHonap,
      setAkvarium,
      setBojler,
      setBorhuto,
      setElektromosfutotestek,
      setElektromosredony,
      setElektromossuto,
      setElektromosvasalo,
      setFagyasztolada,
      setGozkabin,
      setHifirendszer,
      setHoszivattyusrendszer,
      setHutoszekreny,
      setIndukciosfozolap,
      setJatekkonzol,
      setKlimaberendezes,
      setKamerarendszer,
      setLaptoppc,
      setLedvilagitas,
      setEgyeni1,
      setEgyeni2,
      setEgyeni3,
      setEgyeni4,
      setEgyeni5,
      setEgyeni6,
      setEgyeni7,
      setEgyeni8,
      setEgyeni9,
      setEgyeni10,
    }}>
      {children}
    </Context.Provider>
  );
}