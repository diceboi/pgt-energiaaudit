"use client";

import { createContext, useState } from "react";
import Modal from "./components/UI/Modal";
import {
  TbAlertTriangle,
  TbCircleArrowRightFilled,
  TbQuestionMark,
  TbAlertCircle,
} from "react-icons/tb";
import H2 from "./components/Typo/H2";
import H3 from "./components/Typo/H3";
import H4 from "./components/Typo/H4";
import Label from "./components/Typo/Label";
import Paragraph from "./components/Typo/Paragraph";
import MainButton from "./components/UI/MainButton";

export const Context = createContext({
  emailaddress: "",
  azonositonumber: "",
  vezeteknevvalue: "",
  keresztnevvalue: "",
  honap: "",
  akvarium: "",
  bojler: "",
  borhuto: "",
  elektromosfutotestek: "",
  elektromosfutotestekm2: "",
  elektromosfutotestekkwh: "",
  elektromosredony: "",
  elektromossuto: "",
  elektromosvasalo: "",
  fagyasztolada: "",
  gozkabin: "",
  hifirendszer: "",
  hoszivattyusrendszer: "",
  hoszivattyusrendszerm2: "",
  hoszivattyusrendszerkwh: "",
  hutoszekreny: "",
  indukciosfozolap: "",
  jatekkonzol: "",
  klimaberendezes: "",
  klimaberendezesm2: "",
  klimaberendezeskwh: "",
  kamerarendszer: "",
  laptoppc: "",
  ledvilagitas: "",
  legtechnika: "",
  mikrohullamusuto: "",
  mosogatogep: "",
  mosogep: "",
  porszivo: "",
  riaszto: "",
  routerinternetmodem: "",
  szauna: "",
  szaritogep: "",
  tv: "",
  ventilator: "",
  viztisztito: "",
  elektromosvizforralo: "",
  kulterivilagitas: "",
  elektromoskapunyito: "",
  kertiszivattyuontozes: "",
  medenceszivattyu: "",
  elektromosfunyiro: "",
  elektromosautotoltes: "",
  kertigrill: "",
  elektromoskertifutotest: "",
  kertiedencefutes: "",
  elektromoskertiszerszamok: "",
  egyeni1: "",
  egyeniNev1: "",
  egyeni2: "",
  egyeniNev2: "",
  egyeni3: "",
  egyeniNev3: "",
  egyeni4: "",
  egyeniNev4: "",
  egyeni5: "",
  egyeniNev5: "",
  egyeni6: "",
  egyeniNev6: "",
  egyeni7: "",
  egyeniNev7: "",
  egyeni8: "",
  egyeniNev8: "",
  egyeni9: "",
  egyeniNev9: "",
  egyeni10: "",
  egyeniNev10: "",
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

  openPopup: "",
  setOpenPopup: () => {},
  togglePopup: () => {},
  form: "honap",
  setForm: () => {},
});

export default function ContextProvider({ children }) {
  const [emailaddress, setEmailaddress] = useState();
  const [azonositonumber, setAzonositonumber] = useState();
  const [vezeteknevvalue, setVezeteknevValue] = useState();
  const [keresztnevvalue, setKeresztnevValue] = useState();
  const [honap, setHonap] = useState();
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

  const [openPopup, setOpenPopup] = useState();
  const [form, setForm] = useState("honap");

  const togglePopup = (popupName) => {
    setOpenPopup((prevPopup) => (prevPopup === popupName ? null : popupName));
  };

  return (
    <Context.Provider
      value={{
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

        openPopup,
        setOpenPopup,
        togglePopup,
        form,
        setForm,
      }}
    >
      {children}
      <Modal openstate={openPopup} onClose={() => togglePopup(null)}>
        <>
          {form === "honap" && (
            <div className="flex flex-col gap-4 text-white">
              <TbQuestionMark className="text-[--green] min-w-12 h-auto self-center" />
              <div className="flex flex-row gap-2 items-start">
                <H2 classname={"text-yellow text-center pb-4"}>
                  Miért fontos a hónap kiválasztása?
                </H2>
              </div>
              <H3 classname={"text-center pb-8"}>
                A napelemes rendszer tervezéséhez elengedhetetlen, hogy pontos
                képet kapjunk az otthonod energiafogyasztásáról. Azért kérjük,
                hogy válassz ki egy konkrét hónapot, mert:
              </H3>
              <div className="space-y-4 p-4 bg-[--black] rounded-2xl">
                <H3 classname={"flex flex-nowrap items-start gap-2"}>
                  <TbCircleArrowRightFilled className="text-[--green] min-w-8 h-auto" />
                  Fogyasztási szokások változása:<br></br>
                </H3>
                <Paragraph>
                  Az energiafogyasztás általában hónapról hónapra változik az
                  évszakok, az időjárás és az életmód miatt. Például télen
                  gyakran használunk fűtést, míg nyáron a légkondicionálók
                  fogyasztása nő meg.
                </Paragraph>

                <H3 classname={"flex flex-nowrap items-start gap-2"}>
                  <TbCircleArrowRightFilled className="text-[--green] min-w-8 h-auto" />
                  Reális tervezés:<br></br>
                </H3>
                <Paragraph>
                  Ha egy olyan hónapot választasz, amely jól tükrözi a
                  háztartásod átlagos energiafogyasztását, pontosabban tudjuk
                  megtervezni a napelemes rendszeredet. Ez segít abban, hogy a
                  rendszered megfeleljen az igényeidnek egész évben.
                </Paragraph>

                <H3 classname={"flex flex-nowrap items-start gap-2"}>
                  <TbCircleArrowRightFilled className="text-[--green] min-w-8 h-auto" />
                  Extrém időszakok figyelembevétele:<br></br>
                </H3>
                <Paragraph>
                  Ha az energiaszükségleted nagyon eltérő bizonyos hónapokban
                  (pl. téli fűtés vagy nyári hűtés miatt), érdemes lehet ezeket
                  a hónapokat megadni, hogy figyelembe tudjuk venni a
                  csúcsfogyasztást is.
                </Paragraph>
              </div>

              <div className="flex flex-row gap-2 items-start">
                <H2 classname={"text-yellow text-center pb-4 pt-8"}>
                  Mit javasolunk?
                </H2>
              </div>

              <div className="space-y-4 p-4 bg-[--black] rounded-2xl">
                <H3 classname={"flex flex-nowrap items-start gap-2"}>
                  <TbCircleArrowRightFilled className="text-[--green] min-w-8 h-auto" />
                  Ha átlagos hónapot szeretnél választani:<br></br>
                </H3>
                <Paragraph>
                  Válaszd azt a hónapot, amely szerinted leginkább tükrözi az
                  otthonod általános energiafogyasztási szokásait (pl. egy
                  tavaszi vagy őszi hónapot, amikor nincs extrém fűtés vagy
                  hűtés). Konkrét javaslatunk: szeptember vagy október.
                </Paragraph>

                <H3 classname={"flex flex-nowrap items-start gap-2"}>
                  <TbCircleArrowRightFilled className="text-[--green] min-w-8 h-auto" />
                  Ha csúcsfogyasztásra szeretnél tervezni:<br></br>
                </H3>
                <Paragraph>
                  Ha szeretnéd, hogy a napelemes rendszered olyan időszakokra is
                  elegendő energiát termeljen, amikor a legnagyobb a
                  fogyasztásod, válaszd ki a téli vagy nyári hónapok egyikét.
                </Paragraph>

                <H3 classname={"flex flex-nowrap items-start gap-2"}>
                  <TbCircleArrowRightFilled className="text-[--green] min-w-8 h-auto" />
                  Ha nem vagy biztos benne:<br></br>
                </H3>
                <Paragraph>
                  Ne aggódj! Ha nem tudod, melyik hónapot lenne érdemes
                  választani, a villanyszámláid alapján segítünk meghatározni a
                  legjobb időszakot. Csak válaszd ki azt a hónapot, amelyről a
                  legkönnyebben hozzáférhető adatod van.
                </Paragraph>
              </div>

              <Paragraph classname={"flex flex-nowrap items-start gap-4"}>
                <TbAlertCircle className="text-[--yellow] min-w-8 h-auto" />A
                hónap kiválasztása nem végleges döntés. Ha később úgy érzed,
                hogy egy másik hónap jobban tükrözné az energiafogyasztásodat,
                jelezheted nekünk, és figyelembe vesszük azt is.
              </Paragraph>
            </div>
          )}
          {form === "nap" && (
            <div className="flex flex-col gap-4 text-white">
              <TbQuestionMark className="text-[--green] min-w-12 h-auto self-center" />
              <div className="flex flex-row gap-2 items-start">
                <H2 classname={"text-yellow text-center pb-4"}>
                  Használati útmutató a kitöltéshez
                </H2>
              </div>
              <H3 classname={"text-center pb-8"}>
                Az alábbi táblázat segítségével pontosan megadhatod, hogy melyik fogyasztót mikor használod a nap folyamán. Ez az információ segít nekünk abban, hogy pontosan megértsük az energiafogyasztási szokásaidat, és optimális napelemes rendszert tervezzünk számodra.
              </H3>
              <H3 classname={"text-center pb-8"}>
                Hogyan töltsd ki a mezőket?
              </H3>
              <div className="space-y-4 p-4 bg-[--black] rounded-2xl">
                <H3 classname={"flex flex-nowrap items-start gap-2"}>
                  <TbCircleArrowRightFilled className="text-[--green] min-w-8 h-auto" />
                  Fogyasztók<br></br>
                </H3>
                <Paragraph>
                  A kis csempékre rákattintva tudod megnyitni az adott fogyasztóhoz tartozó táblázatot ahol a nap óráit látod. Azokat az időintervallumokat (pl.: 13:00 - 14:00) kell megjelölni amikor az eszköz működik egy átlagos napon a kiválasztott hónapban. Amennyiben egyész nap megy akkor a jobb alsó sarokban található egész nap gombra kattintva tudod gyorsan megjelölni az összes mezőt. Figyelj, mert néhány helyen az időpontokon kívül egyéb adatokat is kérdezni fogunk tőled.
                </Paragraph>

                <H3 classname={"flex flex-nowrap items-start gap-2"}>
                  <TbCircleArrowRightFilled className="text-[--green] min-w-8 h-auto" />
                  Szerkesztés<br></br>
                </H3>
                <Paragraph>
                  Beküldés előtt bármikor módosíthatod az adatokat. Az egyszerűség kedvéért azoknál a fogyasztóknál ahol megjelöltél órákat, ott a csempe zöld színre vált. Ha a fogyasztó nevére ikonjára vagy a világosszürke/zöld sávra kattintasz, le tudod nyitni és vissza is tudod csukni az adott csempét, hogy ne legyen zavaró. Amennyiben a jobb szélén található kis &apos;csúszka&apos; gombra kattintasz, az töröl minden adatot az adott eszköznél, és alaphelyzetbe állítja azt.
                </Paragraph>

                <H3 classname={"flex flex-nowrap items-start gap-2"}>
                  <TbCircleArrowRightFilled className="text-[--green] min-w-8 h-auto" />
                  Egyedi eszközök<br></br>
                </H3>
                <Paragraph>
                  10db egyedi eszközt is meg tudsz adni az &apos;+ Egyéb eszköz hozzáadása&apos; gombbal. Itt az eszköz nevét, és a használati órákat kell megadnod hasonló módon, mint a listázott eszközöknél. Ha szeretnél extrán segíteni nekünk, a név után plusszba tedd oda a fogyasztást is.
                </Paragraph>

              </div>

              <div className="flex flex-row gap-2 items-start">
                <H2 classname={"text-yellow text-center pb-4 pt-8"}>
                  Tippek a kitöltéshez:
                </H2>
              </div>

              <div className="space-y-4 p-4 bg-[--black] rounded-2xl">
                <H3 classname={"flex flex-nowrap items-start gap-2"}>
                  <TbCircleArrowRightFilled className="text-[--green] min-w-8 h-auto" />
                  Folyamatos működésű eszközök:<br></br>
                </H3>
                <Paragraph>
                  Az olyan fogyasztók esetében, amelyek egész nap működnek (pl. hűtőszekrény, riasztó, akváriumszűrő), egyszerűbb az „Egész nap” gombbal kijelölni az egész napot.
                </Paragraph>

                <H3 classname={"flex flex-nowrap items-start gap-2"}>
                  <TbCircleArrowRightFilled className="text-[--green] min-w-8 h-auto" />
                  Időszakosan használt eszközök:<br></br>
                </H3>
                <Paragraph>
                  Olyan eszközöknél, mint a mosógép, sütő, vagy elektromos fűtőtestek, érdemes pontosan megadni, hogy melyik órákban használod őket.
                </Paragraph>

                <H3 classname={"flex flex-nowrap items-start gap-2"}>
                  <TbCircleArrowRightFilled className="text-[--green] min-w-8 h-auto" />
                  Szezonális fogyasztók:<br></br>
                </H3>
                <Paragraph>
                  Ha az adott eszközt csak bizonyos évszakokban használod (pl. klíma nyáron vagy elektromos fűtés télen), a kiválasztott hónapnak megfelelően töltsd ki a fogyasztási adatokat.
                </Paragraph>
              </div>
            </div>
          )}
        </>
      </Modal>
    </Context.Provider>
  );
}
