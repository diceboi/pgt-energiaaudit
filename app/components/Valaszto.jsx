"use client";

import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import Paragraph from "./Typo/Paragraph";
import H3 from "./Typo/H3";
import H1 from "./Typo/H1";
import H4 from "./Typo/H4";
import TimeSelector from "./UI/TimeSelector";
import ValasztoTile from "./UI/ValasztoTile";
import { TbBulb } from "react-icons/tb";
import H2 from "./Typo/H2";
import { Context } from "../Context";
import { TbPlus } from "react-icons/tb";
import { toast } from "sonner";
import { replace } from "lodash";
import { TbQuestionMark } from "react-icons/tb";

export default function Valaszto({ vezeteknev, keresztnev, email, azonosito }) {

  const context = useContext(Context);

  const {
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
      openPopup,
      setOpenPopup,
      togglePopup,
      form,
      setForm,
      setEmailaddress,
      setAzonositonumber,
      setVezeteknevValue,
      setKeresztnevValue,
      setHonap,
  } = useContext(Context)

  useEffect(() => {
    if (email) {
      setEmailaddress(email);
    }

    if (azonosito) {
      setAzonositonumber(azonosito)
    }

    if (vezeteknev) {
      setVezeteknevValue(vezeteknev)
    }

    if (keresztnev) {
      setKeresztnevValue(keresztnev)
    }
  });



  const sendToWebhook = async (data) => {
    try {
      const response = await fetch("https://hook.eu2.make.com/vcbxhc85clyqa7qyo34j3q8roqpnfpwa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("Failed to send data", await response.text());
      } else {
        toast.success("Sikeres beküldés!")
        window.location.replace("https://profigreentech.hu/koszonjuk-energiaaudit/")
      }
    } catch (error) {
      console.error("Error sending data", error);
    }
  };

  const handleSendData = () => {
    const currentDate = new Date().toISOString();
  
    const dataToSend = {
      Email: emailaddress,
      Azonosito: azonositonumber,
      Honap: honap,
      Akvarium: akvarium,
      Bojler: bojler,
      Borhuto: borhuto,
      ElektromosFutotestek: elektromosfutotestek,
      ElektromosFutotestekM2: elektromosfutotestekm2,
      ElektromosFutotestekKwh: elektromosfutotestekkwh,
      ElektromosRedony: elektromosredony,
      ElektromosSuto: elektromossuto,
      ElektromosVasalo: elektromosvasalo,
      Fagyasztolada: fagyasztolada,
      Gozkabin: gozkabin,
      Hifirendszer: hifirendszer,
      HoszivattyusRendszer: hoszivattyusrendszer,
      HoszivattyusRendszerM2: hoszivattyusrendszerm2,
      HoszivattyusRendszerKwh: hoszivattyusrendszerkwh,
      Hutoszekreny: hutoszekreny,
      IndukciosFozolap: indukciosfozolap,
      Jatekkonzol: jatekkonzol,
      Klimaberendezes: klimaberendezes,
      KlimaberendezesM2: klimaberendezesm2,
      KlimaberendezesKwh: klimaberendezeskwh,
      Kamerarendszer: kamerarendszer,
      LaptopPc: laptoppc,
      LedVilagitas: ledvilagitas,
      Legtechnika: legtechnika,
      MikrohullamuSuto: mikrohullamusuto,
      Mosogatogep: mosogatogep,
      Mosogep: mosogep,
      Porszivo: porszivo,
      Riaszto: riaszto,
      RouterinternetModem: routerinternetmodem,
      Szauna: szauna,
      Szaritogep: szaritogep,
      TvLcdled: tv,
      Ventilator: ventilator,
      Viztisztito: viztisztito,
      ElektromosVizforralo: elektromosvizforralo,
      KulteriVilagitas: kulterivilagitas,
      ElektromosKapunyito: elektromoskapunyito,
      KertiSzivattyuOntozeshez: kertiszivattyuontozes,
      MedenceSzivattyu: medenceszivattyu,
      ElektromosFunyiro: elektromosfunyiro,
      ElektromosAutoToltese: elektromosautotoltes,
      KertiGrillElektromos: kertigrill,
      ElektromosKertiFutotest: elektromoskertifutotest,
      KertiMedenceFutese: kertiedencefutes,
      ElektromosKertiSzerszamok: elektromoskertiszerszamok,
      EgyeniNev1: egyeniNev1,
      EgyeniErtek1: egyeni1,
      EgyeniNev2:egyeniNev2,
      EgyeniErtek2: egyeni2,
      EgyeniNev3:egyeniNev3,
      EgyeniErtek3: egyeni3,
      EgyeniNev4:egyeniNev4,
      EgyeniErtek4: egyeni4,
      EgyeniNev5:egyeniNev5,
      EgyeniErtek5: egyeni5,
      EgyeniNev6:egyeniNev6,
      EgyeniErtek6: egyeni6,
      EgyeniNev7:egyeniNev7,
      EgyeniErtek7: egyeni7,
      EgyeniNev8:egyeniNev8,
      EgyeniErtek8: egyeni8,
      EgyeniNev9:egyeniNev9,
      EgyeniErtek9: egyeni9,
      EgyeniNev10:egyeniNev10,
      EgyeniErtek10: egyeni10,
    };

    sendToWebhook(dataToSend);
    console.log(dataToSend)
  };

  const updateTileName = (id, newName) => {
    setTiles((prevTiles) => prevTiles.map(tile => tile.id === id ? { ...tile, egyeninev: newName } : tile));
  };


  const MAX_TILES = 52;
  const [tiles, setTiles] = useState([
    {
      id: 1,
      icon: "/akvarium.svg",
      nev: "Akvárium (szűrő, világítás, fűtés)",
      value: "akvarium",
    },
    {
      id: 2,
      icon: "/bojler.svg",
      nev: "Bojler (melegvíz készítés)",
      value: "bojler",
    },
    { id: 3, icon: "/borhuto.svg", nev: "Borhűtő", value: "borhuto" },
    {
      id: 4,
      icon: "/elektromos-futotest.svg",
      nev: "Elektromos fűtőtestek",
      value: "elektromosfutotestek",
    },
    {
      id: 5,
      icon: "/elektromos-redony.svg",
      nev: "Elektromos redőny",
      value: "elektromosredony",
    },
    {
      id: 6,
      icon: "/elektromos-suto.svg",
      nev: "Elektromos sütő",
      value: "elektromossuto",
    },
    {
      id: 7,
      icon: "/elektromos-vasalo.svg",
      nev: "Elektromos vasaló",
      value: "elektromosvasalo",
    },
    {
      id: 8,
      icon: "/fagyaszto-lada.svg",
      nev: "Fagyasztó láda",
      value: "fagyasztolada",
    },
    { id: 9, icon: "/gozkabin.svg", nev: "Gőzkabin", value: "gozkabin" },
    { id: 10, icon: "/hifi.svg", nev: "HiFi rendszer", value: "hifirendszer" },
    {
      id: 11,
      icon: "/hoszivattyu.svg",
      nev: "Hőszivattyús rendszer (fűtés/hűtés)",
      value: "hoszivattyusrendszer",
    },
    {
      id: 12,
      icon: "/hutoszekreny.svg",
      nev: "Hűtőszekrény",
      value: "hutoszekreny",
    },
    {
      id: 13,
      icon: "/indukcios-fozolap.svg",
      nev: "Indukciós főzőlap",
      value: "indukciosfozolap",
    },
    {
      id: 14,
      icon: "/jatekkonzol.svg",
      nev: "Játék konzol",
      value: "jatekkonzol",
    },
    {
      id: 15,
      icon: "/klima.svg",
      nev: "Klímaberendezés (hűtés/fűtés)",
      value: "klimaberendezes",
    },
    { 
      id: 16, 
      icon: "/kamera.svg", 
      nev: "Kamera rendszer", 
      value: "kamerarendszer" 
    },
    { 
      id: 17, 
      icon: "/pc.svg", 
      nev: "Laptop/PC", 
      value: "laptoppc" 
    },
    { 
      id: 18, 
      icon: "/led.svg", 
      nev: "LED világítás (összesen)", 
      value: "ledvilagitas" 
    },
    {
      id: 19,
      icon: "/legtechnika.svg",
      nev: "Légtechnika",
      value: "legtechnika",
    },
    {
      id: 20,
      icon: "/mikrohullamu-suto.svg",
      nev: "Mikrohullámú sütő",
      value: "mikrohullamusuto",
    },
    {
      id: 21,
      icon: "/mosogatogep.svg",
      nev: "Mosogatógép",
      value: "mosogatogep",
    },
    {
      id: 22,
      icon: "/mosogep.svg",
      nev: "Mosógép",
      value: "mosogep",
    },
    {
      id: 23,
      icon: "/porszivo.svg",
      nev: "Porszívó",
      value: "porszivo",
    
    },
    {
      id: 24,
      icon: "/riaszto.svg",
      nev: "Riasztó",
      value: "riaszto",
    },
    {
      id: 25,
      icon: "/router.svg",
      nev: "Router/Internet modem",
      value: "routerinternetmodem",
    },
    {
      id: 26,
      icon: "/szauna.svg",
      nev: "Szauna",
      value: "szauna",
    },
    {
      id: 27,
      icon: "/szaritogep.svg",
      nev: "Szarítógép",
      value: "szaritogep",
    },
    {
      id: 28,
      icon: "/tv.svg",
      nev: "TV (LCD/LED)",
      value: "tv",
    },
    {
      id: 29,
      icon: "/ventilator.svg",
      nev: "Ventilátor",
      value: "ventilator",
    },
    {
      id: 30,
      icon: "/viztisztito.svg",
      nev: "Víztisztító",
      value: "viztisztito",
    },
    {
      id: 31,
      icon: "/elektromos-vizforralo.svg",
      nev: "Elektromos vízforraló",
      value: "elektromosvizforralo",
    },
    {
      id: 32,
      icon: "/kulteri-vilagitas.svg",
      nev: "Kültéri világítás",
      value: "kulterivilagitas",
    },
    {
      id: 33,
      icon: "/elektromos-kapunyito.svg",
      nev: "Elektromos kapunyitó",
      value: "elektromoskapunyito",
    },
    {
      id: 34,
      icon: "/kerti-szivattyu-ontozeshez.svg",
      nev: "Kerti szivattyú öntözéshez",
      value: "kertiszivattyuontozes",
    },
    {
      id: 35,
      icon: "/medence-szivattyu.svg",
      nev: "Medence szivattyú",
      value: "medenceszivattyu",
    },
    {
      id: 36,
      icon: "/elektromos-funyiro.svg",
      nev: "Elektromos fűnyíró",
      value: "elektromosfunyiro",
    },
    {
      id: 37,
      icon: "/elektromos-autotoltes.svg",
      nev: "Elektromos autótöltés",
      value: "elektromosautotoltes",
    },
    {
      id: 38,
      icon: "/kerti-grill-elektromos.svg",
      nev: "Kerti grill elektromos",
      value: "kertigrill",
    },
    {
      id: 39,
      icon: "/elektromos-kerti-futotest.svg",
      nev: "Elektromos kerti fűtőtest",
      value: "elektromoskertifutotest",
    },
    {
      id: 40,
      icon: "/kerti-medence-futes.svg",
      nev: "Kerti medence fűtés",
      value: "kertiedencefutes",
    },
    {
      id: 41,
      icon: "/elektromos-kerti-szerszamok.svg",
      nev: "Elektromos kerti szerszámok",
      value: "elektromoskertiszerszamok",
    },
  ]);


  const addNewTile = () => {
    if (tiles.length < MAX_TILES) {  // Max 10 predefined fields
      const newIndex = tiles.filter(tile => tile.value.startsWith('egyeni')).length + 1;
      const newValue = `egyeni${newIndex}`;
  
      setTiles([...tiles, { id: Date.now(), icon: "", egyeninev: "", value: newValue, isNew: true }]);
    }
  };

  const removeTile = (id, value) => {
    setTiles(tiles.filter(tile => tile.id !== id));

    // Construct the context setter keys
    const setterKey = `set${value.charAt(0).toUpperCase() + value.slice(1)}`;
    const nameSetterKey = `setEgyeniNev${value.replace('egyeni', '')}`;

    // Clear the corresponding egyeniX and egyeniNevX values
    if (context[setterKey]) {
        context[setterKey]("");
    }
    if (context[nameSetterKey]) {
        context[nameSetterKey]("");
    }
};
 

  return (
    <section className="flex w-full lg:min-h-[80vh] bg-[--black] pt-2 px-4">
      <div className="flex flex-col container m-auto lg:py-20 py-8 gap-16 text-white">
        <div className="flex flex-col gap-8">
          <div className="flex flex-row lg:justify-center gap-4 ">
            {emailaddress && keresztnev ? (
              <div className="flex flex-row gap-4">
                <H1>Üdv</H1>
                <H1 classname={"text-[--yellow]"}> {keresztnev}</H1>
              </div>
            ):(
              <div className="flex flex-col gap-8 items-center p-8 rounded-3xl bg-[--yellow] text-[--black] text-center mb-16">
                  <H1>Hoppá!</H1>
                  <Paragraph classname={"lg:w-1/2 font-semibold"}>
                    Úgy tűnik nem az emailben kapott linket nyitottad meg. A
                    beazonosíthatóság miatt kérlek nyisd meg azt a linket amit
                    emailben küldtünk.
                  </Paragraph>
                  {/*<input
                    onChange={(e) => {setEmailaddress(e.target.value)}}
                    type="text"
                    className="bg-[--yellow-hover] p-4 rounded-3xl min-w-[300px]"
                    value={emailaddress || ""}
                  />*/}
                </div>
            )}
          </div>
          <H3 classname={"lg:w-8/12 lg:self-center text-center"}>
          Az alábbi kérdőív kitöltésével segítesz nekünk abban, hogy pontosan megértsük az otthonod energiafogyasztási szokásait. Így egy olyan személyre szabott megoldást tudunk ajánlani, amivel optimalizálhatod a napelemes rendszered teljesítményét, és megfelelő nagyságú akkumulátor kapacitást javasolhatunk Neked. A kitöltés mindössze 10-15 percet vesz igénybe, és a végén egyedi kiértékelést küldünk neked!
          </H3>
        </div>
        <div className="relative flex flex-col gap-8 bg-[--white-bg] w-full h-auto rounded-3xl shadow-md lg:p-8 p-4">
          <H2 classname={"lg:text-center lg:w-1/2 w-10/12 lg:self-center text-[--yellow]"}>
            Kérlek válaszd ki, melyik hónap energia felhasználását fogod megadni
          </H2>
          <TbQuestionMark onClick={() => {togglePopup('honap'); setForm('honap')}} className="absolute right-8 top-8 min-w-8 h-auto text-[--green] border-2 border-[--green] rounded-full p-1 cursor-pointer"/>

          <select
            name="honap"
            id="honap"
            className="bg-[--black] px-4 py-4 text-xl rounded-full w-fit self-center text-center my-8"
            onChange={(e) => setHonap(e.target.value)}
            value={honap || "Január"}
          >
            <option value="Január">Január</option>
            <option value="Február">Február</option>
            <option value="Március">Március</option>
            <option value="Április">Április</option>
            <option value="Május">Május</option>
            <option value="Június">Június</option>
            <option value="Július">Július</option>
            <option value="Augusztus">Augusztus</option>
            <option value="Szeptember">Szeptember</option>
            <option value="Október">Október</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="relative flex flex-col gap-4 bg-[--white-bg] w-full h-auto rounded-3xl shadow-md lg:p-8 p-4">
          <H2 classname={"lg:text-center lg:w-1/2 w-10/12 lg:self-center text-[--yellow]"}>
            Jelöld meg azokat az eszközökek amiket napi szinten használsz a
            háztartásodban.
          </H2>
          <TbQuestionMark onClick={() => {togglePopup('nap'); setForm('nap')}} className="absolute right-8 top-8 min-w-8 h-auto text-[--green] border-2 border-[--green] rounded-full p-1 cursor-pointer"/>
          <div className="grid grid-cols-1 gap-4 mt-16">
            {tiles.map((tile) => (
              <ValasztoTile
                key={tile.id}
                icon={tile.icon || ''}
                nev={tile.nev}
                egyeninev={''}
                value={tile.value}
                isNew={tile.isNew}
                onRemove={() => removeTile(tile.id, tile.value)}
                onNameChange={updateTileName}
                setContext={context[`set${tile.value.charAt(0).toUpperCase() + tile.value.slice(1)}`]}
                showName={true}
              />
            ))}
          </div>
          <button
            onClick={addNewTile}
            className="flex flex-nowrap gap-4 items-center justify-center group px-4 py-2 bg-[--white-bg] rounded-2xl shadow-md hover:bg-[--green-hover] transition-all min-h-[100px]"
            disabled={tiles.length >= MAX_TILES}
          >
            <TbPlus className="min-w-8 h-auto text-[--green] group-hover:text-black"/>
            <H3 classname={'text-[--green] group-hover:text-black'}>Egyéb eszköz hozzáadása</H3>
          </button>
        </div>
        <button
            onClick={handleSendData}
            className="flex flex-nowrap gap-4 items-center justify-center group px-4 py-4 bg-[--yellow] hover:bg-[--yellow-hover] rounded-2xl shadow-md transition-all  w-fit self-center"
          >
            <H3 classname={'text-black group-hover:text-black'}>Beküldés</H3>
          </button>
      </div>
    </section>
  );
}
