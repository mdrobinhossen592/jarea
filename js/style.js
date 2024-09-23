
// Menu Toggle for Mobile View
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    // Toggle the visibility of the mobile menu
    mobileMenu.classList.toggle('hidden');
});

// Banner Hover Effects
const bannerImg = document.querySelector('.banner_img');
const bannerText = document.querySelector('.banner_text');
const bannerTitle = document.querySelector('.banner_title');

// When hovering over the banner image, apply animations
bannerImg.addEventListener('mouseenter', () => {
    bannerText.classList.add('animate-text');   // Add animation to text
    bannerTitle.classList.add('animate-title'); // Add animation to title
});

// When the mouse leaves the banner image, remove animations
bannerImg.addEventListener('mouseleave', () => {
    bannerText.classList.remove('animate-text');   // Remove text animation
    bannerTitle.classList.remove('animate-title'); // Remove title animation
});

// Hire Me Button Hover Effects
document.querySelector('.hire-me-btn').addEventListener('mouseenter', () => {
    // Change portfolio button background to transparent
    document.querySelector('.portfolio-btn').style.backgroundColor = 'transparent';
    // Set portfolio button font weight to light
    document.querySelector('.portfolio-btn').style.fontWeight = '300'; // font-light
    // Hide the portfolio button icon
    document.querySelector('.portfolio-icon').style.visibility = 'hidden';
});

document.querySelector('.hire-me-btn').addEventListener('mouseleave', () => {
    // Revert portfolio button background color
    document.querySelector('.portfolio-btn').style.backgroundColor = '#FD853A';
    // Set portfolio button font weight to bold
    document.querySelector('.portfolio-btn').style.fontWeight = '600'; // font-semibold
    // Make the portfolio button icon visible again
    document.querySelector('.portfolio-icon').style.visibility = 'visible';
});
