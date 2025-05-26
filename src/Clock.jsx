import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

/**
 * Clock 컴포넌트
 *
 * 실시간 시계를 표시하고 사용자가 시계를 시작하거나 정지할 수 있는 React 함수형 컴포넌트입니다.
 * 시간은 "시", "분", "초"로 나뉘어 표시됩니다.
 *
 * 주요 기능:
 * - 현재 시간을 "HH:mm:ss" 형식으로 표시합니다.
 * - 시계가 실행 중일 때 매초마다 시간을 업데이트합니다.
 **/

const TimeContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
  background-color: #f0f0f0;
  padding: 24px 40px 40px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    letter-spacing: 4px;
    font-size: 24px;
  }
`
const TimerButton = styled.button`
  background-color: ${(props) => props.active ? '#ff2424' : 'darkgray'};
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  border: none;
  cursor: pointer;
`
function Clock() {
  const [timerStart, setTimerStart] = useState(true);
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [second, setSecond] = useState('');
  const intervalRef = useRef(null);

  const updateTime = () => {
    const date = new Date();
    setHour(String(date.getHours()).padStart(2, '0'));
    setMinute(String(date.getMinutes()).padStart(2, '0'));
    setSecond(String(date.getSeconds()).padStart(2, '0'));
  }

  const handleTimer = () => {
    setTimerStart(prev => !prev);
  }

  useEffect(() => {
    if (timerStart) {
      updateTime();
      intervalRef.current = setInterval(updateTime, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [timerStart]);

  return (
    <TimeContainer>
      <h1>RealTIme Clock</h1>
      <p>{hour}시 {minute}분 {second}초</p>
      <TimerButton active={timerStart} onClick={handleTimer}>
        타이머 {timerStart ? '정지' : '시작'}
      </TimerButton>
    </TimeContainer>
  );
}

export default Clock;
