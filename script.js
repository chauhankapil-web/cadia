// ...existing code...
async function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const status = document.getElementById('uploadStatus');
  if (!fileInput.files.length) {
    status.textContent = 'Please select a file.';
    return;
  }
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);
  status.textContent = 'Uploading...';

  try {
    // Replace '/api/upload' with your Vercel API route
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    if (res.ok) {
      status.textContent = 'Upload successful!';
      fileInput.value = '';
    } else {
      status.textContent = 'Upload failed.';
    }
  } catch (err) {
    status.textContent = 'Error uploading file.';
  }
}
// ...existing code...// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Small animation for header title
const headerTitle = document.querySelector("header h1");
headerTitle.addEventListener("mouseover", () => {
  headerTitle.style.color = "gold";
});
headerTitle.addEventListener("mouseout", () => {
  headerTitle.style.color = "white";
});
