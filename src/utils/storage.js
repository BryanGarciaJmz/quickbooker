// Utilidades de almacenamiento local para futuras reservas
const STORAGE_KEY = 'quickbooker_availability';

export const storage = {
  getAvailability() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  },
  setAvailability(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data ?? {}));
    } catch (e) {
      // noop
    }
  },
  reset() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // noop
    }
  },
};
