"use strict";

const fs = require("fs");
const path = require("path");

const symbols = {
  ok: "✓",
  warn: "⚠",
  error: "✗",
  info: "•"
};

function resolveTarget(target) {
  return path.resolve(target || process.cwd());
}

function ensureDirectory(directoryPath) {
  fs.mkdirSync(directoryPath, { recursive: true });
}

function getTemplateRoot() {
  return path.resolve(__dirname, "..", "templates");
}

function assertDirectory(directoryPath, label) {
  if (!fs.existsSync(directoryPath)) {
    throw new Error(`${label} does not exist: ${directoryPath}`);
  }

  const stats = fs.statSync(directoryPath);
  if (!stats.isDirectory()) {
    throw new Error(`${label} is not a directory: ${directoryPath}`);
  }
}

function listFilesRecursive(rootDirectory) {
  const results = [];

  function walk(currentDirectory) {
    const entries = fs
      .readdirSync(currentDirectory, { withFileTypes: true })
      .sort((first, second) => first.name.localeCompare(second.name));

    for (const entry of entries) {
      const absolutePath = path.join(currentDirectory, entry.name);

      if (entry.isDirectory()) {
        walk(absolutePath);
        continue;
      }

      if (entry.isFile()) {
        results.push(absolutePath);
      }
    }
  }

  walk(rootDirectory);
  return results;
}

function toPortablePath(filePath) {
  return filePath.split(path.sep).join("/");
}

function relativeFrom(basePath, filePath) {
  return toPortablePath(path.relative(basePath, filePath));
}

module.exports = {
  assertDirectory,
  ensureDirectory,
  getTemplateRoot,
  listFilesRecursive,
  relativeFrom,
  resolveTarget,
  symbols
};
