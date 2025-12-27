import app from "./app.js";
import { Config } from "./config/index.js";

const startServer = () => {
  const { PORT } = Config;

  const server = app.listen(PORT, () => {
    console.log(`🚀 Auth service running on port ${PORT}`);
  });

  server.on("error", (error) => {
    console.error("Server failed to start:", error);
    process.exit(1);
  });
};

startServer();
