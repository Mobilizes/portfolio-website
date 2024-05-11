interface ExperienceTemplateProps { title: string; d1: string; d2: string; ach : string[];}

function ExperienceTemplate({ title, d1, d2, ach }: ExperienceTemplateProps) {
  return (
    <div className="border-l-4 border-black border-dashed pl-6 mt-20 text-[#808080]">
      <h1 className="font-bold text-3xl mb-2 text-black">{title}</h1>
      <ul className="list-disc ml-4">
        <div className="text-xl hover:text-black duration-200">
          <li>{d1}</li>
          <li>{d2}</li>
        </div>
        {ach.map((item) => (
          <li className="hover:text-black duration-200">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceTemplate;