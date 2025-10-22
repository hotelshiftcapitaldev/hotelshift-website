# Contributing Guide

Thanks for helping improve this project! Here's the workflow to collaborate smoothly.

## Workflow for Feature Development and Merging

1. **Create and switch to a new branch for your feature or fix**
    ```bash
    git fetch --all
    git checkout -b <new branch name> origin/master
    ```

- If branch is already created:
    ```bash
    git checkout <branch_name>
    ```

2. **Make your changes locally**

3. **Stage and commit your changes**
    ```bash
    git add .
    git commit -m "Describe your changes"
    ```

4. **Push your branch to the remote repo**
    ```bash
    git push -u origin feature/your-feature-name
    ```

5. **Open a Pull Request (PR)**
    - Go to the GitHub repository page
    - Click **Pull Requests** -> **NewPull Request**
    - Select your branch as the source and `master` as the target
    - Provide a clear title and description of your changes
    - Sumit the PR for review

6. **Address feedback from reviewers**
    - Make updates locally as needed
    - Commit and push the changes to the same branch
    - GitHub will update the PR automatically

7. **Once approved, merge the PR**
    - Use "Squash and merge" or "Merge commit" (depending on preference)
    - Optionally delete the feature branch on GitHub after merging

8. **Update your local `master` branch**
    ```bash
    git checkout master
    git pull origin master
    ```

---

## Tips

- Always pull latest changes from `master` before starting new work
- Write clear, concise commit messages
- Feel free to open issues or discuss ideas before starting big features

---

Thanks for contributing and helping make this project better!