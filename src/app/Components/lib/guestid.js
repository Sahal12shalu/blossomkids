export function getOrCreateGuestId() {
  if (typeof window === "undefined") return null;

  let guestId = localStorage.getItem("guest_id");
  if (!guestId) {
    guestId = crypto.randomUUID(); // browser's built-in UUID generator
    localStorage.setItem("guest_id", guestId);
  }
  return guestId;
}
