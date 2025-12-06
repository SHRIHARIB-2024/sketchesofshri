// popup.js
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("achievementsModal");
    const content = modal.querySelector(".modal-content");
    const openBtn = document.getElementById("openAchievements");
    const closeBtn = document.getElementById("closePopup");

    // Open popup
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add("show");
        setTimeout(() => content.classList.add("show"), 10);
    });

    // Close popup
    function closeModal() {
        content.classList.remove("show");
        setTimeout(() => modal.classList.remove("show"), 300);
    }

    closeBtn.addEventListener('click', closeModal);

    // Close when clicking outside content
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
});
