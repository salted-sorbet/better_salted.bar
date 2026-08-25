.pragma library

// Escapes HTML/XML metacharacters so externally controlled strings can never
// be interpreted as rich text by host components that default to AutoText.
function escapeRichText(value) {
  var s = value === null || value === undefined ? "" : String(value)
  return s.replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
}
