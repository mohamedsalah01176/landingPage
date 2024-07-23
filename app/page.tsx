import Image from "next/image";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import SectionComp from "./component/SrctionComp";
import Secion4 from "./component/secion4";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="relative  min-h-screen  overflow-x-hidden ">
      <Section1/>
      <Section2/>
      <Section3/>
      <SectionComp title={'WhY Aloe Vera?'} des={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores tempore sapiente totam eaque ipsa consequatur est quo, eum inventore eius vero nulla natus, dolore numquam laboriosam repudiandae reprehenderit, non distinctio!'} img={'/OIP (2).jpeg'} dir={'md:flex-row'} dirPoint={'-right-[10%]'} />
      <SectionComp title={'Healthy And Wellness'} des={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores tempore sapiente totam eaque ipsa consequatur est quo, eum inventore eius vero nulla natus, dolore numquam laboriosam repudiandae reprehenderit, non distinctio!'} img={'/skin-thumb1632891689.jpg'} dir={'md:flex-row-reverse'} dirPoint={'-left-[10%]'} />
      <Secion4/>
      <Footer/>
    </div>

  );
} 
