import React, { createContext, PureComponent } from 'react';

const ThemeContext = createContext();

export const ThemeConsumer = ThemeContext.Consumer;

export class ThemeProvider extends PureComponent {
  state = {
    theme: 'dark',
  };

  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === 'dark' ? 'light' : 'dark',
    }));
  };

  render() {
    const { children } = this.props;
    const { theme } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: this.toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}
