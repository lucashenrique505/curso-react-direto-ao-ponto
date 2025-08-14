import "./styles.css";

function Post(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>
        Leia em {props.readingTime}{" "}
        {props.readingTime === 1 ? "minuto" : "minutos"}
      </p>

      {props.children}
    </article>
  );
}

export default Post;
