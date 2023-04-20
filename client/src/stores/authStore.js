import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    loggedIn: false,
    userEmail: ''
  }),
  actions: {
    setLoggedIn(loggedIn) {
      this.loggedIn = loggedIn;
    },
    setUserEmail(userEmail) {
        this.userEmail = userEmail;
      },
  },
  getters: {
    isLoggedIn() {
      return this.loggedIn;
    },
    getEmail() {
      return this.userEmail;
    }
  }
});