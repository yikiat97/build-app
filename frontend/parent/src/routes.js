import { writable } from "svelte/store";

// Define a writable store to hold the current route
export const currentRoute = writable(window.location.pathname);

// Listen for browser navigation events (like back/forward buttons)
window.addEventListener("popstate", () => {
  currentRoute.set(window.location.pathname);
});

// Helper function to navigate to a new route
export function navigate(path) {
  window.history.pushState({}, "", path);
  currentRoute.set(path);
}
