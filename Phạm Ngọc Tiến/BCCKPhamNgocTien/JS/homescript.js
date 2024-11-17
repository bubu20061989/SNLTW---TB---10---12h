document.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.querySelector('[data-bs-toggle="modal"]'); // Chọn nút kích hoạt modal
    const modal = new bootstrap.Modal(document.getElementById('exampleModal')); // Khởi tạo modal Bootstrap

    cartButton.addEventListener("click", (e) => {
        e.preventDefault(); // Ngăn chặn hành động mặc định của nút (nếu cần)
        modal.show(); // Hiển thị modal
    });
});
