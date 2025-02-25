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

export default function Valaszto({ name, email, azonosito }) {

  const context = useContext(Context);

  const {
      emailaddress,
      azonositonumber,
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
      setHonap,
  } = useContext(Context)

  useEffect(() => {
    if (email) {
      setEmailaddress(email);
    }

    if (azonosito) {
      setAzonositonumber(azonosito)
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
      ElektromosRedony: elektromosredony,
      ElektromosSuto: elektromossuto,
      Elektromosvasalo: elektromosvasalo,
      Fagyasztolada: fagyasztolada,
      Gozkabin: gozkabin,
      Hifirendszer: hifirendszer,
      HoszivattyusRendszer: hoszivattyusrendszer,
      Hutoszekreny: hutoszekreny,
      IndukciosFozolap: indukciosfozolap,
      Jatekkonzol: jatekkonzol,
      Klimaberendezes: klimaberendezes,
      KameraRendszer: kamerarendszer,
      LaptopPc: laptoppc,
      LedVilagitas: ledvilagitas,
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


  const MAX_TILES = 28;
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
    { id: 16, icon: "/kamera.svg", nev: "Kamera rendszer", value: "kamerarendszer" },
    { id: 17, icon: "/pc.svg", nev: "Laptop/PC", value: "laptoppc" },
    { id: 18, icon: "/led.svg", nev: "LED világítás (összesen)", value: "ledvilagitas" },
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
      <div className="flex flex-col container m-auto lg:py-20 py-8 gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-row lg:justify-center gap-4 ">
            {emailaddress && name ? (
              <div className="flex flex-row gap-4">
                <H1>Üdv</H1>
                <H1 classname={"text-[--yellow]"}> {name}</H1>
              </div>
            ):(
              <div className="flex flex-col gap-8 items-center p-8 rounded-3xl bg-[--yellow] text-[--black] text-center mb-16">
                  <H1>Hoppá!</H1>
                  <Paragraph classname={"lg:w-1/2 font-semibold"}>
                    Úgy tűnik nem az emailben kapott linket nyitottad meg. A
                    beazonosíthatóság miatt kérlek nyisd meg azt a linket amit
                    emailben küldtünk, vagy az alábbi mezőbe írd be az email
                    címed.
                  </Paragraph>
                  <input
                    onChange={(e) => {setEmailaddress(e.target.value)}}
                    type="text"
                    className="bg-[--yellow-hover] p-4 rounded-3xl min-w-[300px]"
                    value={emailaddress || ""}
                  />
                </div>
            )}
          </div>
          <H3 classname={"lg:text-center lg:w-1/2 lg:self-center"}>
            Ezen az oldalon a te energiafelhasználásodat vizsgáluk meg annak
            érdekében, hogy a napelem rendszeredhez a legoptimálisabb
            akkumulátort tudjuk ajánlani.
          </H3>
        </div>
        <div className="flex flex-col gap-8 bg-[--white-bg] w-full h-auto rounded-3xl shadow-md p-8">
          <H2 classname={"text-center lg:w-1/2 self-center text-[--yellow]"}>
            Melyik hónapra optimalizáljuk az akkumulátor használatot?
          </H2>
          <div className="flex flex-row gap-4 items-start justify-center w-fit self-center bg-[--white-bg] p-4 rounded-2xl lg:w-1/2">
            <TbBulb className="min-w-8 h-auto text-[--green] " />
            <Paragraph classname={""}>
              Válaszdd ki azt a hónapot, amikor számodra a legfontosabb, hogy az
              akkumulátor optimálisan működjön! Ez segít abban, hogy a
              rendszered a kiválasztott időszakban a lehető legjobban
              illeszkedjen az energiaigényeidhez.
            </Paragraph>
          </div>

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
        <div className="flex flex-col gap-4 bg-[--white-bg] w-full h-auto rounded-3xl shadow-md p-8">
          <H2 classname={"text-center lg:w-1/2 self-center text-[--yellow]"}>
            Jelöld meg azokat az eszközökek amiket napi szinten használsz a
            háztartásodban.
          </H2>
          <div className="flex flex-row gap-4 items-start justify-center w-fit self-center bg-[--white-bg] p-4 rounded-2xl lg:w-1/2">
            <TbBulb className="min-w-8 h-auto text-[--green]" />
            <Paragraph classname={""}>
              Az oldal jobb oldalán, a kis zöld választógombbal tudod kijelölni,
              majd konfigurálni a kívánt eszközöket.
            </Paragraph>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-16">
            {tiles.map((tile) => (
              <ValasztoTile
                key={tile.id}
                icon={tile.icon}
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
