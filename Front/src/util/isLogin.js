

export default function useFakeAuth() {

    const userisLoged = JSON.parse(localStorage.getItem('user');
    if (userisLoged) {
        return (true);
    } else {
        return (false);
    }

}
