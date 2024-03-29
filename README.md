# shuttle

A utility for moving a repository from one account to another :minibus:

<!--status-badges start -->

[![Codecov][coverage-badge]][coverage-link]
![SLSA Level 2][slsa-badge]
[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]

<!--status-badges end -->

## Table of Contents

* [Usage](#usage)
  * [Installation](#installation)
  * [Example](#example)
    * [Import](#import)
    * [Execute](#execute)
* [Contributing](#contributing)
  * [Dependencies](#dependencies)
  * [Verification](#verification)

## Usage

<!--consumer-badges start -->

[![npm][npm-badge]][npm-link]
[![Try @form8ion/shuttle on RunKit][runkit-badge]][runkit-link]
[![MIT license][license-badge]][license-link]

<!--consumer-badges end -->

### Installation

```sh
$ npm install @form8ion/shuttle --save-prod
```

### Example

#### Import

```javascript
import {shuttle} from '@form8ion/shuttle';
```

#### Execute

```javascript
  await shuttle({decisions: {[questionNames.PROJECT_NAME]: 'new-project-name'}});
```

## Contributing

<!--contribution-badges start -->

[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]
[![PRs Welcome][PRs-badge]][PRs-link]
[![Renovate][renovate-badge]][renovate-link]

<!--contribution-badges end -->

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

[npm-link]: https://www.npmjs.com/package/@form8ion/shuttle

[npm-badge]: https://img.shields.io/npm/v/@form8ion/shuttle?logo=npm

[runkit-link]: https://npm.runkit.com/@form8ion/shuttle

[runkit-badge]: https://badge.runkitcdn.com/@form8ion/shuttle.svg

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/shuttle.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[coverage-link]: https://codecov.io/github/form8ion/shuttle

[coverage-badge]: https://img.shields.io/codecov/c/github/form8ion/shuttle?logo=codecov

[slsa-badge]: https://slsa.dev/images/gh-badge-level2.svg

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot

[github-actions-ci-link]: https://github.com/form8ion/shuttle/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://img.shields.io/github/actions/workflow/status/form8ion/shuttle/node-ci.yml.svg?branch=master&logo=github
