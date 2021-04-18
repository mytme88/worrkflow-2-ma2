
import Heading from './Heading.js';

test('Heading string should contain "Workflow 2"', () => {
	const heading = Heading();
	const { props } = heading;
    expect(props.children.indexOf('Workflow 2') > -1).toBe(true);
});