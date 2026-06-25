document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("checkPriceBtn");

  if (!btn) return;

  btn.addEventListener("click", async () => {

    const zipCode = document.getElementById("zipCode").value;

    const response = await fetch(
      "http://localhost:5000/api/check-price",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ zipCode })
      }
    );

    const data = await response.json();

    document.getElementById("priceResult").innerHTML =
      `Estimated Price: $${data.price}`;
  });

});