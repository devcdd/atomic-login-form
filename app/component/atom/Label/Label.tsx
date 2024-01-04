import React, { useEffect } from "react";

interface LabelProps {
  label: string;
}

const Label = (props: LabelProps) => {
  return <label className={"text-sm"}>{props.label}</label>;
};

export default React.memo(Label);
