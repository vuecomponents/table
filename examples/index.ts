import * as Vue from 'vue'
import Component from 'vue-class-component'
import Table from ''

@Component({
    props: {
        propMessage: String
    },
    template: `
        <Table></Table>
    `
})
class App extends Vue {
    msg: ''

    data() {
        return {
            msg: 123
        }
    }

    mounted() {
    }

    get computedMsg() {
        return 'computed ' + this.msg
    }
}
console.dir(App)
new App({
    el: '#app'
})