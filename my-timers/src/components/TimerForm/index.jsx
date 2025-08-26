import styles from "./TimerForm.module.css";

const TimerForm = ({ setTimers }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const newTimer = Object.fromEntries(new FormData(form));

    newTimer.id = Date.now(); //Alternativa: UUID
    newTimer.duration = parseInt(newTimer.duration);

    setTimers((timers) => [...timers, newTimer]);

    form.reset();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <input
          type="text"
          className={styles.input}
          name="name"
          placeholder="Nome"
          defaultValue="Teste"
        />
        <input
          type="number"
          className={styles.input}
          name="duration"
          placeholder="Duração (segundos)"
          min="1"
          defaultValue="4"
        />
        <input type="submit" className={styles.submitButton} value="+" />
      </form>
    </>
  );
};

export default TimerForm;
