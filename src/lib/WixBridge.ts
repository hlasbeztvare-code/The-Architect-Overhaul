// L-CODE DYNAMICS: Goliáš Wix-Headless Bridge v1.0
// Propojení 300% Next.js frontendu s Wix backendem

const WIX_API_URL = "https://www.beliansky.eu/_functions/vaultData";

export const WixBridge = {
    async fetchEncryptedPayload() {
        try {
            const response = await fetch(WIX_API_URL, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            // Předpokládáme, že Wix vrací { payload: "base64..." }
            return data.payload;
        } catch (error) {
            console.error("L-CODE BRIDGE ERROR: Wix neodpovídá. *smrk*", error);
            return null;
        }
    }
};