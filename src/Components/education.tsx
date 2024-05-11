// import React from 'react'
import EducationTemplate from "./education_template"

function Education() {
  return (
    <div className="h-full" id="Education">
      <h1 className="text-5xl font-bold text-center mb-16">Education</h1>
      <EducationTemplate title="Institut Teknologi Sepuluh Nopember - Surabaya" d1="Informatics Engineering" d2="2023 - present"/>
      <EducationTemplate title="SMAN 2 Mandau - Duri" d1="Natural Science" d2="2020 - 2023"/>
    </div>
  )
}

export default Education