let currentDate = new Date();
let currentYear = currentDate.getFullYear();

let footerCopyright = $(
  `<p class="footer-copyright">© Davin Reid ${currentYear}</p>`
);
let githubLink =
  '<a href="https://github.com/DavTheDev20"><i class="fab fa-github-square fa-2x"></i></a>';
let linkedinLink =
  '<a href="https://www.linkedin.com/in/davin-reid-9273071b9/"><i class="fab fa-linkedin fa-2x"></i></a>';
let emailLink =
  '<a href="mailto:reiddavin@outlook.com"><i class="fas fa-envelope-square fa-2x"></i></a>';
let footerLinks = $(`<p>${githubLink} ${linkedinLink} ${emailLink}</p>`);

$('footer').append(footerLinks);
$('footer').append(footerCopyright);

const nameInput = $('[name="name"]');
const emailInput = $('[name="email"]');
const messageInput = $('[name="message"]');

function sendMail() {
  const name = nameInput.val();
  const email = emailInput.val();
  const message = messageInput.val();

  const subject = `Contact Message from ${name} (${email})`;

  window.open(
    `mailto:reiddavin@outlook.com?subject=${subject}&body=${message}`
  );
}

$('.main-carousel').flickity({
  cellAlign: 'center',
  contatin: true,
});
