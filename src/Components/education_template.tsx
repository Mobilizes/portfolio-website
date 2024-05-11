interface EducationTemplateProps { title: string; d1: string; d2: string }

function EducationTemplate({ title, d1, d2 }: EducationTemplateProps) {
  return (
    <div className="border-l-4 border-black border-dashed pl-6 mt-20">
      <h1 className="font-bold text-3xl mb-2">{title}</h1>
      <ul className="list-disc ml-4 text-xl">
        <li>{d1}</li>
        <li>{d2}</li>
      </ul>
    </div>
  );
}

export default EducationTemplate;