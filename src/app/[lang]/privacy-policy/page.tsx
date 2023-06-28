import PageHoc from '../hoc/page-hoc';

const PrivacyPolicy = ({ dictionary }: any) => {
  return <h1>{dictionary.header.privacyPolicy}</h1>;
};

export default PageHoc(PrivacyPolicy);
