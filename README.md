A professional full-stack integration developed as a Shopify assignment. This project features a custom Theme App Extension (App Block widget) on the product page that communicates with a standalone Node.js/Express backend via an ngrok secure tunnel to fetch and display real-time, location-specific product pricing.

- **ZIP Code Input Widget:** Seamlessly integrated into the Shopify Product Page as an App Block.
- **Asynchronous API Workflows:** Built using JavaScript Fetch API with active loading states ("Loading...").
- **Dynamic Pricing Engine:** Evaluates location-specific pricing based on custom backend rules.
- **Baseline Fallback Mechanism:** Handles undefined or unserviced ZIP codes by safely defaulting to a baseline rate instead of breaking the UI layout.

| ZIP Code | Location Context | Price |
|----------|------------------|-------|
| **75028** | Required Test Case | $1499 |
| **10001** | Required Test Case | $1699 |
| **90210** | Required Test Case | $1799 |
| **Others**| Default Baseline Fallback | $1999 |


Shopify Product Page (Frontend)
       ↓
ZIP Input Widget (App Block)
       ↓
Theme Extension JS (Asynchronous Fetch POST)
       ↓
ngrok Secure Tunnel (HTTPS Wrapper)
       ↓
Node.js / Express API (Local Server Port 5000)
       ↓
Pricing Rules Engine (Switch-Case Evaluation)
       ↓
JSON Price Response (Status/Payload)
       ↓
Dynamic UI Update (Instant Element Update)

run backend
# Move into backend directory
cd backend

# Install express and backend dependencies
npm install

# Start the Node.js development server
npm run dev

# Create an HTTPS tunnel for port 5000
ngrok http 5000

# Navigate into frontend directory
cd frontend

# Boot the Shopify App server and sync components
shopify app dev