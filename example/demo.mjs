import {scriptRunner} from "../utils/script-runner.mjs";

const config = {
    version:'1.0.0',
    params:[
        ['mode','调用模式',true],
        ['debug','调试模式'],
        ['test  <char>','测试模式']
    ],
    run:({params})=>{
        console.log(params)   //输出参数信息
    }
}

scriptRunner(config);
