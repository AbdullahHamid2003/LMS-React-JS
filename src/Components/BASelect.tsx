import Select, { SelectChangeEvent } from '@mui/material/Select';

type propsType = {
    label: string,
    option: object,
    onchange?: any,
}

export default function BASelect(props:propsType) {
  const {label, option, onchange} = props;
  
  const handleChange = (e: SelectChangeEvent) => {
    alert(e.target.value as string);
  };

  return (
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label= {label}
          onChange={handleChange}
        >
            {
                Array.isArray(option) && option.map((x,i)=>(
                    <option value={x.value}>{x.displayName}</option>
                ))
            }
        </Select>
  );
}
