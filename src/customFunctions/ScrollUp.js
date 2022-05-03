export default function ScrollUp(behavior) {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
        window.scroll({
            top: 0,
            behavior: behavior,
        });
    }
}
