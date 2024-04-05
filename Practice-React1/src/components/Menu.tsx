export default function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "California Burrito",
      image:
        "https://136667925.cdn6.editmysite.com/uploads/1/3/6/6/136667925/s962146695723897819_p235_i4_w1004.jpeg",
      ingredients: ["Carne Asada", "French Fries", "Guacamole", "Sour Cream"],
      price: 12.99,
    },

    {
      id: 2,
      name: "Bean and Cheese Burrito",
      image: "",
      ingredients: ["Refried Beans", "Melted Cheese"],
      price: 7.99,
    },

    {
      id: 3,
      name: "Tacos El Dorado",
      image: "",
      ingredients: [
        "Fried Corn Tortilla",
        "Shredded Beef",
        "Guacamole",
        "Pico De Gallo",
      ],
      price: 11.99,
    },
    {
      id: 4,
      name: "Fish Tacos",
      image: "",
      ingredients: ["Talapia", "Fresh Cabbage", "Mango Habenaro Salsa"],
      price: 10.99,
    },
    {
      id: 5,
      name: "Ceviche",
      image: "",
      ingredients: ["Shrimp", "Pico De Gallo", "Lime", "Avocado", "Jalepeno"],
      price: 13.99,
    },
    {
      id: 6,
      name: "Tres Leche Cake",
      image: "",
      ingredients: ["Milk", "Cream", "Strawberries"],
      price: 10.99,
    },
  ];

  const menuItemElements = menuItems.map((item) => {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-3">
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                Ingredients: {item.ingredients.join(", ")}
              </p>
              <a href="#" className="btn btn-primary">
                {item.price}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body container">{menuItemElements}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
