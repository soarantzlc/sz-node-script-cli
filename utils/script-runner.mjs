
import {CommandPlugin} from "./command-args.mjs";

const regArgs = (source,version)=>{
    const command = new CommandPlugin();
    if(version){
        command.setVersion(version)
    }
    source.forEach((item)=>{
       command.register(item[0],item[1],item[2] || null);
    })
    command.parse();
    return command.getAttrs();
}

const scriptRunner = (scriptConfig)=>{
    let params = regArgs(scriptConfig.params,scriptConfig.version);
    scriptConfig.run({params})
}

export {
    scriptRunner
}
