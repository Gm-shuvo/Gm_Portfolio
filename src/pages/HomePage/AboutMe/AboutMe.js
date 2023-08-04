import SelectionTitle from "../../../components/utils/SectionTitle";
import SectionHeader from "../../../components/utils/SectionHeader";
import { Link } from "react-router-dom";

export default function About() {
  const props = {
    icon: "https://cdn.lordicon.com/bhfjfgqz.json",
    title: "About Me",
  };

  const handleDownload = async () => {
    const cvUrl = "https://res.cloudinary.com/gmshuvo/image/upload/v1691131846/Gm_Shuvo_Resume_tsmthm.pdf";
    const Name = "Gm_Shuvo";
    try {
      const response = await fetch(cvUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${Name}_cv.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.log("Error in downloading CV:", error);
    }

  }

  return (
    <section id="about" className="mb-16">
      <SelectionTitle props={props} />
      <SectionHeader>
        Every great design begins with an even{" "}
        <span className="text-primary">better story</span>
      </SectionHeader>
      <p className="text-accent">
        As a self-taught web developer with{" "}
        <span className="text-primary">over a year of experience</span> in both{" "}
        <span className="text-primary">front-end</span> and{" "}
        <span className="text-primary">back-end</span> technologies, I
        specialize in creating visually appealing,{" "}
        <span className="text-primary">user-friendly interfaces</span> that
        provide real value to <span className="text-primary">users</span>.
        <br /> My problem-solving skills and meticulous attention to detail have
        enabled me to independently complete{" "}
        <span className="text-primary">several projects</span> to date.
        <br /> <br /> When I'm not coding, I enjoy reading, exploring new
        places, and watching sci-fi movies 📺
      </p>
      <div className="">
        <button
          onClick={handleDownload}
          className="uppercase flex items-center gap-2 md:text-2xl text-lg mt-[40px] font-semibold"
          
        >
          Get my CV
          <lord-icon
            target="div"
            src="https://cdn.lordicon.com/egiwmiit.json"
            trigger="hover"
            class="current-color"
            style={{ width: "24px", height: "24px" }}
          ></lord-icon>
        </button>
      </div>
    </section>
  );
}
