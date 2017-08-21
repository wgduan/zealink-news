import { Autocomplete } from 'element-ui'

export default {
    extends:Autocomplete,
    mounted(){
        var self=this;
        this.$refs.input.$on("focus",function(){
            //console.log("focus")
            self.$emit("focus");
        });
        this.$refs.input.$on("blur",function(){
            //console.log("blur")
            self.$emit("blur");
        });
    }
}