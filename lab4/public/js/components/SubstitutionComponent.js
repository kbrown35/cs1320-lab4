/* eslint-disable indent */
export default {
	props: {
		substitution: String,
		input: String,
	},
	computed: {
		filled() {
			return !!this.input;
		},
		text() {
            //console.log(this.filled? this.input: this.substitution);
            //console.log('this.filled?', this.filled);
            //console.log('this.input', this.input);
            //console.log('this.substitution', this.substitution);
            //if(this.filled){
                //this.input=localStorage.getItem(this.substitution);
            //}
			return this.filled? this.input: this.substitution;
		},
		classes() {
			if (this.filled) {
				return ['font-weight-bold'];
			} else {
				return [
					'border-bottom',
					'px-2',
					'text-muted'
				];
			}
            
		}
	},
	template: `
        <span :class="classes">{{text}}</span>
    `,
};
