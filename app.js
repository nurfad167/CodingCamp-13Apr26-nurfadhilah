// app.js

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

let transactions = [];

// ---------------------------------------------------------------------------
// Storage Module
// ---------------------------------------------------------------------------

function saveToStorage(transactions) {
  try {
    localStorage.setItem('expense_transactions', JSON.stringify(transactions));
  } catch (e) {
    console.warn('Failed to save transactions to localStorage:', e);
  }
}

function loadFromStorage() {
  try {
    const raw = localStorage.getItem('expense_transactions');
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch (e) {
    return [];
  }
}

// ---------------------------------------------------------------------------
// Exports (Node.js / test environment only)
// ---------------------------------------------------------------------------

if (typeof module !== 'undefined') {
  module.exports = { saveToStorage, loadFromStorage };
}
