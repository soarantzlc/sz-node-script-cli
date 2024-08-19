# sz-node-script-cli 
基与工具类commander进行了二次封装，简化脚本在脚本参数解析时的代码复杂度，方便开发者快速开发脚本包
工具需要使用node14+  使用mjs开发脚本模块

## 使用指南

- 安装工具包
```
npm install sz-node-script-cli
```

- 使用脚本工具开发脚本

```mjs
import {scriptRunner} from "sz-node-script-cli";

const config = {
    version: '1.0.0'
    params:[
        ['mode','调用模式',true],
        ['debug','调试模式'],
        ['test  <char>','测试模式']
    ],
    run:({params})=>{
        ...    //脚本代码
    }
}

scriptRunner(config);
```

- 支持的的命令

  - 输入 node index.mjs -h 会显示可以调用的命令
      ```
      -V, --version        output the version number
      -m, --mode           调用模式
      -d, --debug          调试模式
      -t, --test  <char>   测试模式
      -h, --help           display help for command 
    
       ```
  - mode属性为必设项,如果命令中不包含mode属性则会输出

      ```
         error: required option '-m, --mode ' not specified
      ```
  - debug 属性为bool，设置字符串的的话默认为true
  - test 必须是字符传，如果设置了属性不设置内容则会提示
    ```
    error: option '-t, --test  <char> ' argument missing
    ```


- 备注：
  基与commander进行了二次封装，如果需要更多功能可以参考[commander](https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md)
