const query = new URL(document.location).searchParams.get("query");

(() => {
  $.ajax({
    type: "get",
    url: `https://cors.infiniti20.repl.co/create.kahoot.it/rest/kahoots/?query=${query}`,
    success: function (data) {
      // console.log(data);
      for (let i = 0; i < data.entities.length; i++) {
        const card = data.entities[i].card;
        // console.log(card);
        /*let cardElement = $('<a>')
          .attr('href', './answers?id=')
          .text(card.name);*/
        let cardElement = `<a href="./answers.html?id=${card.uuid}" class="kahootLink">
          <b>${card.title}</b>&nbsp;-&nbsp;
          <i>${card.creator_username}</i>
        </a>
        <br/>`;
        const element = $(".results").append(cardElement);
      }
    },
  });
})();
