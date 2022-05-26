import styled from 'styled-components';
import LibTest from './LibTest';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <LibTest />
      <NxWelcome title="slideviwer" />
    </StyledApp>
  );
}

export default App;
