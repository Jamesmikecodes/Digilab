/* Digilab auth prototype — localStorage only, NOT real security.
   Shape mirrors a future backend session { user, token } so pages don't need rewrites later. */
window.DIGILAB = window.DIGILAB || {};

window.DIGILAB.Auth = (() => {
  const KEY = "digilab.session.v1";

  function read() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "null");
    } catch {
      return null;
    }
  }

  function write(session) {
    if (!session) localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, JSON.stringify(session));
    document.dispatchEvent(
      new CustomEvent("digilab:session", { detail: session }),
    );
  }

  function signup({ name, email, role }) {
    if (!name || !email) throw new Error("Name and email are required.");
    const session = {
      user: { name, email, role: role || "student" },
      token: "local-demo",
      issuedAt: Date.now(),
    };
    write(session);
    return session;
  }

  function login({ email }) {
    if (!email) throw new Error("Email is required.");
    return signup({ name: email.split("@")[0], email, role: "student" });
  }

  function logout() {
    write(null);
  }

  function currentUser() {
    const s = read();
    return s ? s.user : null;
  }

  return { signup, login, logout, currentUser };
})();
