const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-button");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal__overlay") ||
      event.target.closest(".cart-modal__header_close")
    ) {
      closeModal();
    }
  });
};

const restFunc = () => {
  const container = document.querySelector("#rests-container");

  const restArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "image1.jpg",
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "image2.jpg",
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "image3.jpg",
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "image4.jpg",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "image5.jpg",
    },
    {
      id: 5,
      title: " PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "image6.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      "<p style = 'width : 100%; text-align : center;'>загрузка</p>";
  };

  const renderRests = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
        <a href="./goods.html?id='${card.id}'" class="products-card">
        <div class="products-card__image">
          <img src="./images/rests/${card.image}" alt="rests1" />
        </div>
        <div class="products-card__description">
          <div class="products-card__description-row">
            <h4 class="products-card__description-title">${card.title}</h4>
            <div class="products-card__description-bage">${card.time} мин</div>
          </div>
          <div class="products-card__description-row">
            <div class="products-card__description-info">
              <div class="products-card__description-info--rating">
                <img src="./images/icon/star.svg" alt="star" />${card.rating}
              </div>
              <div class="products-card__description-info--price">
                От ${card.price} ₽
              </div>
              <div class="products-card__description-info--group">
              ${card.type}
              </div>
            </div>
          </div>
        </div>
      </a>
      `
      );
    });
  };
  if (container) {
    loading();
    setTimeout(() => {
      renderRests(restArray);
    }, 2000);
  }
};

modalFunc();
restFunc();
