/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import { madlibs } from './resources/resources.js';
//let ran=Math.floor(Math.random() * madlibs.length);
//import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';



export default{
	methods: {
		getRandom(){
            console.log('success');
			return Math.floor(Math.random() * madlibs.length);
		}
	}
};
