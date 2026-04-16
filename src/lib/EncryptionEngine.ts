// L-CODE DYNAMICS: Goliáš Encryption Engine v2.1
// Fully Browser-Compatible (Web Crypto API) - Zero-Bloat standard

export const EncryptionEngine = {
    async deriveKey(ownerPassword: string): Promise<CryptoKey> {
        const enc = new TextEncoder();
        const keyMaterial = await window.crypto.subtle.importKey(
            "raw",
            enc.encode(ownerPassword),
            { name: "PBKDF2" },
            false,
            ["deriveBits", "deriveKey"]
        );

        return window.crypto.subtle.deriveKey(
            {
                name: "PBKDF2",
                salt: enc.encode("L-CODE-DOOMSDAY-SALT-2026"),
                iterations: 250000,
                hash: "SHA-256"
            },
            keyMaterial,
            { name: "AES-GCM", length: 256 },
            false,
            ["encrypt", "decrypt"]
        );
    },

    async decryptVault(base64Data: string, ownerKey: string): Promise<string | null> {
        try {
            const key = await this.deriveKey(ownerKey);
            
            // Browser-safe base64 decoding (atob)
            const binaryString = window.atob(base64Data);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }

            // Extraction of IV (first 12 bytes) and encrypted data
            const iv = bytes.slice(0, 12);
            const data = bytes.slice(12);

            const decrypted = await window.crypto.subtle.decrypt(
                { name: "AES-GCM", iv: iv },
                key,
                data
            );

            return new TextDecoder().decode(decrypted);
        } catch (e) {
            // L-CODE GUARDIAN: Invalid Key / Corrupted Data
            return null;
        }
    }
};