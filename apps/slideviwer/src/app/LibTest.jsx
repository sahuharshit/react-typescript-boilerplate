import { DefaultButton, Icons, PrimaryButton, theme } from "@qritive/qritive"
import { Map } from 'lodash'

function LibTest () {

    return (
        <div>
            {theme.neutral.D15}
            <DefaultButton >hello world</DefaultButton>   
            <Icons.Pause />
        </div>
    )
}

export default LibTest