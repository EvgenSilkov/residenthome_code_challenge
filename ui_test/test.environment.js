const { extendAllureBaseEnvironment } = require('jest-circus-allure-environment');
const JestEnvironmentNode = require('jest-environment-node');

const skipTests = (element) => {
  if (element.type === 'describeBlock') {
    element.children.forEach((child) => skipTests(child));
  }

  if (element.type === 'test') {
    element.mode = 'skip';
  }
};

const allureEnv = extendAllureBaseEnvironment(JestEnvironmentNode);

/**
 * Allure environment doesn't support skipping of tests.
 * This trick stopped working when I added allure.
 */
class SkipDownstreamTestsEnvironment extends allureEnv {
  /**
   * @param {import('jest-circus').Event} event
   * @param {import('jest-circus').State} state
   */
  async handleTestEvent(event, state) {
    if (event.name === 'test_fn_failure') {
      const children = state.currentlyRunningTest.parent.children;
      const testIndex = children.findIndex((el) => el === state.currentlyRunningTest);
      console.log(testIndex);

      for (let i = testIndex; i < children.length; i++) {
        skipTests(children[i], this.reporter);
      }
    }
  }
}

module.exports = allureEnv;
