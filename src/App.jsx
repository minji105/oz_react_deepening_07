import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Clock from './Clock';

/**
 * App 컴포넌트는 버튼을 통해 Clock 컴포넌트의 실행 상태를 제어하는 기능을 제공합니다.
 *
 * App 컴포넌트를 렌더링하면 버튼과 Clock 컴포넌트가 표시됩니다.
 *
 *
 * 상태:
 * - componentRunning: Clock 컴포넌트의 실행 여부를 나타내는 상태입니다. (true: 실행 중, false: 정지)
 *
 * 함수:
 * - handleComponentToggle: 버튼 클릭 시 componentRunning 상태를 토글하여 Timer 컴포넌트의 실행 상태를 변경합니다.
 *
 * 렌더링:
 * - 버튼: 현재 상태에 따라 '컴포넌트 정지' 또는 '컴포넌트 시작' 텍스트를 표시하며, 클릭 시 상태를 변경합니다.
 * - Clock 컴포넌트: componentRunning 상태가 true일 때만 렌더링됩니다.
 */
const StyledButton = styled.button`
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.active ? '#ff2424' : 'darkgray'};
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  border: none;
  cursor: pointer;
`
function App() {
  const [componentRunning, setComponentRunning] = useState(false);

  const handleComponentToggle = () => {
    setComponentRunning(prev => !prev);
    console.log(componentRunning);
  }

  return (
    <>
      <div className="container">
        {componentRunning && <Clock />}
        <StyledButton active={componentRunning} onClick={handleComponentToggle}>
          컴포넌트 {componentRunning ? '정지' : '시작'}
        </StyledButton>
      </div>
    </>
  );
}

export default App;
