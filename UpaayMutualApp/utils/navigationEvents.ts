type NavigationCallback = () => void;

class NavigationEvents {
    private static instance: NavigationEvents;
    private listeners: NavigationCallback[] = [];

    private constructor() {}

    static getInstance(): NavigationEvents {
        if (!NavigationEvents.instance) {
            NavigationEvents.instance = new NavigationEvents();
        }
        return NavigationEvents.instance;
    }

    subscribe(callback: NavigationCallback) {
        this.listeners.push(callback);
        return () => {
            this.listeners = this.listeners.filter(listener => listener !== callback);
        };
    }

    notify() {
        this.listeners.forEach(callback => callback());
    }
}

export const navigationEvents = NavigationEvents.getInstance(); 