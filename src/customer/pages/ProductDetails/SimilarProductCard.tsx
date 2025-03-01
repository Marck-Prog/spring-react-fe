const SimilarProductCard = () => {
  return (
    <div>
      <div className="group px-4 pt-4 relative">
        <div className="card">
          <img
            className="card-media object-top rounded-sm"
            src="https://threadheads.com/cdn/shop/files/Natural-Hoodie-Women-Front_07f0aff3-919b-4c4e-a605-877066d4d2eb.jpg?v=1724203427&width=700"
            alt=""
          />
        </div>
        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>Penshoppe</h1>
            <p>Lactose</p>
          </div>

          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800">₱ 149.00</span>
            <span className="thin-line-through text-gray-400">₱ 250.00</span>
            <span className="primary-text font-semibold">60%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;
