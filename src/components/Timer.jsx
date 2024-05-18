import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function Timer({ title, targetTime }) {
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  const timerRef = useRef();
  const modalRef = useRef();

  let timerActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  if (remainingTime <= 0) {
    clearInterval(timerRef.current);
    modalRef.current.open();
  }

  function handleReset() {
    setRemainingTime(targetTime * 1000);
  }

  function handleStartTimer() {
    timerRef.current = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
  }

  function handleStopTimer() {
    modalRef.current.open();
    clearInterval(timerRef.current);
  }

  return (
    <>
      <ResultModal
        ref={modalRef}
        targetTime={targetTime}
        remainingTime={remainingTime}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerActive ? handleStopTimer : handleStartTimer}>
            {timerActive ? "Stop" : "Start"} Timer
          </button>
        </p>
        <p>{timerActive ? "Timer running..." : "Timer inactive"}</p>
      </section>
    </>
  );
}
