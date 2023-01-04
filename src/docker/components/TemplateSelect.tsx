import { useState } from "react";
import Select from "react-select";
import { useQuery } from "react-query";

function TemplateSelect() {
  const [templates, setTemplates] = useState<string[]>(['base']);



  return (
    <Select options={templates.map((t) => ({ value: t, label: t }))} />
  )
}


export default TemplateSelect;