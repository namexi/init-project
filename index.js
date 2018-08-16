/**
 * Created by 40663 on 2018/8/15.
 */
"use strict"
const path = require('path')
const init = require('./lib/project.js')
const pei = require('./lib/config.js')
let pro = process.argv
let argv =pro[2]
let rootDir = path.join(path.dirname(__dirname),pro[3]? pro[3]:pei.root)
switch (argv) {
    case 'init':
        init(rootDir)
        break
    case '-v':
        console.log('版本号:1.0.0')
        break
}
