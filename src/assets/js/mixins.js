
import BackTop from "@/components/content/BackTop";
import {BACK_POSITION} from './const';


export const backTopMixin = {
    data(){
        return{
            isShowBackTop: false,
        }
    },
    components:{
        BackTop,
    },
    methods:{
        backTop(){
            this.$refs.scroll.scrollTo(0, 0, 300);
        },
        listenShowBackTop(position){
            this.isShowBackTop = -position.y > BACK_POSITION;
        }
    }

}