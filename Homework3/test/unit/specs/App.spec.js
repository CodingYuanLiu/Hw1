import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
  it('The ladder is empty by default', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.result').textContent)
      .to.equal('Result:'+'Empty')
  })
})


describe('App.vue', () => {
    it('Could generate ladder Correctly', () => {
      const Constructor = Vue.extend(App)
      const vm = new Constructor().$mount()
      let Start = ['code','cade','data','date']
      let Destination = ['data','date','code','cade']
      let Result=['code->cade->cate->date->data','cade->cate->date','data->date->cate->cade->code','date->cate->cade']
      for(let i=0;i<4;i++)
      {
        vm.$set(vm.$data, 'start', Start[i])
        vm.$set(vm.$data, 'destination', Destination[i])
        const button = vm.$el.querySelector('button')
        const clickEvent = new window.Event('click')
        button.dispatchEvent(clickEvent)
        vm._watcher.run()
        expect(vm.$el.querySelector('.result').textContent)
          .to.equal('Result:'+Result[i])
      }
    })
  })

  describe('App.vue', () => {
    it('Could find words in dictionary Correctly', () => {
      const Constructor = Vue.extend(App)
      const vm = new Constructor().$mount()
      let words = ['cade','cate','code','data','date']
      var Dictionary=[]
      class Word{
        constructor(string){
            this.word=string;
            this.used=false;
        }
      }
      for(let i=0;i<5;i++)
      {
        Dictionary.push(new Word(words[i]));
      }
      for(let i=0;i<5;i++)
      {
        expect(vm.v_in_dictionary(words[i],Dictionary))
          .to.equal(i)
      }
    })
  })