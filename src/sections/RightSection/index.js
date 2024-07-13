import ContentContainer from "../../components/ContentContainer";
import { data as aboutData } from "../../contents/about";
import { data as experienceData } from "../../contents/experience";
import { data as projectData } from "../../contents/project";
import About from "../About";
import Footer from "../Footer";

const RightSection = ({ onInitial, currectSection, scrollId }) => {
  return (
    <div id={scrollId} className="w-full grid gap-32 lg:gap-40">
      <About
        onInitial={onInitial}
        title="About"
        description={aboutData.description}
        stateWatchOnHover={currectSection}
      />
      {/* <Skill /> */}
      <ContentContainer
        onInitial={onInitial}
        title="Experience"
        data={experienceData}
        stateWatchOnHover={currectSection}
      />
      <ContentContainer
        onInitial={onInitial}
        title="Project"
        data={projectData}
        stateWatchOnHover={currectSection}
      />
      <Footer />
    </div>
  );
};

export default RightSection;
