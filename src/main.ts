import { Py2Js } from './utils'

import fs from 'fs'

(function main (): void {
  const pyCode = fs.readFileSync('./resource/main.py', 'utf-8')
  const py2js = new Py2Js(pyCode)
  const jsCode = py2js.getJsCode()
  console.log(jsCode)
  eval(`
    (function(){
      ${jsCode}
    })()
  `)
})()

