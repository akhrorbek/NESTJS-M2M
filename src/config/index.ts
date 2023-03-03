import { ConfigModuleOptions } from "@nestjs/config/dist/interfaces";
import { AppConfig } from "./app";
import { DataBaseConfig } from "./database";

export const config: ConfigModuleOptions = {
    load:[AppConfig, DataBaseConfig],
    isGlobal:true,
    cache:true
}