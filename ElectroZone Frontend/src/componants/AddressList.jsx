import Address from "./Address";

function AddressList({ addresses }) {
  return (
    <div>
      {addresses.length > 0 ? (
        addresses.map((address, index) => (
          <Address key={index} address={address} />
        ))
      ) : (
        <p>No saved addresses found.</p>
      )}
    </div>
  );
}

export default AddressList;
