import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { useScript } from "./useScript"
import { StencilComponents } from "./constants"

type Props = {
    text: string
    fluid: boolean
    disabled: boolean
    kind?: "default" | "primary" | "danger"
}

export function Button(props: Props) {
    const [loaded, error] = useScript(StencilComponents)

    React.useEffect(() => {
        if (!loaded) return
    }, [loaded, error])

    return (
        <Frame size={"100%"} background={""}>
            {loaded && !error ? (
                //@ts-ignore
                <my-button
                    text={props.text}
                    fluid={props.fluid}
                    disabled={props.disabled}
                    kind={props.kind}
                />
            ) : (
                <b>Something went wrong!</b>
            )}
        </Frame>
    )
}

//@ts-ignore
addPropertyControls(Button, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Download App",
    },
    fluid: { title: "Fluid", type: ControlType.Boolean, defaultValue: true },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    kind: {
        title: "Kind",
        options: ["default", "primary", "danger"],
        optionTitles: ["Default", "Primary", "Danger"],
        type: ControlType.Enum,
        defaultValue: "default",
    },
})

Button.defaultProps = {
    height: 50,
    width: 150,
}
