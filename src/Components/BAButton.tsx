import { Button } from "@mui/material";

type propsType = {
    label: string;
    onClick?: any;
  };
  
  export default function BAButton(props: propsType) {
    const { label, onClick } = props;
    return (
      <button
        onClick={onClick}
        className="bg-gradient-to-r rounded full px-3 text-white p-2 from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
      >
        {label}
      </button>
    );
  }