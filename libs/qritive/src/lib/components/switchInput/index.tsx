import { Switch } from 'antd';
import { SwitchSize } from 'antd/lib/switch';
import { SwitchInputContainer } from './style';

interface ISwitchInput {
  checked: boolean;
  inputSize: SwitchSize;
}

function SwitchInput({ checked, inputSize }: ISwitchInput) {
  return (
    <SwitchInputContainer>
      <Switch defaultChecked={checked} size={inputSize} />
    </SwitchInputContainer>
  );
}

export default SwitchInput;
