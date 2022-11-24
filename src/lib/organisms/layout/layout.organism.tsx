import TopBarMolecule from '../../molecules/top-bar/top-bar.molecule';
import Head from 'next/head';

type PropsLayoutOrganism = {
  title: string;
  metaName: string;
  content: string;
  children: React.ReactNode;
};

export default function LayoutOrganism({ title, metaName, content, children }: PropsLayoutOrganism): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={metaName} content={content} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TopBarMolecule title={title} />
      <main className='min-h-screen w-[90%] mx-auto pt-[90px] pb-[30px] md:w-[70%] lg:w-[900px] xl:w-[1200px]'>
        {children}
      </main>
    </>
  );
}
