"use strict";

const fs = require("fs");
const path = require("path");
const { assertDirectory, resolveTarget, symbols } = require("./utils");

const REQUIRED_FILES = [
  "AGENTS.md",
  ".github/copilot-instructions.md",
  ".github/prompts/code-review-subagents.prompt.md",
  ".github/prompts/pr-product-review.prompt.md",
  ".github/prompts/automation-map.prompt.md",
  ".github/prompts/security-review.prompt.md",
  ".github/agents/code-reviewer.agent.md",
  ".github/agents/product-value-reviewer.agent.md",
  ".github/agents/automation-coach.agent.md",
  ".github/agents/security-reviewer.agent.md",
  ".github/PULL_REQUEST_TEMPLATE.md",
  "training/ai-automation-for-employees.md",
  "docs/ai-workflow-playbook.md"
];

function buildRecommendations(missingFiles) {
  const recommendations = [];

  if (missingFiles.includes("AGENTS.md")) {
    recommendations.push("Add AGENTS.md so coding agents share the same project rules.");
  }

  if (missingFiles.some((filePath) => filePath.startsWith(".github/prompts/"))) {
    recommendations.push("Add reusable prompt files for code review, product review, security review, and automation discovery.");
  }

  if (missingFiles.some((filePath) => filePath.startsWith(".github/agents/"))) {
    recommendations.push("Add agent role files so code, product, automation, and security reviewers know their responsibilities.");
  }

  if (missingFiles.includes(".github/PULL_REQUEST_TEMPLATE.md")) {
    recommendations.push("Add a pull request template that captures value, risk, tests, and AI assistance.");
  }

  if (missingFiles.includes("training/ai-automation-for-employees.md")) {
    recommendations.push("Add employee training material so non-engineering teams can map automation opportunities.");
  }

  if (missingFiles.includes("docs/ai-workflow-playbook.md")) {
    recommendations.push("Add a workflow playbook so teams know how to use these files consistently.");
  }

  if (recommendations.length === 0) {
    recommendations.push("The recommended setup is present. Keep the files current as team practices evolve.");
  }

  return recommendations;
}

function getScoreMeaning(score) {
  if (score >= 90) {
    return "Excellent AI-agent workflow structure.";
  }

  if (score >= 70) {
    return "Good but incomplete. Add the missing files to standardize the workflow.";
  }

  if (score >= 40) {
    return "Partial setup. The repository has some structure, but teams may still use AI inconsistently.";
  }

  return "Missing AI-agent workflow structure. Run init to add the recommended baseline.";
}

function runCheck(options = {}) {
  const targetDirectory = resolveTarget(options.target);
  assertDirectory(targetDirectory, "Target directory");

  const presentFiles = [];
  const missingFiles = [];

  for (const filePath of REQUIRED_FILES) {
    const absolutePath = path.join(targetDirectory, filePath);

    if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isFile()) {
      presentFiles.push(filePath);
    } else {
      missingFiles.push(filePath);
    }
  }

  const score = Math.round((presentFiles.length / REQUIRED_FILES.length) * 100);
  const recommendations = buildRecommendations(missingFiles);
  const scoreMeaning = getScoreMeaning(score);

  console.log(`\nAI Team Agent Kit check`);
  console.log(`${symbols.info} Target: ${targetDirectory}`);
  console.log(`${symbols.info} Score: ${score}/100 - ${scoreMeaning}`);
  console.log(`${symbols.ok} Present files: ${presentFiles.length}/${REQUIRED_FILES.length}`);

  if (missingFiles.length > 0) {
    console.log(`\nMissing files:`);
    for (const filePath of missingFiles) {
      console.log(`${symbols.warn} ${filePath}`);
    }
  } else {
    console.log(`\n${symbols.ok} No missing files.`);
  }

  console.log(`\nRecommendations:`);
  for (const recommendation of recommendations) {
    console.log(`${symbols.info} ${recommendation}`);
  }

  return {
    score,
    presentFiles,
    missingFiles,
    recommendations,
    scoreMeaning
  };
}

module.exports = {
  getScoreMeaning,
  REQUIRED_FILES,
  runCheck
};
