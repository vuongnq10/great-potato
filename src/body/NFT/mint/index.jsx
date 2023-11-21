import { Formik } from 'formik';
import { useMutation } from '@tanstack/react-query';

import { mint } from 'api/metamask';

const Index = () => {

  const { data: resp, mutate, status } = useMutation({
    mutationKey: ['mintNFT'],
    mutationFn: async input => await mint(input),
  });

  return (
    <>
      <h3 className="resume-title">Mint Your NFT</h3>
      <Formik
        initialValues={{ contractAdress: "", uri: "" }}
        validate={values => {
          if (!values.contractAdress || !values.uri)
            return { empty: "Please input Contract's address & URI" }
        }}
        onSubmit={values => {
          mutate(values)
        }}
      >
        {({ errors, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div className="nft-contract contact">
              <div className="row">
                <div className="col-md-12 form-group">
                  <input
                    name="contractAdress"
                    className="form-control"
                    placeholder="Contract's address"
                    onChange={handleChange}
                  />
                </div>
                <div style={{ height: '12px' }} />
                <div className="col-md-12 form-group">
                  <input
                    name="uri"
                    className="form-control"
                    placeholder="NFT's URI"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {(!!errors.empty || status === 'error') && (
                <div className="error-message">
                  {errors.empty || "Ops! Something went wrong"}
                </div>
              )}
              {resp && (
                <div className="sent-message">
                  {`Congrats, ${resp} is your transaction hash.`}
                </div>
              )}
              <div className="text-center">
                <button type="submit">
                  {status === 'pending' && <div className="loading" />}
                  Mint
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Index;