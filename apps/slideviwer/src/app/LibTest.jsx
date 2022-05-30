import { DefaultButton, Icons,  Input,  Radio,  theme } from "@qritive/qritive"

function LibTest () {
    return (
        <div>
            {theme.neutral.D15}
            <DefaultButton >hello world</DefaultButton>   
            <Icons.Pause />
            <Input placeholder="hello" />
            <Radio>hekbb</Radio>
        </div>
    )
}

export default LibTest