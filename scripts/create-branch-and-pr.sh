#!/usr/bin/env bash
set -e

# Usage: ./scripts/create-branch-and-pr.sh [branch-name] [base-branch]
# Requires: git and GitHub CLI (gh) installed and authenticated

BRANCH=${1:-fix/site-name-to-tumar}
BASE=${2:-main}

echo "Creating branch: $BRANCH (base: $BASE)"

git checkout -b "$BRANCH"

git add -A

echo "Committing changes (please edit the commit message if needed)"
if git status --porcelain | grep .; then
  git commit -m "Replace 'Tumar Design' with 'Tumar' (alt texts and footer)"
else
  echo "No changes to commit. Make sure you've saved your edits."
fi

echo "Pushing branch to origin..."
git push -u origin "$BRANCH"

if command -v gh >/dev/null 2>&1; then
  echo "Creating PR via gh..."
  gh pr create --base "$BASE" --head "$BRANCH" \
    --title "Replace 'Tumar Design' with 'Tumar'" \
    --body "This PR replaces occurrences of 'Tumar Design' with 'Tumar' in alt texts and the footer to ensure consistent site branding.\n\nAfter merge, please rebuild and request reindexing in Google Search Console to update search results." --web
  echo "If the previous command opens the web editor, follow the prompts to finalize the PR."
else
  echo "GitHub CLI (gh) not found. You can create a PR in the browser after pushing:" 
  echo "  https://github.com/<owner>/<repo>/compare/$BASE...$BRANCH?expand=1"
fi
