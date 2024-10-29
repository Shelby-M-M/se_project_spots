const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    alt: "Bedroom view of house in the snow",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
    alt: "Front of restaurants",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
    alt: "Customers eating at a cafe",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
    alt: "Long bridge over the forest",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
    alt: "Long tunnel in daylight",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
    alt: "Cabin in the snow",
  },
];

console.log(initialCards);
//Form Elements
const profileEditButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileEditModal = document.querySelector("#edit-profile-modal");
const profileEditModalClose = profileEditModal.querySelector(
  ".modal__close-button"
);
const editModalNameInput = profileEditModal.querySelector(
  "#profile-name-input"
);
const editFormElement = profileEditModal.querySelector(".modal__form");
const editModalDescriptionInput = profileEditModal.querySelector(
  "#profile-describe-input"
);

//card Template
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

//profile Add Card Button
const cardAddButton = document.querySelector(".profile__new-post-button");
const cardModal = document.querySelector("#add-card-modal");
const cardFormElement = cardModal.querySelector(".modal__form");
const cardModalClose = cardModal.querySelector(".modal__close-button");
const cardModalNameInput = cardModal.querySelector("#add-card-name-input");
const cardModalDescriptionInput = cardModal.querySelector(
  "#add-card-link-input"
);

function getCardElement(data) {
  console.log(data);
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  cardNameElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.alt;

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_liked");

    cardDeleteButton.addEventListener("click", () => {
      cardDeleteButton.classList.toggle(".card__delete-button");
    });
  });

  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_open");
}

function closeModal(modal) {
  modal.classList.remove("modal_open");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal();
}

function handlecardFormSubmit(evt) {
  evt.preventDefault();
  console.log(cardModalNameInput.value);
  console.log(cardModalDescriptionInput.value);
  const inputValues = {
    name: cardModalNameInput.value,
    link: cardModalDescriptionInput.value,
  };
  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
  closeModal(cardModal);
}

profileEditButton.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileEditModalClose.addEventListener("click", () => {
  closeModal(profileEditModal);
});

editFormElement.addEventListener("submit", handleEditFormSubmit);

initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardsList.prepend(cardElement);
});

cardAddButton.addEventListener("click", () => {
  openModal(cardModal);
});

cardModalClose.addEventListener("click", () => {
  closeModal(cardModal);
});

cardFormElement.addEventListener("submit", handlecardFormSubmit);
