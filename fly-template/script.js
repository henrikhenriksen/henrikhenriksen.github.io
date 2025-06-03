function setColorScheme({primary, background, text, secondary}) {
  if (primary) document.documentElement.style.setProperty('--primary-color', primary);
  if (background) document.documentElement.style.setProperty('--background-color', background);
  if (text) document.documentElement.style.setProperty('--text-color', text);
  if (secondary) document.documentElement.style.setProperty('--secondary-color', secondary);
}

function setHeroText(title, description) {
  if (title) document.getElementById('hero-title').textContent = title;
  if (description) document.getElementById('hero-description').textContent = description;
}
