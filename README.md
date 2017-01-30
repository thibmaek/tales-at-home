[![Greenkeeper badge](https://badges.greenkeeper.io/thibmaek/tales-at-home.svg?token=fdb06d781a40b3c90c8e9f4dad59bd29779690768c0fdadd9d246785a038c18c)](https://greenkeeper.io/) ![](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square")

## Table of Contents
1. [Installing](#installing)
2. [Management](#management)
3. [Maintaining](#maintaining)
4. [Testing](#testing)

## Installing
1. `npm (or yarn) install`
2. `npm run start:ipad` to launch a packaging server and open a debugger instance on _0.0.0.0:8081_
  - Alternatively run `npm run start` to just start the packing server
  - For Nuclide just run `Nuclide React Native: Start Debugging` in the command palette.
3. Edit the `src` folder only.

## Management
* The master branch is only to be used for working code. This branch should reflect a state which at any time could be used to demo a working version of the project.
* Use the develop branch for in-progress builds/states. Don't directly commit stuff in except when it's: a hotfix or a dependency modification (eg. upgrade)
* Use feature branches for merging new features and more extensive fixes into `develop`. Prefix feature branches with your initials (eg. `tm-homepage`)
  * Delete these once merged in, no dead branches pls 💀
* Never merge in branches failing on CI.
* Please sign-off commits (preferably with a GPG signature, otherwise with `git commit -S`)
* Preferably use Nuclide as an IDE for React Native. Xcode works too, but Nuclide has first-class support for launching a packaging service and debugging inside Atom.

## React
* Write a component with props on 1 line if:
	* …the props are within 100 chars line-length
	* …callbacks are lambdas/immediate returns
* For each new component but the component itself in src/containers or src/components and its style in src/assets/styles/containers or src/assets/styles/components. No inline styles
* Import style objects/StyleSheets as `s`:
`import s from 'src/assets/styles/components/Navigation'`
* Only absolute imports
* For text use the provided globalStyle:
```
<Text style={[globalStyle, s.yourStyle]}></Text>
```
* Use ternary expressions for your conditions as much as possible
* Use lambda's as much as possible.

## Maintaining
* Use gitmoji for each commit. Install gitmoji-cli and create a git hook inside the root project (`gitmoji -i`).
* PR reviews are required to be marked OK by everyone before merging. Only use admin merge when discussed with everyone.
* Use issue & PR labels.
  * Multiple words should be chained with a dash (eg. `wont-fix`)
  * Use [GitScout](https://gitscout.com/) for issue tracking & project boards
* Clean up unused deps. Preferably keep using the currently integrated Greenkeeper.
* Tag release new master builds.

## Testing
* Run jest with coverage. `npm t` does this automatically.
	* Update your screenshots if needed with `npm run test:update`
	* Mock third party modules
* Use flow where suited. Don't check 3rd party stuff but focus on pure functions etc.
* When a PR fails due to a regression, check the Travis logs, find the issue and discuss it in the PR.
