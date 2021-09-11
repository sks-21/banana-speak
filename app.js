const form = document.querySelector("#input");
const dispDiv = document.querySelector("#translatedText");

const baseURL = "https://api.funtranslations.com/translate/minion.json";

form.elements.translate.addEventListener("click", async (e) => {
  e.preventDefault();

  const input = form.elements.textarea;
  const ansText = await translate(input.value);
  dispDiv.innerText = ansText;
});

form.elements.clear.addEventListener('click', () => {
  e.preventDefault();

  form.elements.textarea.value = "";
  dispDiv.innerText = "";
})

const translate = async (val) => {
  const config = {
    params: {
      text: val,
    },
  };

  const res = await axios.get(`${baseURL}`, config);
  return res.data.contents.translated;
};