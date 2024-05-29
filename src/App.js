import styled from 'styled-components';
import Cards from './components/Cards';
const AppWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;

    margin: 0;
    padding: 0;
`
function App() {
  return (
    <AppWrapper>
      <Cards />
    </AppWrapper>
  );
}

export default App;
