/* Digilab API layer — vanilla fetch.
   Today: reads local seed JSON. Tomorrow: same function names hit API_BASE.
   Usage: const courses = await DigilabAPI.list("courses"); */
window.DIGILAB = window.DIGILAB || {};

window.DIGILAB.API = (() => {
  const getConfig = () => window.DIGILAB.CONFIG;

  async function getJSON(path) {
    const res = await fetch(path, { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error("GET " + path + " -> " + res.status);
    return res.json();
  }

  async function list(resource) {
    const cfg = getConfig();
    const seedPath = cfg.SEED_PATHS[resource];
    if (!seedPath) throw new Error("Unknown resource: " + resource);
    // Backend later: if (!cfg.USE_LOCAL_SEED && cfg.API_BASE) return getJSON(cfg.API_BASE + "/" + resource);
    const data = await getJSON(seedPath);
    return data.items || [];
  }

  return { list };
})();
