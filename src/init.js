"use strict";

const fs = require("fs");
const path = require("path");
const {
  assertDirectory,
  ensureDirectory,
  getTemplateRoot,
  listFilesRecursive,
  relativeFrom,
  resolveTarget,
  symbols
} = require("./utils");

function runInit(options = {}) {
  const targetDirectory = resolveTarget(options.target);
  const templateRoot = getTemplateRoot();
  const force = Boolean(options.force);

  assertDirectory(templateRoot, "Template directory");
  ensureDirectory(targetDirectory);

  const templateFiles = listFilesRecursive(templateRoot);
  const summary = {
    created: [],
    overwritten: [],
    skipped: []
  };

  console.log(`\nAI Team Agent Kit init`);
  console.log(`${symbols.info} Target: ${targetDirectory}`);
  console.log(`${symbols.info} Mode: ${force ? "overwrite existing files" : "keep existing files"}\n`);

  for (const sourcePath of templateFiles) {
    const relativePath = relativeFrom(templateRoot, sourcePath);
    const destinationPath = path.join(targetDirectory, relativePath);
    const destinationExists = fs.existsSync(destinationPath);

    if (destinationExists && !force) {
      summary.skipped.push(relativePath);
      console.log(`${symbols.warn} skipped existing ${relativePath}`);
      continue;
    }

    ensureDirectory(path.dirname(destinationPath));
    fs.copyFileSync(sourcePath, destinationPath);

    if (destinationExists) {
      summary.overwritten.push(relativePath);
      console.log(`${symbols.ok} overwrote ${relativePath}`);
    } else {
      summary.created.push(relativePath);
      console.log(`${symbols.ok} created ${relativePath}`);
    }
  }

  console.log(`\nDone. Your repository now has a structured AI-agent workflow baseline.`);
  console.log(`${symbols.ok} Created: ${summary.created.length}`);
  console.log(`${symbols.ok} Overwritten: ${summary.overwritten.length}`);
  console.log(`${summary.skipped.length ? symbols.warn : symbols.ok} Skipped: ${summary.skipped.length}`);

  if (summary.skipped.length > 0) {
    console.log(`\nRun with --force to overwrite existing files.`);
  } else {
    console.log(`\nNext step: run ai-team-agent-kit check to verify the setup.`);
  }

  return summary;
}

module.exports = {
  runInit
};
