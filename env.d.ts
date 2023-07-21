/// <reference types="vite/client" />
declare module "*.vue" {
    import {DefineComponent} from "vue";
    const cmp: DefineComponent <{},{},any>
    export default cmp
}