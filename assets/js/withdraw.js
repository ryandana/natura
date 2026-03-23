document.addEventListener("DOMContentLoaded", function () {
  const withdrawBtn = document.getElementById("withdrawBtn");
  const withdrawModal = document.getElementById("withdrawModal");
  const withdrawModalContent = document.getElementById(
    "withdrawModalContent"
  );
  const closeWithdrawModal = document.getElementById("closeWithdrawModal");
  const cancelWithdraw = document.getElementById("cancelWithdraw");
  const confirmWithdraw = document.getElementById("confirmWithdraw");
  const withdrawAmount = document.getElementById("withdrawAmount");
  const withdrawToast = document.getElementById("withdrawToast");
  const quickAmountBtns = document.querySelectorAll(".withdraw-quick-amount");

  if (!withdrawBtn || !withdrawModal) return;

  function openModal() {
    withdrawModal.classList.remove("hidden");
    withdrawModal.classList.add("flex");
    withdrawModal.setAttribute("aria-hidden", "false");
    // Trigger animation
    requestAnimationFrame(() => {
      withdrawModalContent.classList.remove("scale-95", "opacity-0");
      withdrawModalContent.classList.add("scale-100", "opacity-100");
    });
  }

  function closeModal() {
    withdrawModalContent.classList.remove("scale-100", "opacity-100");
    withdrawModalContent.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
      withdrawModal.classList.remove("flex");
      withdrawModal.classList.add("hidden");
      withdrawModal.setAttribute("aria-hidden", "true");
      // Reset form
      if (withdrawAmount) withdrawAmount.value = "";
      const accountInput = document.getElementById("withdrawAccount");
      if (accountInput) accountInput.value = "";
    }, 300);
  }

  function showToast() {
    withdrawToast.classList.remove("translate-y-20", "opacity-0");
    withdrawToast.classList.add("translate-y-0", "opacity-100");
    setTimeout(() => {
      withdrawToast.classList.remove("translate-y-0", "opacity-100");
      withdrawToast.classList.add("translate-y-20", "opacity-0");
    }, 3000);
  }

  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  // Open modal
  withdrawBtn.addEventListener("click", openModal);

  // Close modal
  closeWithdrawModal.addEventListener("click", closeModal);
  cancelWithdraw.addEventListener("click", closeModal);

  // Close on backdrop click
  withdrawModal.addEventListener("click", function (e) {
    if (e.target === withdrawModal) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      !withdrawModal.classList.contains("hidden")
    ) {
      closeModal();
    }
  });

  // Quick amount buttons
  quickAmountBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const amount = this.getAttribute("data-amount");
      withdrawAmount.value = formatNumber(parseInt(amount));
    });
  });

  // Format input as user types
  if (withdrawAmount) {
    withdrawAmount.addEventListener("input", function () {
      let value = this.value.replace(/\D/g, "");
      if (value) {
        this.value = formatNumber(parseInt(value));
      }
    });
  }

  // Confirm withdrawal
  confirmWithdraw.addEventListener("click", function () {
    closeModal();
    setTimeout(showToast, 400);
  });
});
