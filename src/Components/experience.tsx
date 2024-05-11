import ExperienceTemplate from "./experience_template";

function Experience() {
  const ach1 = [
    "Meriset jalur baru untuk robot menggunakan kurva Bezier untuk mengoptimisasikan pergerakan robot", 
    "Mempelajari banyak topik programming, berupa Object Oriented Programming, Code Architecture",
    "Mengenali Robot Operating System 2 yang digunakan untuk memprogram robot",
    "Mengenali penggunaan Git / Version Control System untuk menyimpan progress kode",
  ];
  const ach2 = [
    "Mempelajari topik Competitive Programming, seperti Greedy, Ad-Hoc, dan Dynamic Programming",
    "Membuat soal dengan topik Dynamic Programming dan Graph yang memiliki tingkat kesulitan Medium-Hard",
  ];
  const ach3 = [
    "Mengajari anggota IT Club baru basis dari bahasa pemrograman Python dalam rangka upgrading.",
    "Mendemonstrasikan projek game di acara MPLS untuk memperkenalkan klub IT terhadap siswa baru.",
  ];
  return (
    <div className="h-full mt-24" id="Experiences">
      <h1 className="text-5xl font-bold text-center mb-16">Experience</h1>
      <ExperienceTemplate title="ICHIRO ITS - Surabaya" d1="Junior Programmer" d2="2024 - present" ach={ach1}/>
      <ExperienceTemplate title="Schematics NPC - Surabaya" d1="IOI Problemsetter" d2="2024 - present" ach={ach2}/>
      <ExperienceTemplate title="IT Club SMAN 2 Mandau - Duri" d1="Vice President" d2="2020 - 2023" ach={ach3}/>
    </div>
  );
}

export default Experience;