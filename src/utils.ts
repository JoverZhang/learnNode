export class Py2Js {
  public jsCode: string = ''

  constructor (pyCode: string) {
    this.jsCode = Py2Js.py2js(pyCode)
  }

  getJsCode (): string {
    return this.jsCode
  }

  private static py2js (pyCode: string): string {
    let code = pyCode
    const reg = {
      print: /print\((.+?)\)/g,
    }

    code = code.replace(reg.print, 'console.log($1)')
    return code
  }
}
