import DefaultLayout from '@/components/layouts/defaultLayout';
import AdminLayout from '@/components/layouts/AdminLayout';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  const Layout = (Component as any).layout === 'admin'? AdminLayout:DefaultLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
