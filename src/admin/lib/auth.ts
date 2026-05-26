const LOCAL_AUTH_KEY = "sammy-admin-auth";
const SESSION_AUTH_KEY = "sammy-admin-session-auth";

type AdminAuthState = {
  authenticated: boolean;
  createdAt: number;
};

function readStore(storage: Storage, key: string) {
  try {
    const value = storage.getItem(key);
    if (!value) return false;
    const parsed = JSON.parse(value) as AdminAuthState;
    return parsed.authenticated === true;
  } catch {
    storage.removeItem(key);
    return false;
  }
}

export function isAdminAuthenticated() {
  if (typeof window === "undefined") return false;

  return readStore(window.localStorage, LOCAL_AUTH_KEY) || readStore(window.sessionStorage, SESSION_AUTH_KEY);
}

export function setAdminAuthenticated(remember: boolean) {
  if (typeof window === "undefined") return;

  const payload = JSON.stringify({
    authenticated: true,
    createdAt: Date.now(),
  } satisfies AdminAuthState);

  clearAdminAuthenticated();
  if (remember) {
    window.localStorage.setItem(LOCAL_AUTH_KEY, payload);
    return;
  }

  window.sessionStorage.setItem(SESSION_AUTH_KEY, payload);
}

export function clearAdminAuthenticated() {
  if (typeof window === "undefined") return;

  window.localStorage.removeItem(LOCAL_AUTH_KEY);
  window.sessionStorage.removeItem(SESSION_AUTH_KEY);
}
