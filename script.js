const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

function sendEmail() {
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'sender@email_address.com',
    Password: 'Enter your password',
    To: 'fireboltisaac@gmail.com',
    From: 'sender@email_address.com',
    Subject: 'Sending Email using javascript',
    Body: 'Well that was easy!!',
  }).then(function (message) {
    alert('mail sent successfully');
  });
}
