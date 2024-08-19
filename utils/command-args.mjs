//命令行参数解析插件
import {Command  } from 'commander';

class CommandPlugin {
    constructor() {
        this.command = new Command ();
    }

    setVersion (version){
        this.command.version(version);
    }
    register(key,value,required){
        if(required){
            this.command.requiredOption(`-${key[0]}, --${key} `, value);
        }else{
            this.command.option(`-${key[0]}, --${key} `, value);
        }
    }
    parse (){
        this.command.parse(process.argv);
    }

    getAttrs(){
        return this.command.opts();
    }
}

export {
    CommandPlugin
};
