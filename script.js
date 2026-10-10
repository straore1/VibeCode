const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 2200);
}

document.querySelectorAll(".pricing-card__btn").forEach((button) => {
  button.addEventListener("click", () => {
    const plan = button.dataset.plan;
    button.disabled = true;
    button.classList.add("is-loading");
    button.textContent = "Starting…";

    window.setTimeout(() => {
      button.disabled = false;
      button.classList.remove("is-loading");
      button.textContent = "Start Trial";
      showToast(`${plan} trial started`);
      button.dispatchEvent(
        new CustomEvent("pricing:select", {
          bubbles: true,
          detail: { plan },
        })
      );
    }, 400);
  });
});
