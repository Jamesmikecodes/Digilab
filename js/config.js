/* Digilab ground config — vanilla, no build step.
   API_BASE stays empty until a backend exists.
   Frontend reads local ./data/*.json seeds with the same shape the API will return later. */
window.DIGILAB = window.DIGILAB || {};
window.DIGILAB.CONFIG = {
  API_BASE: "",
  USE_LOCAL_SEED: true,
  SEED_PATHS: {
    courses: "data/courses.json",
    services: "data/services.json",
    testimonials: "data/testimonials.json",
    posts: "data/posts.json",
    events: "data/events.json",
    ideas: "data/ideas.json",
  },
};
