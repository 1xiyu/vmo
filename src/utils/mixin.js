export function isObject(x) {
    return x != null && typeof x === 'object';
}

export function hasOwnProperty(object, prop) {
    return Object.prototype.hasOwnProperty.call(object, prop);
}

export function device() {
	return navigator.userAgent.match('Android') ? 'android':'ios';
}

export function contains(object, title) {
    return typeof object === 'object' && object.hasOwnProperty(title)
}