import Image from "next/image";
import Nav from "./components/Nav";
import Calculator from "./components/Calculator";
import Valaszto from "./components/Valaszto";
import { use } from "react";

export default function Home(props) {

  const searchParams = use(props.searchParams)

  return (
    <section>
      <Valaszto name={searchParams.name} email={searchParams.email}/>
    </section>
  );
}
