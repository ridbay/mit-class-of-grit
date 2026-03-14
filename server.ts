import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory store for IPs that have voted
  // Note: This resets on server restart since Firebase was declined
  const votedIPs = new Set<string>();

  // API routes
  app.get("/api/check-ip", (req, res) => {
    const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const ipString = Array.isArray(ip) ? ip[0] : ip || 'unknown';
    
    res.json({ 
      hasVoted: votedIPs.has(ipString),
      ip: ipString 
    });
  });

  app.post("/api/record-vote", (req, res) => {
    const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const ipString = Array.isArray(ip) ? ip[0] : ip || 'unknown';

    if (votedIPs.has(ipString)) {
      return res.status(403).json({ error: "This IP address has already voted." });
    }

    votedIPs.add(ipString);
    res.json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
