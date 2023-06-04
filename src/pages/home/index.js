import { useState } from "react";
import path from "path";
import fs from "fs/promises";
import HeaderStyleOne from "@/components/header/HeaderStyleOne";
import Footer from "@/components/header/footer";
import HeroSectionStyleOne from "@/components/hero/styleOne";

function HomeVersion1(props) {
  const { data } = props;

  const [toggleClassName, SetToggleClassName] = useState(false);

  function toggleClassNameInBody() {
    SetToggleClassName((toggleClassName) => !toggleClassName);
  }

  return (
    <div
      className={`body-wrapper ${toggleClassName ? "ltn__utilize-open" : ""}`}
    >
      <HeaderStyleOne
        toggleClassNameInBody={toggleClassNameInBody}
        SetToggleClassName={SetToggleClassName}
      />
      <HeroSectionStyleOne data={data} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/data/hero/", "index.json");
  const data = JSON.parse(await fs.readFile(filePath));

  return {
    props: {
      data,
    },
  };
}
export default HomeVersion1;
