import * as Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    props: {
        propMessage: String
    },
    template: require('table.html')
})
class App extends Vue {
    // return initial data
    data() {
        return {
            msg: 123
        }
    }

    // lifecycle hook
    mounted() {
        this.greet()
    }

    // computed
    get computedMsg(this: any) {
        return 'computed ' + this.msg
    }

    // method
    greet() {
        alert('greeting: ' + this.msg)
    }
}