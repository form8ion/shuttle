# shuttle

A utility for moving a repository from one account to another

<!--status-badges start -->

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
(async () => {
  await shuttle();
```

```javascript
})();
```

## Contributing

<!--contribution-badges start -->

[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![Greenkeeper][greenkeeper-badge]][greenkeeper-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]
[![PRs Welcome][PRs-badge]][PRs-link]

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

[npm-badge]: https://img.shields.io/npm/v/@form8ion/shuttle.svg

[runkit-link]: https://npm.runkit.com/@form8ion/shuttle

[runkit-badge]: https://badge.runkitcdn.com/@form8ion/shuttle.svg

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/shuttle.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[greenkeeper-link]: https://greenkeeper.io/

[greenkeeper-badge]: https://badges.greenkeeper.io/form8ion/shuttle.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
