#!/usr/bin/env node

"use strict";

const { runInit } = require("../src/init");
const { runCheck } = require("../src/check");

function printHelp() {
  console.log(`
AI Team Agent Kit

A lightweight toolkit for teams adopting AI coding agents,
structured PR review, and business automation workflows.

Usage:
  ai-team-agent-kit init [--target <path>] [--force]
  ai-team-agent-kit check [--target <path>]
  ai-team-agent-kit help

Examples:
  npx ai-team-agent-kit init
  npx ai-team-agent-kit init --target ../my-repo
  npx ai-team-agent-kit init --force
  npx ai-team-agent-kit check

Commands:
  init    Add AGENTS.md, coding-agent instructions, review prompts,
          agent roles, a PR template, training, and a workflow playbook.
  check   Score the target repository against the recommended AI-agent setup.
  help    Show this help message.

Options:
  --target <path>  Run against another directory.
  --force          Overwrite existing files during init.
  --help, -h       Show help.

Score guide:
  90-100  Excellent AI-agent workflow structure.
  70-89   Good but incomplete.
  40-69   Partial setup.
  0-39    Missing AI-agent workflow structure.
`);
}

function parseCli(argv) {
  const args = argv.slice(2);
  let command = "help";

  if (args[0] && !args[0].startsWith("-")) {
    command = args.shift();
  } else if (args.includes("--help") || args.includes("-h")) {
    command = "help";
  }

  const options = {
    force: false,
    target: process.cwd()
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--force") {
      options.force = true;
      continue;
    }

    if (arg === "--target") {
      const value = args[index + 1];
      if (!value || value.startsWith("-")) {
        throw new Error("Missing value for --target.");
      }
      options.target = value;
      index += 1;
      continue;
    }

    if (arg === "--help" || arg === "-h") {
      command = "help";
      continue;
    }

    throw new Error(`Unknown option: ${arg}`);
  }

  return { command, options };
}

function main() {
  try {
    const { command, options } = parseCli(process.argv);

    if (command === "init") {
      runInit(options);
      return;
    }

    if (command === "check") {
      runCheck(options);
      return;
    }

    if (command === "help") {
      printHelp();
      return;
    }

    printHelp();
    throw new Error(`Unknown command: ${command}`);
  } catch (error) {
    console.error(`✗ ${error.message}`);
    process.exitCode = 1;
  }
}

main();
