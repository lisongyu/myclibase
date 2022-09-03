const download=require('download-git-repo')
const ora=require('ora')
const chalk = require('chalk')
const downloadFun=function(url,project){
    const spinner=ora().start()
    console.log(url)
    spinner.text='代码正在下载...'
    // download('github.com:lisongyu/my-template-utils#master',project,{clone:true},(err)=>{
        download('direct:' + url,project,{clone:true},(err)=>{
        console.log(err)
        if(!err){
            spinner.succeed('代码下载成功')
            console.log(chalk.blue.bold('Done!'), chalk.bold('you run:'));
            console.log('cd ' + project);
            console.log('npm install ');
            console.log('npm run dev ');
        }else{
            spinner.fail('代码下载失败')
        }
    })
}
module.exports=downloadFun
   