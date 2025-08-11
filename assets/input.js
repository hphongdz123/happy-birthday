const birthdayMessage = `
Chúc|Mừng|Sinh Nhật|Ngọc Thảo|Luôn|Vui Vẻ|Hạnh Phúc|Yêu Đời|#time|❤
`;

// Gửi dữ liệu sang hiệu ứng chính
window.onload = function () {
    // Giả lập như dữ liệu được nhập từ input
    if (typeof startEffect === "function") {
        startEffect(birthdayMessage.trim());
    } else {
        console.error("startEffect function not found.");
    }
};
