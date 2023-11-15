const getRandomUser = async () => {
  try {
    const response = await fetch("https://randomuser.me/api");

    if (!response.ok) {
      throw new Error("Something went wrong, status:" + response.status);
    }

    const data = await response.json();
    return {
      picture: data.results[0].picture.large,
      name: data.results[0].name.first,
      city: data.results[0].location.city,
      postcode: data.results[0].location.postcode,
      phone: data.results[0].phone,
    };
  } catch (error) {
    throw new Error(error);
  }
};

const displayUserData = (userData) => {
  const userPictureElement = document.querySelector(".user-picture");
  const userNameElement = document.querySelector(".user-name");
  const userCityElement = document.querySelector(".user-city");
  const userPostcodeElement = document.querySelector(".user-postcode");
  const userPhoneElement = document.querySelector(".user-phone");

  userPictureElement.src = userData.picture;
  userNameElement.textContent = `Name: ${userData.name}`;
  userCityElement.textContent = `City: ${userData.city}`;
  userPostcodeElement.textContent = `Postcode: ${userData.postcode}`;
  userPhoneElement.textContent = `Phone: ${userData.phone}`;
};

document.addEventListener("DOMContentLoaded", () => {
  const getUserButton = document.querySelector(".user-button");

  getUserButton.addEventListener("click", () => {
    getRandomUser().then((data) => {
      displayUserData(data);
    });
  });
});
