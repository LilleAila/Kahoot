const kahootId = new URL(document.location).searchParams.get("id");

(() => {
  $.ajax({
    type: "GET",
    url: `https://cors.olaisolsvik.repl.co/create.kahoot.it/rest/kahoots/${kahootId}`,
    success: function (data) {
      console.log(data);
      const questions = data.questions;

      $(".kahoots").empty();

      for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const choices = question.choices;
        const image = question.image;
        console.log(question, choices, image);

        let choicesArr = [];

        for (let a = 0; a < choices.length; a++) {
          let image, imageClass;

          switch (a) {
            case 0:
              image = "triangle";
              imageClass = "triangle";
              break;
            case 1:
              image = "square";
              imageClass = "rhombus";
              break;
            case 2:
              image = "circle";
              imageClass = "circle";
              break;
            case 3:
              image = "square";
              imageClass = "square";
              break;
            default:
              return;
          }

          choicesArr.push(`
            <div class="answer">
              <img
                src="https://raw.githubusercontent.com/LilleAila/Images/main/${image}.png"
                class="${imageClass}"
              />
              ${choices[a].answer}
              <br/>
              ${
                choices[a].correct
                  ? `<img src="https://raw.githubusercontent.com/LilleAila/Images/main/checkmark.png" class="checkmark" />`
                  : ""
              }
            </div>
          `);
        }

        const choicesStr = choicesArr.join("");
        const questionStr = `
          <div class="kahoot">
            <h2>${question.question}</h2>
            <img
              class="kahootImage"
              src="${image}"
            />
            <div class="answers">
              ${choicesStr}
            </div>
          </div>
          <br/>
          <hr/>
          <br/>
        `;

        $(".kahoots").append(questionStr);
      }
    },
  });
})();
