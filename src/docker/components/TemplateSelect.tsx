import { useCallback } from 'react';
import { useQuery } from 'react-query';
import Select from 'react-select';

import { getTemplateList } from '@docker/api';

interface IProps {
  setTemplate: (template: string | null) => void;
}

function TemplateSelect({ setTemplate }: IProps) {
  const { data } = useQuery('templates', getTemplateList);

  if (!data) {
    return null;
  }

  return (
    <Select
      options={data.data.templates.map((t) => ({
        value: t,
        label: t.split('_')[0],
      }))}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: '#C6974970',
          primary25: '#C69749',
        }
      })}
      styles={{
        option: (provided, state) => ({
          ...provided,
          color: '#000',
        })
      }}
      isClearable
      isSearchable
      placeholder="Select a template"
      onChange={(option) => setTemplate(option?.value ?? null)}
    />
  );
}

export default TemplateSelect;
