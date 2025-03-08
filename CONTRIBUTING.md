# Logimo Contributing Guide

Hi! We are really happy that you are interested in contributing to **Logimo**, please make sure to take a moment and read through the following guide:

## 👨‍💻 Repository Setup

To set the repository up:

| Step                                                                                                     | Command        |
| -------------------------------------------------------------------------------------------------------- | -------------- |
| 1. Install [Node.js](https://nodejs.org/), using the [latest LTS](https://nodejs.org/en/about/releases/) | -              |
| 2. [Install pnpm](https://pnpm.io/ja/installation)                                                       | -              |
| 3. Install dependenciesunder the project root                                                            | `pnpm install` |
| 4. (Optional) [Install extensions for VSCode](#extensions-for-vscode)                                    | -              |

## 🌱 Create the Branch

Default branch is `develop` and development should be done in separate topic branches which are merged back by PRs to `develop`.

### Branch Naming

Please follow these branch naming conventions:

**Prefix**: Use one of the following prefixes depending on the type of change:

- `feature/#{issue_id}_name_of_the_issue` – for new features
- `fix/#{issue_id}_name_of_the_issue` – for bug fixes
- `chore/#{issue_id}_name_of_the_issue` – for routine tasks or maintenance work
- `enhancement/#{issue_id}_name_of_the_issue` - for enhancement
- `test/#{issue_id}_name_of_the_issue` – for adding or modifying integration tests
- `doc/#{issue_id}\_name_of_the_issue` – for documentation updates

**Lowercase**: The branch name must be lowercase (e.g. `doc/#1346_create_doc_for_migrating_from_github_wiki`).

**Issue ID**: Include the issue ID in the branch name. If there is no related issue, you don't need to include it.

**Underscores**: Use underscores (`_`) to separate words in the branch name, not dashes or spaces.

## ✔️ Commit your changes

### Code Conventions

- **Most important: Look around.** Match the style you see used in the rest of the project. This includes formatting, naming files, naming things in code, naming things in documentation, etc.
- "Attractive"
- We do have Prettier (a formatter) and ESLint (a syntax linter) to catch most stylistic problems. If you are working locally, they should automatically fix some issues during every git commit.
- **For documentation**: Do not wrap lines at 80 characters - configure your editor to soft-wrap when editing documentation.

Don't worry too much about styles in general—the maintainers will help you fix them as they review your code.

### Commit Messages

we use [gitmoji](https://gitmoji.dev/) to make commit messages more visually understandable.

Format: `<gitmoji> <subject>`

For example, you can use the following gitmoji:

- `:art:`: Improve structure / format of the code.
- `:zap:`: Improve performance.
- `:fire:`: Remove code or files.
- `:bug:`: Fix a bug.
- `:memo:`: Add or update documentation.
- `:white_check_mark:`: Add, update, or pass tests.
- `:rotating_light:` Fix compiler / linter warnings.
- `:pencil2:` Fix typos.

You can find more details on usage at [gitmoji.dev](https://gitmoji.dev/).

## 🙌 Sending Pull Requests

If you don't know how to send a Pull Request, we recommend reading [the guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

Please make sure the following is done when submitting a pull request:

1. **Keep your PR small.**: Small pull requests (~300 lines of diff) are much easier to review and more likely to get merged. Make sure the PR does only one thing, otherwise please split it.
2. **Use descriptive titles.**: We recommended to follow this [pull request title style](#pull-request-title)
3. **Check the base branch.**: All pull requests should be opened against the `develop` branch.
4. **Check to see if Breaking Changes is included.**: If included, check [here](#breaking-changes).

### Pull Request Title

When submitting a Pull Request, please use the following title format:

```
Feature/#1111: The title of this pull request
```

**Prefix**: Use the prefix of the branch you created. Capitalize only the first letter.

**Issue ID**: Include the issue number this PR resolves. If there is no related issue, you can omit this.

**Colon**: Always include a colon (`:`) after the issue ID.

**Title**: Briefly describe the content of this PR. Capitalize only the first letter.

### Breaking Changes

When adding a new breaking change, follow this template in your pull request:

```md
### New breaking change here

- **Who does this affect**:
- **How to migrate**:
- **Why make this breaking change**:
- **Severity (number of people affected x effort)**:
```

### What Happens Next?

The core team will be monitoring pull requests and review it. Do help us by keeping pull requests consistent by following the guidelines above.

## 💡 Issues

Before you open an Issue, make a quick research if your particular problem is not already Existing. If not, then progress by creating a new ticket. We are naming our Issues in English / Japanese!

- [BUG] English Title / Japanese Title
- [chores] English Title / Japanese Title
- [feature] English Title / Japanese Title

We are using templates for issues as well, so please fill them out with care! Since issues are the backbone of this project. The amount of issues is going to have a big impact on making decisions.

> When creating an issue keep the following mindset:
>
> - what **is** the current situation
> - what **should** be the situation actually look like
> - what is the problem then
> - if you have an idea create then describe your approach

## 🗒 Additional Info

### Extensions for VSCode

We recommend that you use VSCode as your editor.
This is because it will allow us to develop this project more easily by installing the following extensions:

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
