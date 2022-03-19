const output = document.querySelector(".output");

function result() {
    fetch("list.json").then((res) => {
            return res.json();
        }).then((datas) => {

            datas.forEach((data) => {

                const block = document.createElement("div");
                output.appendChild(block);
                block.classList.add("card");

                const image = document.createElement("img");
                block.appendChild(image);
                image.classList.add("photo");
                image.setAttribute("alt", "photo");
                image.setAttribute("src", `${data.img}`);

                const title = document.createElement("div");
                block.appendChild(title);
                title.classList.add("title");
                title.innerText="Название продукта";
                const titleText = document.createElement("h2");
                title.appendChild(titleText);
                titleText.innerText = `${data.title}`;

                const price = document.createElement("div");
                block.appendChild(price);
                price.classList.add("price");
                price.innerText="Цена товара";
                const priceText = document.createElement("h3");
                price.appendChild(priceText);
                priceText.innerText = `${data.price}`;

                const descr = document.createElement("div");
                block.appendChild(descr);
                descr.classList.add("descr");
                descr.innerText="Описание товара";
                const descrText = document.createElement("h3");
                descr.appendChild(descrText);
                descrText.innerText = `${data.desc}`;
            })
        })
}

result();