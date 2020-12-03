import { Namespace } from '../abc/lazy/Namespace';
import { Multiname } from '../abc/lazy/Multiname';
import { CONSTANT } from '../abc/lazy/CONSTANT';

export function makeMultiname(v: any, namespace?: Namespace) {
	const rn = new Multiname(null, 0, CONSTANT.RTQNameL, [], null);
	rn.namespaces = namespace ? [namespace] : [Namespace.PUBLIC];
	rn.name = v;

	// require for {0: 10}, because otherwith it will return invalid result
	if (Number.isInteger(+v)) {
		rn.numeric = true;
		rn.numericValue = +v;
	}

	return rn;
}
