// Global i18n initialization script
import { detectLanguage, saveLanguage, t, getTranslations } from '../i18n/index.js';

let currentLanguage = detectLanguage();

// Update all translatable elements
function updateAllTranslations(lang) {
  currentLanguage = lang;
  saveLanguage(lang);
  
  // Update all elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key, lang);
    
    // Handle different element types
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.hasAttribute('placeholder')) {
        el.placeholder = translation;
      } else {
        el.value = translation;
      }
    } else {
      // For regular elements, preserve HTML structure but update text
      if (el.innerHTML.includes('<')) {
        // If element has HTML, try to preserve it
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = el.innerHTML;
        
        // Update text nodes
        const walker = document.createTreeWalker(
          tempDiv,
          NodeFilter.SHOW_TEXT,
          null,
          false
        );
        
        let textNode;
        while (textNode = walker.nextNode()) {
          if (textNode.textContent.trim()) {
            textNode.textContent = translation;
            break; // Update only the first significant text node
          }
        }
        
        el.innerHTML = tempDiv.innerHTML;
      } else {
        el.textContent = translation;
      }
    }
    
    // Update data-text attribute for glitch effects
    if (el.hasAttribute('data-text')) {
      el.setAttribute('data-text', translation);
    }
  });
  
  // Update flag icons
  const flagIcons = document.querySelectorAll('.flag-icon');
  flagIcons.forEach(icon => {
    icon.textContent = lang === 'pt' ? '🇧🇷' : '🇺🇸';
  });
  
  // Dispatch language change event
  window.dispatchEvent(new CustomEvent('languageChanged', { 
    detail: { language: lang, translations: getTranslations(lang) } 
  }));
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  updateAllTranslations(currentLanguage);
});

// Listen for language changes from header
window.addEventListener('languageChanged', (event) => {
  if (event.detail.language !== currentLanguage) {
    updateAllTranslations(event.detail.language);
  }
});

// Export for use in other scripts
window.i18n = {
  updateAllTranslations,
  getCurrentLanguage: () => currentLanguage,
  t: (key) => t(key, currentLanguage),
  getTranslations: () => getTranslations(currentLanguage)
};