import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import React from 'react';
import PageContainer from '../components/Container';

type ExtraCb = {
  key: string;
  callback: () => Promise<any>;
};

export default function PageHoc(
  Component: (props: any) => JSX.Element,
  extraCbs?: ExtraCb[],
  log = false,
) {
  if (!Component) {
    throw new Error('Could not instantiate page');
  }
  /* eslint react/display-name: off */
  return async ({
    params: { lang },
  }: {
    params: { lang: Locale };
  }): Promise<JSX.Element> => {
    const dictionary = await getDictionary(lang);

    const props: { [k: string]: any } = {
      dictionary,
      lang,
    };

    if (extraCbs && extraCbs.length) {
    //   console.log('called');
      for (let i = 0; i < extraCbs.length; i++) {
        const extraProps = await extraCbs[i].callback();
        props[extraCbs[i].key] = extraProps;
      }
    }

    if (log) {
      console.log('props', props);
    }

    return (
      <PageContainer>
        <Component {...props} />
      </PageContainer>
    );
  };
}
