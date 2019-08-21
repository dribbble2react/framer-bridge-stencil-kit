import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { useScript } from "../utils/useScript";
import { localStencilComponents } from "../utils/constants";

type Props = {
  value: string;
  placeholder: string;
  disabled: boolean;
  error: boolean;
};

export function LocalInput(props: Props) {
  const [loaded, error] = useScript(localStencilComponents);

  React.useEffect(() => {
    if (!loaded) return;
  }, [loaded, error]);

  const LocalStencilInput = React.useMemo(() => {
    return (
      //@ts-ignore
      <my-input
        value={props.value}
        placeholder={props.placeholder}
        error={props.error}
        disabled={props.disabled}
      />
    );
  }, [props]);

  return (
    <Frame size={"100%"} background={""}>
      {loaded && !error ? LocalStencilInput : <b>Something went wrong!</b>}
    </Frame>
  );
}

//@ts-ignore
addPropertyControls(LocalInput, {
  value: { title: "Value", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "Email"
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean,
    defaultValue: false
  },
  error: { title: "Error", type: ControlType.Boolean, defaultValue: false }
});

LocalInput.defaultProps = {
  height: 50,
  width: 150
};
