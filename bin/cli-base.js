#! /usr/bin/env node
const {program}=require('commander')
//console.log('mycli')
// console.log(process.argv)
// if(process.argv[2]=='--help'){
//     console.log('获取到了命令参数')
// }
program.option('-f --framwork <framwork>','设置框架')

program.
command('create <project> [other...]')
.alias('crt')
.description('创建项目')
.action((project,args)=>{
    console.log(project)
    console.log(args)
})
program.parse(process.argv)