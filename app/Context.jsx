'use client'

import { createContext, useState } from "react";

export const Context = createContext({
  emailaddress: '',
  azonositonumber: '',
  vezeteknevvalue: '',
  keresztnevvalue: '',
  honap: '',
  akvarium: '',
  bojler: '',
  borhuto: '',
  elektromosfutotestek: '',
  elektromosfutotestekm2: '',
  elektromosfutotestekkwh: '',
  elektromosredony: '',
  elektromossuto: '',
  elektromosvasalo: '',
  fagyasztolada: '',
  gozkabin: '',
  hifirendszer: '',
  hoszivattyusrendszer: '',
  hoszivattyusrendszerm2: '',
  hoszivattyusrendszerkwh: '',
  hutoszekreny: '',
  indukciosfozolap: '',
  jatekkonzol: '',
  klimaberendezes: '',
  klimaberendezesm2: '',
  klimaberendezeskwh: '',
  kamerarendszer: '',
  laptoppc: '',
  ledvilagitas: '',
  legtechnika: '',
  mikrohullamusuto: '',
  mosogatogep: '',
  mosogep: '',
  porszivo: '',
  riaszto: '',
  routerinternetmodem: '',
  szauna: '',
  szaritogep: '',
  tv: '',
  ventilator: '',
  viztisztito: '',
  elektromosvizforralo: '',
  kulterivilagitas: '',
  elektromoskapunyito: '',
  kertiszivattyuontozes: '',
  medenceszivattyu: '',
  elektromosfunyiro: '',
  elektromossovenynyiro: '',
  elektromosautotoltes: '',
  kertigrill: '',
  elektromoskertifutotest: '',
  kertiedencefutes: '',
  elektromoskertiszerszamok: '',
  egyeni1: '',
  egyeniNev1: '',
  egyeni2: '',
  egyeniNev2: '',
  egyeni3: '',
  egyeniNev3: '',
  egyeni4: '',
  egyeniNev4: '',
  egyeni5: '',
  egyeniNev5: '',
  egyeni6: '',
  egyeniNev6: '',
  egyeni7: '',
  egyeniNev7: '',
  egyeni8: '',
  egyeniNev8: '',
  egyeni9: '',
  egyeniNev9: '',
  egyeni10: '',
  egyeniNev10: '',
  setEmailaddress: () => {},
  setAzonositonumber: () => {},
  setVezeteknevValue: () => {},
  setKeresztnevValue: () => {},
  setHonap: () => {},
  setCurrentPage: () => {},
  setAkvarium: () => {},
  setBojler: () => {},
  setBorhuto: () => {},
  setElektromosfutotestek: () => {},
  setElektromosfutotestekm2: () => {},
  setElektromosfutotestekkwh: () => {},
  setElektromosredony: () => {},
  setElektromossuto: () => {},
  setElektromosvasalo: () => {},
  setFagyasztolada: () => {},
  setGozkabin: () => {},
  setHifirendszer: () => {},
  setHoszivattyusrendszer: () => {},
  setHoszivattyusrendszerm2: () => {},
  setHoszivattyusrendszerkwh: () => {},
  setHutoszekreny: () => {},
  setIndukciosfozolap: () => {},
  setJatekkonzol: () => {},
  setKlimaberendezes: () => {},
  setKlimaberendezesm2: () => {},
  setKlimaberendezeskwh: () => {},
  setKamerarendszer: () => {},
  setLaptoppc: () => {},
  setLedvilagitas: () => {},
  setLegtechnika: () => {},
  setMikrohullamusuto: () => {},
  setMosogatogep: () => {},
  setMosogep: () => {},
  setPorszivo: () => {},
  setRiaszto: () => {},
  setRouterinternetmodem: () => {},
  setSzauna: () => {},
  setSzaritogep: () => {},
  setTv: () => {},
  setVentilator: () => {},
  setViztisztito: () => {},
  setElektromosvizforralo: () => {},
  setKulterivilagitas: () => {},
  setElektromoskapunyito: () => {},
  setKertiszivattyuontozes: () => {},
  setMedenceszivattyu: () => {},
  setElektromosfunyiro: () => {},
  setElektromossovenynyiro: () => {},
  setElektromosautotoltes: () => {},
  setKertigrill: () => {},
  setElektromoskertifutotest: () => {},
  setKertiedencefutes: () => {},
  setElektromoskertiszerszamok: () => {},
  setEgyeni1: () => {},
  setEgyeniNev1: () => {},
  setEgyeni2: () => {},
  setEgyeniNev2: () => {},
  setEgyeni3: () => {},
  setEgyeniNev3: () => {},
  setEgyeni4: () => {},
  setEgyeniNev4: () => {},
  setEgyeni5: () => {},
  setEgyeniNev5: () => {},
  setEgyeni6: () => {},
  setEgyeniNev6: () => {},
  setEgyeni7: () => {},
  setEgyeniNev7: () => {},
  setEgyeni8: () => {},
  setEgyeniNev8: () => {},
  setEgyeni9: () => {},
  setEgyeniNev9: () => {},
  setEgyeni10: () => {},
  setEgyeniNev10: () => {},
});

export default function ContextProvider({ children }) {
  const [emailaddress, setEmailaddress] = useState();
  const [azonositonumber, setAzonositonumber] = useState();
  const [vezeteknevvalue, setVezeteknevValue] = useState();
  const [keresztnevvalue, setKeresztnevValue] = useState();
  const [honap, setHonap] = useState()
  const [akvarium, setAkvarium] = useState();
  const [bojler, setBojler] = useState();
  const [borhuto, setBorhuto] = useState();
  const [elektromosfutotestek, setElektromosfutotestek] = useState();
  const [elektromosfutotestekm2, setElektromosfutotestekm2] = useState();
  const [elektromosfutotestekkwh, setElektromosfutotestekkwh] = useState();
  const [elektromosredony, setElektromosredony] = useState();
  const [elektromossuto, setElektromossuto] = useState();
  const [elektromosvasalo, setElektromosvasalo] = useState();
  const [fagyasztolada, setFagyasztolada] = useState();
  const [gozkabin, setGozkabin] = useState();
  const [hifirendszer, setHifirendszer] = useState();
  const [hoszivattyusrendszer, setHoszivattyusrendszer] = useState();
  const [hoszivattyusrendszerm2, setHoszivattyusrendszerm2] = useState();
  const [hoszivattyusrendszerkwh, setHoszivattyusrendszerkwh] = useState();
  const [hutoszekreny, setHutoszekreny] = useState();
  const [indukciosfozolap, setIndukciosfozolap] = useState();
  const [jatekkonzol, setJatekkonzol] = useState();
  const [klimaberendezes, setKlimaberendezes] = useState();
  const [klimaberendezesm2, setKlimaberendezesm2] = useState();
  const [klimaberendezeskwh, setKlimaberendezeskwh] = useState();
  const [kamerarendszer, setKamerarendszer] = useState();
  const [laptoppc, setLaptoppc] = useState();
  const [ledvilagitas, setLedvilagitas] = useState();
  const [legtechnika, setLegtechnika] = useState();
  const [mikrohullamusuto, setMikrohullamusuto] = useState();
  const [mosogatogep, setMosogatogep] = useState();
  const [mosogep, setMosogep] = useState();
  const [porszivo, setPorszivo] = useState();
  const [riaszto, setRiaszto] = useState();
  const [routerinternetmodem, setRouterinternetmodem] = useState();
  const [szauna, setSzauna] = useState();
  const [szaritogep, setSzaritogep] = useState();
  const [tv, setTv] = useState();
  const [ventilator, setVentilator] = useState();
  const [viztisztito, setViztisztito] = useState();
  const [elektromosvizforralo, setElektromosvizforralo] = useState();
  const [kulterivilagitas, setKulterivilagitas] = useState();
  const [elektromoskapunyito, setElektromoskapunyito] = useState();
  const [kertiszivattyuontozes, setKertiszivattyuontozes] = useState();
  const [medenceszivattyu, setMedenceszivattyu] = useState();
  const [elektromosfunyiro, setElektromosfunyiro] = useState();
  const [elektromossovenynyiro, setElektromossovenynyiro] = useState();
  const [elektromosautotoltes, setElektromosautotoltes] = useState();
  const [kertigrill, setKertigrill] = useState();
  const [elektromoskertifutotest, setElektromoskertifutotest] = useState();
  const [kertiedencefutes, setKertiedencefutes] = useState();
  const [elektromoskertiszerszamok, setElektromoskertiszerszamok] = useState();
  const [egyeni1, setEgyeni1] = useState();
  const [egyeniNev1, setEgyeniNev1] = useState();
  const [egyeni2, setEgyeni2] = useState();
  const [egyeniNev2, setEgyeniNev2] = useState();
  const [egyeni3, setEgyeni3] = useState();
  const [egyeniNev3, setEgyeniNev3] = useState();
  const [egyeni4, setEgyeni4] = useState();
  const [egyeniNev4, setEgyeniNev4] = useState();
  const [egyeni5, setEgyeni5] = useState();
  const [egyeniNev5, setEgyeniNev5] = useState();
  const [egyeni6, setEgyeni6] = useState();
  const [egyeniNev6, setEgyeniNev6] = useState();
  const [egyeni7, setEgyeni7] = useState();
  const [egyeniNev7, setEgyeniNev7] = useState();
  const [egyeni8, setEgyeni8] = useState();
  const [egyeniNev8, setEgyeniNev8] = useState();
  const [egyeni9, setEgyeni9] = useState();
  const [egyeniNev9, setEgyeniNev9] = useState();
  const [egyeni10, setEgyeni10] = useState();
  const [egyeniNev10, setEgyeniNev10] = useState();

  return (
    <Context.Provider value={{
      emailaddress,
      azonositonumber,
      vezeteknevvalue,
      keresztnevvalue,
      honap,
      akvarium,
      bojler,
      borhuto,
      elektromosfutotestek,
      elektromosfutotestekm2,
      elektromosfutotestekkwh,
      elektromosredony,
      elektromossuto,
      elektromosvasalo,
      fagyasztolada,
      gozkabin,
      hifirendszer,
      hoszivattyusrendszer,
      hoszivattyusrendszerm2,
      hoszivattyusrendszerkwh,
      hutoszekreny,
      indukciosfozolap,
      jatekkonzol,
      klimaberendezes,
      klimaberendezesm2,
      klimaberendezeskwh,
      kamerarendszer,
      laptoppc,
      ledvilagitas,
      legtechnika,
      mikrohullamusuto,
      mosogatogep,
      mosogep,
      porszivo,
      riaszto,
      routerinternetmodem,
      szauna,
      szaritogep,
      tv,
      ventilator,
      viztisztito,
      elektromosvizforralo,
      kulterivilagitas,
      elektromoskapunyito,
      kertiszivattyuontozes,
      medenceszivattyu,
      elektromosfunyiro,
      elektromossovenynyiro,
      elektromosautotoltes,
      kertigrill,
      elektromoskertifutotest,
      kertiedencefutes,
      elektromoskertiszerszamok,
      egyeni1,
      egyeniNev1,
      egyeni2,
      egyeniNev2,
      egyeni3,
      egyeniNev3,
      egyeni4,
      egyeniNev4,
      egyeni5,
      egyeniNev5,
      egyeni6,
      egyeniNev6,
      egyeni7,
      egyeniNev7,
      egyeni8,
      egyeniNev8,
      egyeni9,
      egyeniNev9,
      egyeni10,
      egyeniNev10,
      setEmailaddress,
      setAzonositonumber,
      setVezeteknevValue,
      setKeresztnevValue,
      setHonap,
      setAkvarium,
      setBojler,
      setBorhuto,
      setElektromosfutotestek,
      setElektromosfutotestekm2,
      setElektromosfutotestekkwh,
      setElektromosredony,
      setElektromossuto,
      setElektromosvasalo,
      setFagyasztolada,
      setGozkabin,
      setHifirendszer,
      setHoszivattyusrendszer,
      setHoszivattyusrendszerm2,
      setHoszivattyusrendszerkwh,
      setHutoszekreny,
      setIndukciosfozolap,
      setJatekkonzol,
      setKlimaberendezes,
      setKlimaberendezesm2,
      setKlimaberendezeskwh,
      setKamerarendszer,
      setLaptoppc,
      setLedvilagitas,
      setLegtechnika,
      setMikrohullamusuto,
      setMosogatogep,
      setMosogep,
      setPorszivo,
      setRiaszto,
      setRouterinternetmodem,
      setSzauna,
      setSzaritogep,
      setTv,
      setVentilator,
      setViztisztito,
      setElektromosvizforralo,
      setKulterivilagitas,
      setElektromoskapunyito,
      setKertiszivattyuontozes,
      setMedenceszivattyu,
      setElektromosfunyiro,
      setElektromossovenynyiro,
      setElektromosautotoltes,
      setKertigrill,
      setElektromoskertifutotest,
      setKertiedencefutes,
      setElektromoskertiszerszamok,
      setEgyeni1,
      setEgyeniNev1,
      setEgyeni2,
      setEgyeniNev2,
      setEgyeni3,
      setEgyeniNev3,
      setEgyeni4,
      setEgyeniNev4,
      setEgyeni5,
      setEgyeniNev5,
      setEgyeni6,
      setEgyeniNev6,
      setEgyeni7,
      setEgyeniNev7,
      setEgyeni8,
      setEgyeniNev8,
      setEgyeni9,
      setEgyeniNev9,
      setEgyeni10,
      setEgyeniNev10,
    }}>
      {children}
    </Context.Provider>
  );
}