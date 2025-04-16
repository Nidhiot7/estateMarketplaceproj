export const environment: { production: boolean, apiUrl: string, firebaseConfig: object } = {
    production: true,
    apiUrl: 'http://localhost:3000', // Update this to the live server URL if needed
    firebaseConfig: {
        apiKey: "AIzaSyBcgJCFhciLPxlXj2oY-YLlhiSXrs4SxwA", // Replace with your actual API key
        authDomain: "realestatewebsite-bf000.firebaseapp.com",
        projectId: "realestatewebsite-bf000",
        storageBucket: "realestatewebsite-bf000.firebasestorage.app",
        messagingSenderId: "673947096522",
        appId: "1:673947096522:web:bc814a82265da04a21eb33" // Replace with your actual App ID
    }
};
