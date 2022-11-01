import Parser from 'web-tree-sitter'

const _global: any = global

export async function initializeParser(): Promise<Parser> {
  if (_global.fetch) {
    // NOTE: temporary workaround for emscripten node 18 support.
    // emscripten is used for compiling tree-sitter to wasm.
    // https://github.com/emscripten-core/emscripten/issues/16915
    delete _global.fetch
  }

  await Parser.init()
  const parser = new Parser()

  const isWin = process.platform == 'win32'
  let separator = '/'
  if (isWin) {
    separator = '\\'
  }

  const lang = await Parser.Language.load(`${__dirname}${separator}..${separator}tree-sitter-poweron.wasm`)

  parser.setLanguage(lang)
  return parser

}
