import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(검포넌트) 옵션 영역
        name: name,
        created() {
            bus.$emit('start:spinner');
            setTimeout(() => {
                this.$store.dispatch('FETCH_LIST', this.$route.name)
                    .then(() => {
                        console.log('fetched');
                        bus.$emit('end:spinner');
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }, 3000);
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}