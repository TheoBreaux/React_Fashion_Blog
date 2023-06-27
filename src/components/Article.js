import React from "react";
// import Woman from "../images/woman.jpg";
// import Trio from "../images/trio.jpg";

import "./Article.css";

const Article = (props) => {
  return (
    <div
      style={{
        marginBottom: "4rem",
        borderBottom: "1px solid lightgray",
        paddingBottom: "2rem",
      }}
    >
      <p>{props.date}</p>
      <p class="blog-title">{props.title}</p>
      <img src={props.image} alt="woman on street" />
      <p class="blog-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptatum!
        Beatae culpa sequi, nemo iusto sed saepe dicta, ipsa natus hic sit fugit
        labore repellendus pariatur explicabo laborum perspiciatis delectus.
        Nostrum odio natus ducimus aliquam dolorem sit eos cupiditate magni, ab,
        magnam doloremque mollitia nemo assumenda? Modi amet eius, quisquam qui
        cum fugiat laboriosam mollitia et, dolore odio voluptatum dolor!
        Asperiores laudantium, eveniet quibusdam obcaecati aliquid ullam
        voluptas est quas. Quae cupiditate earum veniam vel pariatur optio
        commodi culpa quaerat molestiae nisi, dolorum numquam est debitis, ea,
        veritatis minus suscipit. Aliquid, provident explicabo? Quae labore
        voluptas laboriosam assumenda consequuntur, vel nemo amet blanditiis
        molestiae officiis tenetur, distinctio iste pariatur beatae soluta
        maxime dolore! Omnis, quidem. Magni nesciunt rem eum pariatur. Sint
        nostrum quo nemo id, repellat, et molestiae velit reprehenderit soluta
        quibusdam corporis voluptatem impedit magnam autem. Voluptatibus quam
        qui officiis veritatis ipsum a necessitatibus rerum magni. Sed, ipsum
        illum!
      </p>
      <a href="#continue">
        <p class="continue">Continues...</p>
      </a>
    </div>
  );
};

export default Article;
