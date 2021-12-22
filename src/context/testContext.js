import React, { createContext, PureComponent } from "react";

const TestContext = createContext();
export const TestConsumer = TestContext.Consumer;
export class TestProvider extends PureComponent {
    state = {
        testValue: 'on'
    }

    toggleValue = () => {
        this.setState(({ testValue }) => ({ testValue: testValue === 'on' ? 'off' : 'on' }))
    }

    render() {
        const { children } = this.props
        const { testValue } = this.state
        return (
            <TestContext.Provider value={{
                testValue,
                toggleValue: this.toggleValue
            }}>
                {children}
            </TestContext.Provider >
        )
    }
}
