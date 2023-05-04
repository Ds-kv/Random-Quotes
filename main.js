// import "./style.css";

let dat = [];
let quoteDiv = document.querySelector("#quote");

function saveData(data) {
  dat = data;
}

async function getData() {
  const response = await fetch("https://type.fit/api/quotes");
  const jsonData = await response.json();

  saveData(jsonData);
  return jsonData;
}

function showQuote() {
  let selectedQuote = dat[Math.floor(Math.random() * dat.length)]
  console.log(selectedQuote);

  quoteDiv.innerHTML = `<div id="quote_text_container">
  <h4 id="d_quote_l">"</h4>
  <h3 id="quote_text">${selectedQuote.text}</h3>
  <h4 id="d_quote_r">"</h4>
</div>
<h4 id="quote_author">- ${selectedQuote.author == null ? "Anonymous" : selectedQuote.author}</h4>`;
}

getData().then(()=>{
  // console.log(dat);
  showQuote();
  document.querySelector("#generate_btn").addEventListener("click", ()=>{
    showQuote();
  })
}).catch(()=>{
  alert("Failed to connect to the API. Check your internet connection");
  dat = [{text: "An Error Occured", author: "Try again"}]
  showQuote()
})
