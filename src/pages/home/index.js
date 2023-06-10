import path from "path";
import fs from "fs/promises";
import { LayoutOne } from "@/layouts";
import HeroSectionStyleOne from "@/components/hero/styleOne";

function HomeVersion1(props) {
  const { data } = props;

  return (
    <LayoutOne>
      <HeroSectionStyleOne data={data} />
    </LayoutOne>
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
