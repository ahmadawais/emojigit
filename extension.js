const vscode = require('vscode')

function doesTerminalExist() {
  if (vscode.window.terminals.length === 0) {
    return false
  }
  return true
}

function convert(el) {
  if (el.match('🎨')) return ':art: Improve structure'
  if (el.match('⚡')) return ':zap: Improve performance'
  if (el.match('🔥')) return ':fire: Remove'
  if (el.match('🐛')) return ':bug: Fix bug in'
  if (el.match('🚑')) return ':ambulance: Hot fix'
  if (el.match('✨')) return ':sparkles: Add feature'
  if (el.match('📝')) return ':memo: Documentation'
  if (el.match('🚀')) return ':rocket: Deploy code'
  if (el.match('💄')) return ':lipstick: Update style'
  if (el.match('🎉')) return ':tada: Initial commit'
  if (el.match('✅')) return ':white_check_mark: Add test'
  if (el.match('🔒')) return ':lock: Fix security issue'
  if (el.match('🍎')) return ':apple: Fix macOs issue'
  if (el.match('🐧')) return ':penguin: Fix linux issue'
  if (el.match('🏁')) return ':checkered_flag: Fix windows issue'
  if (el.match('🍏')) return ':green_apple: Fix iOS issue'
  if (el.match('🔖')) return ':bookmark: Release tag'
  if (el.match('🚨')) return ':rotating_light: Remove linter warning'
  if (el.match('🚧')) return ':construction: Work in progress'
  if (el.match('💚')) return ':green_heart: Fix CI'
  if (el.match('⬇')) return ':down_arrow: Downgrade dependency'
  if (el.match('⬆')) return ':up_arrow: Upgrade dependency'
  if (el.match('📌')) return ':pushpin: Pin dependency'
  if (el.match('👷‍')) return ':construction_worker: Add CI build'
  if (el.match('📈')) return ':chart_with_upward_trend: Add analytics'
  if (el.match('♻')) return ':recycle: Refactor'
  if (el.match('🐳')) return ':whale: Docker'
  if (el.match('➕')) return ':heavy_plus_sign: Add dependency'
  if (el.match('➖')) return ':heavy_minus_sign: Remove dependency'
  if (el.match('🔧')) return ':wrench: Change config file'
  if (el.match('🌐')) return ':globe_with_meridians: Localize'
  if (el.match('✏')) return ':pencil2: Fix typo'
  if (el.match('💩')) return ':hankey: Bad code'
  if (el.match('⏪')) return ':rewind: Revert changes'
  if (el.match('🔀')) return ':twisted_rightwards_arrow: Merge branches'
  if (el.match('📦')) return ':package: Update package'
  if (el.match('👽')) return ':alien: Update code'
  if (el.match('🚚')) return ':truck: Move/Rename'
  if (el.match('📄')) return ':page_facing_up: Add license'
  if (el.match('💥')) return ':boom: Introduce breaking change'
  if (el.match('🍱')) return ':bento: Add asset'
  if (el.match('👌')) return ':ok_hand: Update due to code review'
  if (el.match('♿')) return ':wheelchair: Improve accessibility'
  if (el.match('💡')) return ':buld: Document source code'
  if (el.match('🍻')) return ':beers: Drunk tonight'
  if (el.match('💬')) return ':speech_balloon: Update text'
  if (el.match('🗃')) return ':card_file_box: Change database'
  if (el.match('🔊')) return ':loud_sound: Add logs'
  if (el.match('🔇')) return ':mute: Remove logs'
  if (el.match('👥')) return ':busts_in_silhouette: Add contributors'
  if (el.match('🚸')) return ':children_crossing: Improve UX'
  if (el.match('🏗')) return ':building_construction: Change architecture'
  if (el.match('📱')) return ':iphone: Add responsive'
  if (el.match('🤡')) return ':clown_face: Add mocks'
  if (el.match('🥚')) return ':egg: Add easter egg'
  if (el.match('🙈')) return ':see_no_evil: Add .gitignore'
  if (el.match('📸')) return ':camera_flash: Add snapshots'
  if (el.match('⚗')) return ':alembic: Add experimental'
  if (el.match('🔍')) return ':mag: Improve SEO'
  if (el.match('☸')) return ':wheel_of_dharma: Kubernetes'
  if (el.match('🏷')) return ':label: Add types'
  return ''
}

function activate(context) {
  let disposable = vscode.commands.registerCommand('extension.emojiCommit', async function() {
    vscode.window
      .showQuickPick(
        [
          '🎨  Improve structure or format of code',
          '⚡  Improve performance',
          '🔥  Remove code of files',
          '🐛  Fix a bug',
          '🚑  Critical hotfix',
          '✨  Introducing new features',
          '📝  Writing docs',
          '🚀  Deploy code',
          '💄  Updating the UI and style files',
          '🎉  Initial commit',
          '✅  Adding tests',
          '🔒  Fixing security issues',
          '🍎  Fixing something on macOS',
          '🐧  Fixing something on Linux',
          '🏁  Fixing something on Windows',
          '🍏  Fixing something on iOS',
          '🔖  Releasing / Versioning tags',
          '🚨  Removing linter warnings',
          '🚧  Work in progress',
          '💚  Fixing CI build',
          '⬇   Downgrading dependencies',
          '⬆   Upgrading dependencies',
          '📌  Pinning dependencies to specific versions',
          '👷‍  Adding CI build system',
          '📈  Addin analytics or code tracking',
          '♻  Refactoring code',
          '🐳  Work about Docker',
          '➕  Adding a dependency',
          '➖  Removing a dependency',
          '🔧  Changing configuration files',
          '🌐   Internationalization and localization',
          '✏  Fixing typos',
          '💩  Writing bad code that needs to be improved',
          '⏪  Reverting changes',
          '🔀  Merging branches',
          '📦  Updating compiled files or packages',
          '👽  Updating code due to external changes',
          '🚚  Moving or renaming files',
          '📄  Adding or updating license',
          '💥  Introducing breaking changes',
          '🍱  Adding or updating assets',
          '👌  Updating code due to code review changes',
          '♿  Improves accessibility',
          '💡  Documenting source code',
          '🍻  WCD - Writing code drunkenly',
          '💬  Updating text and literals',
          '🗃  Performing database related changes',
          '🔊  Adding logs',
          '🔇  Removing logs',
          '👥  Adding contributors',
          '🚸  Improving user experience / usability',
          '🏗  Making architectural changes',
          '📱  Working on responsive design',
          '🤡  Mocking things',
          '🥚  Adding an easter egg',
          '🙈  Adding or updating a .gitignore file',
          '📸  Adding or updating snapshots',
          '⚗  Experimenting with new things',
          '🔍  Improving SEO',
          '☸  Work about Kubernetes',
          '🏷  Adding or updating types (Flow, Typescript)'
        ],
        { placeHolder: 'Type to search by commit type' }
      )
      .then(el => {
        if (doesTerminalExist()) {
          vscode.window.activeTerminal.show()
          vscode.window.activeTerminal.sendText(`git commit -m '${convert(el)}'`, false)
        } else {
          vscode.window.onDidOpenTerminal(e => {
            e.sendText(`git commit -m '${convert(el)}'`, false)
          })
          vscode.window.createTerminal().show()
        }
      })
  })

  context.subscriptions.push(disposable)
}
exports.activate = activate

function deactivate() {}
exports.deactivate = deactivate
