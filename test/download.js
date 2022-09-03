const download=require('download-git-repo')

download('direct:https://gitlab.com/flippidippi/download-git-repo-fixture.git','./xxx',{clone:true},(err)=>{
    console.log(err)
})