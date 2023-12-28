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
      title: "",
      time: 0,
      rating: 0,
      price: 0,
      type: "",
    },
  ];

  const loading = () => {
    container.innerHTML =
      "<p style = 'width : 100%; text-align : center;'>загрузка</p>";
  };
  loading();
};

modalFunc();
restFunc();
