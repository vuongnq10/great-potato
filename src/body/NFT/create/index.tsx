import { Formik } from 'formik';
import { useMutation } from '@tanstack/react-query';

import { createContact } from 'api/metamask';

type UIContractType = {
  tokenName: string,
  tokenSymbol: string,
  error: string,
}
const Index = () => {
  const initialValue: UIContractType = { tokenName: "", tokenSymbol: "", error: "" };
  const { data: resp, mutate, status } = useMutation({
    mutationKey: ['createContract'],
    mutationFn: async (input: UIContractType) => await createContact({
      name: input.tokenName, symbol: input.tokenSymbol,
      empty: ''
    }),
  });

  return (
    <>
      <h3 className="resume-title">Create Your Contract</h3>
      <div className="nft-contract">
        <Formik
          initialValues={initialValue}
          validate={values => {
            if (!values.tokenName || !values.tokenSymbol)
              return { empty: "Please input Token's Name & Token's Symbol" }
          }}
          onSubmit={values => {
            mutate(values)
          }}
        >
          {({ errors, handleSubmit, handleChange }: any) => (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-8 form-group">
                  <input
                    name="tokenName"
                    className="form-control"
                    placeholder="Token's Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    name="tokenSymbol"
                    className="form-control"
                    placeholder="Token's symbol"
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
                  {`Congrats, ${resp} is your contract address.`}
                </div>
              )}
              <div className="text-center">
                <button type="submit">
                  {status === 'pending' && <div className="loading" />}
                  Send Message
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Index;

