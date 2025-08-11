---
sidebar_postion: 2
---

# Git & GitHub Cheatsheet

## Commands cheatsheet

*11 august 2025* 

## 1. Setup
```bash
# Set your identity
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Check your config
git config --list

# Initialize a new repo
git init

# Clone a repo
git clone https://github.com/user/repo.git
```

---

## 2. SSH setup with github 
```bash
# check if already ssh available --- id_rsa / id_rsa.pub or id_ed25519 / id_ed25519.pub
ls -al ~/.ssh

# if not , generate new ssh key 
ssh-keygen -t ed25519 -C "your_email@example.com"

# If you need RSA for compatibility:(Optional)
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

 - Press Enter to accept default location (~/.ssh/id_ed25519).
 - Set a passphrase (optional, but adds security).

# Start the SSH agent
eval "$(ssh-agent -s)"

# your SSH private key to the agent
ssh-add ~/.ssh/id_ed25519

# Copy your SSH public key
cat ~/.ssh/id_ed25519.pub

# Add the key to GitHub
 - Go to GitHub → Settings → SSH and GPG keys → New SSH key.
 - Paste the public key and give it a name (e.g., "My Laptop").
 - Save.

# Test your connection
ssh -T git@github.com
 - If successful, you’ll see:
 - Hi username! You've successfully authenticated...

# Use SSH 
git clone git@github.com:user/repo.git

```

## 3. Everyday Workflow
```bash
# Check repo status
git status

# Add files to staging
git add file.txt         # single file
git add .                # all changes

# Commit changes
git commit -m "Message here"

# Shortcut: add & commit in one step
git commit -am "Message here"

# Push changes
git push origin main

# Pull latest changes
git pull origin main
```

---

## 4. Branching
```bash
# List branches
git branch

# Create branch
git branch new-feature

# Switch branch
git checkout new-feature
git switch new-feature   # newer syntax

# Create & switch in one step
git checkout -b new-feature

# Merge branch into current branch
git merge new-feature

# Delete branch
git branch -d branch_name
git branch -D branch_name   # force delete
```

---

## 5. Collaboration
```bash
# Fetch changes without merging
git fetch

# View remote branches
git branch -r

# Add remote
git remote add origin https://github.com/user/repo.git

# View remotes
git remote -v
```

---

## 6. History & Undo
```bash
# Show commit history
git log
git log --oneline --graph --decorate --all

# Show changes
git diff             # unstaged changes
git diff --staged    # staged changes

# Undo staged file
git reset file.txt

# Undo last commit but keep changes
git reset --soft HEAD~1

# Undo last commit and remove changes
git reset --hard HEAD~1

# Revert a commit (create a new commit to undo)
git revert <commit-hash>
```

---

## 7. stash Commands 
```bash
# Save your uncommitted changes (stash them)
git stash

# Save with a custom message
git stash save "message describing changes"

# List all stash entries
git stash list

# Apply the latest stash but keep it in the stash list
git stash apply

# Apply and remove the latest stash
git stash pop

# Apply a specific stash by name (from stash list)
git stash apply stash@{2}

# Drop (delete) a specific stash entry
git stash drop stash@{1}

# Clear all stash entries
git stash clear

```

## 8 . Rebase commands 
```bash
# Start an interactive rebase for the last 3 commits (change 3 as needed)
git rebase -i HEAD~3

# Rebase current branch onto main branch (move your commits on top of main)
git rebase main

# Abort an ongoing rebase and return to previous state
git rebase --abort

# Continue a rebase after resolving conflicts
git rebase --continue

# Skip the current patch during rebase (useful if a commit causes conflicts you want to ignore)
git rebase --skip

# Rebase and preserve merges (experimental, use carefully)
git rebase --preserve-merges main

# Rebase using the "merge" backend (older method, rarely used now)
git rebase --merge main

---

### Quick Visual of a Common Workflow
```bash
git clone <repo-url>
git checkout -b new-feature
# make changes
git add .
git commit -m "Add new feature"
git push origin new-feature
# open PR on GitHub
```
