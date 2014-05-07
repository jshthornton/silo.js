(function(win, undefined) {
	'use strict';

	function _do($) {
		return {
			_hash: {},

			nodeMethod: 'data',
			nodeKey: 'viewId',

			add: function(key, value) {
				if(this._hash[key]) return false;

				this._hash[key] = value;
				return true;
			},

			remove: function(key) {
				if(!this._hash[key]) return false;

				delete this._hash[key];
				return true;
			},

			findById: function(key) {
				return this._hash[key];
			},

			findByNode: function($node) {
				return this.findById($node[this.nodeMethod](this.nodeKey));
			}
		};
	}

	if (typeof define === 'function' && define.amd) {
		define(['jquery'], _do);
	} else {
		win.silo = _do(jQuery);
	}
}(window));