import ExperienceTemplate from "./experience_template";

function Experience() {
  return (
    <div className="h-full mt-24" id="Experiences">
      <h1 className="text-5xl font-bold text-center mb-16">Experience</h1>
      <ExperienceTemplate title="ICHIRO ITS - Surabaya" d1="Junior Programmer" d2="2024 - present"/>
      <ExperienceTemplate title="Schematics NPC - Surabaya" d1="IOI Problemsetter" d2="2024 - present"/>
      <ExperienceTemplate title="IT Club SMAN 2 Mandau - Duri" d1="Vice President" d2="2020 - 2023"/>
    </div>
  );
}

export default Experience;