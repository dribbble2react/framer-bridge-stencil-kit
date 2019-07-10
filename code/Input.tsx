import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { useScript } from "./useScript"
import { StencilComponents } from "./constants"

type Props = {
    value: string
    placeholder: string
    disabled: boolean
    error: boolean
}

export function Input(props: Props) {
    const [loaded, error] = useScript(StencilComponents)

    React.useEffect(() => {
        if (!loaded) return
    }, [loaded, error])

    return (
        <Frame size={"100%"} background={""}>
            {loaded && !error ? (
                //@ts-ignore
                <my-input
                    value={props.value}
                    placeholder={props.placeholder}
                    error={props.error}
                    disabled={props.disabled}
                />
            ) : (
                <b>Something went wrong!</b>
            )}
        </Frame>
    )
}

//@ts-ignore
addPropertyControls(Input, {
    value: { title: "Value", type: ControlType.String },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "Email",
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    error: { title: "Error", type: ControlType.Boolean, defaultValue: false },
})

Input.defaultProps = {
    height: 50,
    width: 150,
}
