import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { useScript } from "../utils/useScript";
import { localStencilComponents } from "../utils/constants";

type Props = {
  text: string;
  fluid: boolean;
  disabled: boolean;
  kind?: "default" | "primary" | "danger";
};

export function LocalButton(props: Props) {
  const [loaded, error] = useScript(localStencilComponents);

  React.useEffect(() => {
    if (!loaded) return;
  }, [loaded, error]);

  const LocalStencilButton = React.useMemo(() => {
    return (
      //@ts-ignore
      <my-button
        text={props.text}
        fluid={props.fluid}
        disabled={props.disabled}
        kind={props.kind}
      />
    );
  }, [props]);

  return (
    <Frame size={"100%"} background={""}>
      {loaded && !error ? LocalStencilButton : <b>Something went wrong!</b>}
    </Frame>
  );
}

//@ts-ignore
addPropertyControls(LocalButton, {
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Download App"
  },
  fluid: { title: "Fluid", type: ControlType.Boolean, defaultValue: true },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean,
    defaultValue: false
  },
  kind: {
    title: "Kind",
    options: ["default", "primary", "danger"],
    optionTitles: ["Default", "Primary", "Danger"],
    type: ControlType.Enum,
    defaultValue: "default"
  }
});

LocalButton.defaultProps = {
  height: 50,
  width: 150
};
