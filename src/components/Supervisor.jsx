import "../shared/container.css";
import SupervisorImg from "/images/icon-supervisor.svg";

export default function Supervisor() {
  return (
    <div className="box cyan">
      <h2>Supervisor</h2>
      <p>Monitors activity to identify project roadblocks</p>
      <img src={SupervisorImg} alt="SupervisorImg" />
    </div>
  );
}
