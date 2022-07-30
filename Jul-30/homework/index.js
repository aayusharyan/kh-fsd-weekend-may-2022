const render = data => {
  const container = document.getElementById("container");
  data.forEach(element => {
    const url = element.thumbnailUrl;
    const title = element.title;

    const new_div = document.createElement('div');
    const new_img = document.createElement("img");
    const new_title = document.createElement("h5");

    new_img.src = url;
    new_title.innerText = title;

    new_div.appendChild(new_img);
    new_div.appendChild(new_title);
    container.appendChild(new_div);
  });
}

fetch('https://jsonplaceholder.typicode.com/photos').then(response => {
  response.json().then(data => {
    render(data);
  })
});