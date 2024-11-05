document.addEventListener('DOMContentLoaded', () => {
  const rows = document.querySelectorAll('tbody tr');
  rows.forEach((row, index) => {
    row.style.opacity = 0;
    row.style.transform = 'translateY(20px)';
    setTimeout(() => {
      row.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      row.style.opacity = 1;
      row.style.transform = 'translateY(0)';
    }, index * 100);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');

  sidebarToggle.addEventListener('click', () => {
    sidebarToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
  });
});
