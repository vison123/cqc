/* eslint max-nested-callbacks:0 */

const sinon = require('sinon');

const CodeQualityChecker = require('../../');
const codeQualityChecker = new CodeQualityChecker();

describe('Report with verbose options', () => {
    beforeEach(function () {
        this.sinon = sinon.sandbox.create();
    });
    afterEach(function () {
        this.sinon.restore();
    });

    const cqcResult = codeQualityChecker.check([
        'test/sample/**/*.js',
        'test/sample/**/*.jsx'
    ], {
        verbose: true
    });
    it('Should match provided console.log result', function () {
        this.sinon.spy(console, 'log');

        cqcResult.report();

        this.sinon.assert.calledWithMatch(console.log, /^Number of files: 6[\s\S]*45-95: complexity 13$/);
    });
});
