import { useState, useEffect } from "react";

// Current auth status (bool)
let currentAuth = false;
// Holds setAuth for every instance of hook
const authSetters = new Set();

export default function useFakeAuth() {
    // Auth state and setter
    const [auth, setAuth] = useState(currentAuth);

    // Add setAuth to authSetters
    useEffect(() => {
        authSetters.add(setAuth);
        return () => authSetters.delete(setAuth);
    }, [setAuth]);

    // Fake async API call to auth or de-auth
    // In real life you'd probably pass in an email/pass
    // And have onSuccess and onError instead of a callback arg
    const setAuthApi = (newAuth, cb) => {
        setTimeout(() => {
            // Update current auth status
            currentAuth = newAuth;
            // Call setAuth for every instance of hook
            authSetters.forEach(setter => setter(newAuth));
            cb && cb();
        }, 100);
    };

    const signin = cb => setAuthApi(true, cb);
    const signout = cb => setAuthApi(false, cb);

    return [auth, signin, signout];
}
