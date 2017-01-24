![](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square")

## Table of Contents

[![Greenkeeper badge](https://badges.greenkeeper.io/thibmaek/tales-at-home.svg?token=fdb06d781a40b3c90c8e9f4dad59bd29779690768c0fdadd9d246785a038c18c)](https://greenkeeper.io/)
1. [Management](#management)
2. [Maintaining](#maintaining)
3. [Testing](#testing)

## Management
* The master branch is only to be used for working code. This branch should reflect a state which at any time could be used to demo a working version of the project.
* Use the develop branch for in-progress builds/states. Don't directly commit stuff in except when it's: a hotfix or a dependency modification (eg. upgrade)
* Use feature branches for merging new features and more extensive fixes into `develop`. Prefix feature branches with your initials (eg. `tm-homepage`)
  * Delete these once merged in, no dead branches pls 💀
* Never merge in branches failing on CI.

## Maintaining
* Use gitmoji for each commit. Install gitmoji-cli and create a git hook inside the root project (`gitmoji -i`). 
* PR reviews are required to be marked OK by everyone before merging. Only use admin merge when discussed with everyone.
* Use issue & PR labels.
* Clean up unused deps. Preferably keep using the currently integrated Greenkeeper.
* Tag release new master builds.

## Testing
* Run jest with coverage. `npm t` does this automatically.
* Use flow where suited. Don't check 3rd party stuff but focus on pure functions etc.
* When a PR fails due to a regression, check the Travis logs, find the issue and discuss it in the PR.
