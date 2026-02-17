import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, "dist");
const port = Number(process.env.PORT) || 3000;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
};

const send = (res, statusCode, body, headers = {}) => {
  res.writeHead(statusCode, headers);
  res.end(body);
};

createServer((req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host}`);
  const pathname = decodeURIComponent(url.pathname);

  if (pathname === "/api") {
    send(
      res,
      200,
      JSON.stringify({ message: "API endpoint - backend coming soon!" }),
      { "Content-Type": "application/json; charset=utf-8" },
    );
    return;
  }

  const normalizedPath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.join(distDir, normalizedPath);

  if (existsSync(filePath) && statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType =
      contentTypes[ext] || "application/octet-stream; charset=utf-8";
    send(res, 200, readFileSync(filePath), { "Content-Type": contentType });
    return;
  }

  const indexFile = path.join(distDir, "index.html");
  if (existsSync(indexFile)) {
    send(res, 200, readFileSync(indexFile), {
      "Content-Type": "text/html; charset=utf-8",
    });
    return;
  }

  send(
    res,
    404,
    "Build output not found. Run `npm run build` before `npm start`.",
    { "Content-Type": "text/plain; charset=utf-8" },
  );
}).listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
