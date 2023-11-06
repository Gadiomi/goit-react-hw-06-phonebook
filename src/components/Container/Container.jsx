import css from './Conteiner.module.css';

function Conatiner({ children }) {
  return <div className={css.container}> {children}</div>;
}

export default Conatiner;
