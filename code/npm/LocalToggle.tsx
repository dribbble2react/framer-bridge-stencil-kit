import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { useScript } from "../utils/useScript";
import { localStencilComponents } from "../utils/constants";

type Props = {
  disabled: boolean;
  on: boolean;
};

export function LocalToggle(props: Props) {
  const [loaded, error] = useScript(localStencilComponents);

  React.useEffect(() => {
    if (!loaded) return;
  }, [loaded, error]);

  const LocalStencilToggle = React.useMemo(() => {
    return (
      //@ts-ignore
      <my-toggle disabled={props.disabled} on={props.on} />
    );
  }, [props]);

  return (
    <Frame size={"100%"} background={""}>
      {loaded && !error ? LocalStencilToggle : <b>Something went wrong!</b>}
    </Frame>
  );
}

//@ts-ignore
addPropertyControls(LocalToggle, {
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean,
    defaultValue: false
  },
  on: { title: "On", type: ControlType.Boolean, defaultValue: false }
});

LocalToggle.defaultProps = {
  height: 36,
  width: 64
};
