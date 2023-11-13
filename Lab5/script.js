function validateFullName(fullName) {
  const regex = /^[A-Za-z]{6} [A-Za-z]\.[A-Za-z]\.$/;
  return regex.test(fullName);
}

function validatePhone(phone) {
  const regex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
  return regex.test(phone);
}

function validateIdCard(idCard) {
  const regex = /^[A-Za-z]{2} №\d{6}$/;
  return regex.test(idCard);
}

function validateBirthDate(birthDate) {
  const regex = /^\d{2}\.\d{2}\.\d{4}$/;
  return regex.test(birthDate);
}

function validateEmail(email) {
  const regex = /^[a-z]{5}@[a-z]{5}\.[a-z]{3}$/;
  return regex.test(email);
}

document.addEventListener("DOMContentLoaded", () => {
  const fullNameInput = document.querySelector("#full-name");
  const phoneInput = document.querySelector("#phone");
  const idCardInput = document.querySelector("#id-card");
  const birthDateInput = document.querySelector("#birthdate");
  const emailInput = document.querySelector("#email");
  const submitButton = document.querySelector("#submit");

  submitButton.addEventListener("click", () => {
    if (!validateFullName(fullNameInput.value)) {
      fullNameInput.value = "";
      return;
    }
    if (!validatePhone(phoneInput.value)) {
      phoneInput.value = "";
      return;
    }
    if (!validateIdCard(idCardInput.value)) {
      idCardInput.value = "";
      return;
    }
    if (!validateBirthDate(birthDateInput.value)) {
      birthDateInput.value = "";
      return;
    }
    if (!validateEmail(emailInput.value)) {
      emailInput.value = "";
      return;
    }

    const validatedValues = {
      fullName: fullNameInput.value,
      phone: phoneInput.value,
      idCard: idCardInput.value,
      birthDate: birthDateInput.value,
      email: emailInput.value,
    };
    const validatedWindow = window.open("", "Validated Values");
    validatedWindow.document.write(
      `<html><head><title>Validated Values</title></head><body><pre>${JSON.stringify(
        validatedValues,
        null,
        2
      )}</pre></body></html>`
    );
  });

  const myVariantCell = document.querySelector(".my-variant");
  const diagonalCells = document.querySelectorAll(".diagonal");
  let randomColor;

  function handleMouseOver(event) {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.backgroundColor = `#${randomColor}`;
    myVariantCell.addEventListener("mouseout", handleMouseOut);
  }

  function handleMouseOut(event) {
    event.target.style.backgroundColor = "white";
  }

  function handleClick(event) {
    event.target.style.backgroundColor = `#${randomColor}`;
    myVariantCell.removeEventListener("mouseout", handleMouseOut);
  }

  function handleDoubleClick(event) {
    diagonalCells.forEach((cell) => {
      cell.style.backgroundColor = `#${randomColor}`;
    });
  }

  myVariantCell.addEventListener("mouseover", handleMouseOver);
  myVariantCell.addEventListener("mouseout", handleMouseOut);
  myVariantCell.addEventListener("click", handleClick);
  myVariantCell.addEventListener("dblclick", handleDoubleClick);
});
