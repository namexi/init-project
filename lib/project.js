/**
 * Created by 40663 on 2018/8/15.
 */
"use strict"

const fs =require('fs')

const path = require('path')
const pei =require('./config.js')



function getRootContent(config,rootDir){
    fs.mkdir(rootDir,(err) => {
        config.forEach((element) =>{
            let subDir = element.subdir
            if (element.type === 'dir') {
                fs.mkdir(path.join(rootDir,element.name),(err) => {
                    if (err) return err
                })
                if (subDir) {
                    let dir = path.join(rootDir, element.name)
                    getRootContent(subDir,dir)
                }
            }
            if (element.type === 'file') {
                fs.writeFile(path.join(rootDir,element.name),element.name,(err) =>{
                    if (err) return err
                })
            }
        })
    })

}
//const rootDir = path.join(path.dirname(__dirname),pei.root)
function init(rootDir){
    getRootContent(pei.content,rootDir)
}

module.exports = init