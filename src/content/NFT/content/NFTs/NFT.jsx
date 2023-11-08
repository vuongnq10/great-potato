const domain = "https://ipfs.io/ipfs/";
const protocol = "ipfs://";

const Index = ({ rawMetadata, contract }) => {
  const { name, image, description, attributes } = rawMetadata || {}
  return (
    <div className="nft-thumbnail">
      <div className="img-thumb">
        <img src={image?.replace(protocol, domain)} alt={name} />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="collection">{contract?.name}</div>
      </div>
    </div>
  )
};

export default Index;
