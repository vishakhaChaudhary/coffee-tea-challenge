/* import packages */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from 'next/document';

/* import component */
import { Header } from '../layout/header';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <Header {...this.props} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
