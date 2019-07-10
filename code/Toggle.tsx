import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { useScript } from "./useScript"
import { StencilComponents } from "./constants"

type Props = {
    disabled: boolean
    on: boolean
}

export function Toggle(props: Props) {
    const [loaded, error] = useScript(StencilComponents)

    React.useEffect(() => {
        if (!loaded) return
    }, [loaded, error])

    return (
        <Frame size={"100%"} background={""}>
            {loaded && !error ? (
                //@ts-ignore
                <my-toggle disabled={props.disabled} on={props.on} />
            ) : (
                <b>Something went wrong!</b>
            )}
        </Frame>
    )
}

//@ts-ignore
addPropertyControls(Toggle, {
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    on: { title: "On", type: ControlType.Boolean, defaultValue: false },
})

Toggle.defaultProps = {
    height: 36,
    width: 64,
}
