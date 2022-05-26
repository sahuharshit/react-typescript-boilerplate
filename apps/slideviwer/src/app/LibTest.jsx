import { DefaultButton, DefaultCheckbox, Icons, Spinner, SpinnerUI, theme } from "@qritive/qritive"

function LibTest () {
    return (
        <div>
            {theme.neutral.D15}
            <DefaultButton >hello world</DefaultButton>   
            <Icons.Pause />
            <DefaultCheckbox checked />
        </div>
    )
}

export default LibTest