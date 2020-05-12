import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';
import { madlibs } from './resources/resources.js';
//import GameComponent from './components/GameComponent.js';
import SeparateInputsComponent from './components/SeparateInputs.js';
let ran=Number;

console.log(`${madlibs.length} madlibs loaded`);
new Vue({
	el: '#app',
	data: {
		madlib: null,
		appClasses: ['p-4', 'd-flex', 'h-100', 'flex-column', 'align-items-center', 'justify-content-start'],
	},
	components: {
		//'game-component': GameComponent,
		'separate-inputs':SeparateInputsComponent,
	},
	created () {
		localStorage.clear();
		console.log('localStorage cleared');
		this.useRandomMadlib();
	},
	methods: {
		getRandomMadlibIndex() {
			ran=Math.floor(Math.random() * madlibs.length);
			localStorage.setItem('ran',ran);
			//return Math.floor(Math.random() * madlibs.length);
			console.log('madlibs: ', ran);
			return ran;
		},
		getRandomMadlib() {
			return madlibs[this.getRandomMadlibIndex()];
		},
		useRandomMadlib() {
			this.madlib = this.getRandomMadlib();            
		}
	},
});
