
document.getElementById("language-selector").addEventListener("change", function() {
  const lang = this.value;
  const translations = {
    en: {
      title: "Welcome to NedalCare",
      hero: "Your trusted medical companion.",
      assistant: "Hello! I'm here to help you navigate."
    },
    he: {
      title: "ברוכים הבאים ל-NedalCare",
      hero: "השותף הרפואי המהימן שלך.",
      assistant: "שלום! אני כאן לעזור לך."
    }
  };
  document.getElementById("site-title").innerText = translations[lang].title;
  document.getElementById("hero-text").innerText = translations[lang].hero;
  document.getElementById("assistant-text").innerText = translations[lang].assistant;
});
