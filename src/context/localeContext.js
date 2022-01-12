import React, { createContext, PureComponent } from 'react';

const LocaleContext = createContext();

export const LocaleConsumer = LocaleContext.Consumer;

export class LocaleProvider extends PureComponent {
  state = {
    locale: 'en',
  };

  toggleLocale = () => {
    this.setState(({ locale }) => ({
      locale: locale === 'en' ? 'fr' : 'en',
    }));
  };

  render() {
    const { children } = this.props;
    const { locale } = this.state;
    return (
      <LocaleContext.Provider
        value={{
          locale,
          toggleLocale: this.toggleLocale,
        }}
      >
        {children}
      </LocaleContext.Provider>
    );
  }
}
