const ora=require('ora')
const spinner=ora().start()
spinner.text='loading...'
setTimeout(()=>{
    console.log(111)
    // spinner.succeed('任务结束')
    spinner.fail('失败结束')
},3000)