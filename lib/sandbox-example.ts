import { Sandbox } from "@vercel/sandbox";

export async function runSandboxExample() {
  // Create a new sandbox instance
  const sandbox = await Sandbox.create();

  try {
    // Run a simple Node.js command
    await sandbox.runCommand({
      cmd: "node",
      args: ["-e", 'console.log("Hello from Vercel Sandbox!")'],
      stdout: process.stdout,
    });

    // You can run multiple commands
    await sandbox.runCommand({
      cmd: "node",
      args: ["-e", 'console.log("Sandbox is running!")'],
      stdout: process.stdout,
    });
  } finally {
    // Always stop the sandbox when done
    await sandbox.stop();
  }
}

// Example usage:
// await runSandboxExample();
