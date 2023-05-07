import React from 'react';
import Document, { DocumentContext, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    try {
      const originalRenderPage = ctx.renderPage;
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <React.Fragment key="init">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
