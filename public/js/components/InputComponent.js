/* eslint-disable indent */
export default {
	props: {
		'sid': Number,
		'substitutionLabelName': String,
	},
	data() {
		return {
			classes: ['form-group', 'd-flex'],
			labelClasses: ['text-white', 'col-3'],
			inputClasses: ['col'],
			input: '',
		};
	},
	computed: {
		substitutionID() {
			return `input-${this.sid}`;
		},
	},
	watch: {
		input(val) {
            console.log(this.sid,val);
            localStorage.setItem(this.sid,val);
			this.$emit('on-input', this.sid, val);
		},
	},
	template: `
        <div :class="classes">
            <label :class="labelClasses" :for="sid">{{substitutionLabelName}}</label>
            <input :style="inputClasses" type="text" class="form-control" :id="sid" v-model="input">
        </div>
    `,
};
