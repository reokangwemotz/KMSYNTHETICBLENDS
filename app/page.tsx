'use client';

import { useMemo, useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  soldOut?: boolean;
};

type CartItem = Product & {
  quantity: number;
};

const products: Product[] = [
  {
    id: 2,
    name: 'Blonde Water Weave 26–30 Inches',
    price: 580,
    image: '/product-2.jpeg',
    category: 'Water Weave',
    description: 'Beautiful blonde water weave.',
  },
  {
    id: 3,
    name: 'Orange Water Weave',
    price: 450,
    image: '/product-3.jpeg',
    category: 'Water Weave',
    description: 'Bright and stylish water weave.',
  },
  {
    id: 4,
    name: 'Black Water Weave',
    price: 450,
    image: '/product-4.jpeg',
    category: 'Water Weave',
    description: 'Classic black water weave.',
  },
  {
    id: 5,
    name: 'Burgundy Water Weave',
    price: 450,
    image: '/product-5.jpeg',
    category: 'Water Weave',
    description: 'Rich burgundy water weave.',
  },
  {
    id: 6,
    name: 'Body Wave',
    price: 450,
    image: '/product-6.jpeg',
    category: 'Body Wave',
    description: 'Soft and elegant body wave.',
  },
  {
    id: 7,
    name: 'Straight Weave',
    price: 450,
    image: '/product-7.jpeg',
    category: 'Straight',
    description: 'Smooth straight weave.',
  },
  {
    id: 8,
    name: 'Curly Weave',
    price: 450,
    image: '/product-8.jpeg',
    category: 'Curly',
    description: 'Beautiful curly texture.',
  },
  {
    id: 9,
    name: 'Floral Swimsuit',
    price: 350,
    image: '/product-9.jpeg',
    category: 'Other',
    description: 'Floral swimsuit.',
    soldOut: true,
  },
  {
    id: 10,
    name: 'Deep Wave',
    price: 500,
    image: '/product-10.jpeg',
    category: 'Deep Wave',
    description: 'Luxury deep wave texture.',
  },
  {
    id: 11,
    name: 'Loose Wave',
    price: 500,
    image: '/product-11.jpeg',
    category: 'Loose Wave',
    description: 'Soft loose wave style.',
  },
  {
    id: 12,
    name: 'Jerry Curl',
    price: 500,
    image: '/product-12.jpeg',
    category: 'Curly',
    description: 'Full and bouncy curls.',
  },
  {
    id: 13,
    name: 'Piano Colour Weave',
    price: 550,
    image: '/product-13.jpeg',
    category: 'Colour',
    description: 'Stylish piano colour weave.',
  },
  {
    id: 14,
    name: 'Ombre Weave',
    price: 550,
    image: '/product-14.jpeg',
    category: 'Colour',
    description: 'Beautiful ombre colour.',
  },
  {
    id: 15,
    name: 'Human Blend Straight',
    price: 600,
    image: '/product-15.jpeg',
    category: 'Human Blend',
    description: 'Premium human blend straight hair.',
  },
  {
    id: 16,
    name: 'Cream Bikini & Crochet Set',
    price: 350,
    image: '/product-16.jpeg',
    category: 'Other',
    description: 'Cream bikini and crochet set.',
    soldOut: true,
  },
  {
    id: 17,
    name: 'Human Blend Body Wave',
    price: 650,
    image: '/product-17.jpeg',
    category: 'Human Blend',
    description: 'Premium human blend body wave.',
  },
  {
    id: 18,
    name: 'Human Blend Water Wave',
    price: 650,
    image: '/product-18.jpeg',
    category: 'Human Blend',
    description: 'Premium human blend water wave.',
  },
  {
    id: 19,
    name: 'Human Blend Deep Wave',
    price: 680,
    image: '/product-19.jpeg',
    category: 'Human Blend',
    description: 'Premium human blend deep wave.',
  },
  {
    id: 20,
    name: 'Short Bob Weave',
    price: 400,
    image: '/product-20.jpeg',
    category: 'Bob',
    description: 'Elegant short bob style.',
  },
  {
    id: 21,
    name: 'Long Straight Weave',
    price: 550,
    image: '/product-21.jpeg',
    category: 'Straight',
    description: 'Long sleek straight weave.',
  },
  {
    id: 22,
    name: 'Curly Bob',
    price: 450,
    image: '/product-22.jpeg',
    category: 'Bob',
    description: 'Beautiful curly bob.',
  },
  {
    id: 23,
    name: 'Water Wave Bob',
    price: 450,
    image: '/product-23.jpeg',
    category: 'Bob',
    description: 'Stylish water wave bob.',
  },
  {
    id: 25,
    name: 'Luxury Weave',
    price: 200,
    image: '/product-25.jpeg',
    category: 'Luxury',
    description: 'Affordable luxury weave.',
  },
  {
    id: 26,
    name: 'Premium Weave',
    price: 150,
    image: '/product-26.jpeg',
    category: 'Premium',
    description: 'Premium quality weave.',
  },
  {
    id: 27,
    name: 'Everyday Weave',
    price: 140,
    image: '/product-27.jpeg',
    category: 'Everyday',
    description: 'Beautiful everyday weave.',
  },
  {
    id: 30,
    name: 'Luxury Human Blend',
    price: 700,
    image: '/product-30.jpeg',
    category: 'Human Blend',
    description: 'Premium luxury human blend.',
  },
  {
    id: 31,
    name: 'Premium Curly Weave',
    price: 600,
    image: '/product-31.jpeg',
    category: 'Curly',
    description: 'Premium curly texture.',
  },
  {
    id: 35,
    name: 'Luxury Straight Weave',
    price: 650,
    image: '/product-35.jpeg',
    category: 'Straight',
    description: 'Luxury straight weave.',
  },
  {
    id: 37,
    name: 'Premium Water Weave',
    price: 600,
    image: '/product-37.jpeg',
    category: 'Water Weave',
    description: 'Premium water weave.',
  },
];

const rules = [
  'Please know your hair. There will be no refunds for faults as a result of you not checking the hair you ordered.',
  'Orders only get processed after payment.',
  'It takes 5–6 working days to process orders.',
  'Lay-by is accepted; minimum deposit is R200.',
  'No refunds unless the fault is from our side.',
  'No hand deliveries.',
  'No cash on delivery.',
  'Make sure to provide correct delivery details and information.',
];

const deliveryOptions = [
  {
    courier: 'Paxi',
    service: 'Standard',
    time: '3–5 working days',
    price: 120,
  },
  {
    courier: 'Paxi',
    service: 'Economy',
    time: '7–9 working days',
    price: 70,
  },
  {
    courier: 'The Courier Guy',
    service: 'Express',
    time: '1 day',
    price: 125,
  },
  {
    courier: 'The Courier Guy',
    service: 'Same Day',
    time: 'Same day — JHB, PTA, CPT & DBN metro cities',
    price: 140,
  },
];

const categories = [
  'All',
  'Water Weave',
  'Body Wave',
  'Straight',
  'Curly',
  'Deep Wave',
  'Loose Wave',
  'Human Blend',
  'Colour',
  'Bob',
  'Luxury',
  'Premium',
  'Everyday',
  'Other',
];

function money(value: number) {
  return `R${value.toLocaleString('en-ZA')}`;
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [cartOpen, setCartOpen] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(true);
  const [acceptedRules, setAcceptedRules] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === 'All' || product.category === category;

      const searchText = search.toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function acceptRules() {
    setAcceptedRules(true);
    setRulesOpen(false);
  }

  function addToCart(product: Product) {
    if (!acceptedRules || product.soldOut) {
      return;
    }

    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    setCartOpen(true);
  }

  function removeFromCart(productId: number) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  function checkout() {
    alert(
      'Checkout is being prepared. Your payment gateway will be connected here once the payment provider is selected.'
    );
  }

  return (
    <main>
      <header className="siteHeader">
        <div className="headerInner">
          <div className="brand">
            <div className="brandMark">KM</div>

            <div>
              <h1>KM Synthetics &amp; Human Blends</h1>
              <p>Luxury Hair • Nationwide Delivery</p>
            </div>
          </div>

          <button
            className="cartButton"
            onClick={() => setCartOpen(true)}
          >
            Bag ({cartCount})
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">KM SYNTHETICS &amp; HUMAN BLENDS</p>

          <h2>
            Luxury hair made
            <br />
            for your style.
          </h2>

          <p>
            Discover beautiful synthetic and human blend weaves
            available for delivery nationwide.
          </p>

          <button
            className="heroButton"
            onClick={() =>
              document
                .getElementById('shop')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Shop Collection
          </button>
        </div>
      </section>

      <section className="shop" id="shop">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow pink">OUR COLLECTION</p>
            <h2>Find your perfect look</h2>
          </div>

          <p>
            Browse our collection of quality synthetic and human
            blend hair.
          </p>
        </div>

        <div className="controls">
          <input
            type="search"
            placeholder="Search hair..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <div className="filters">
            {categories.map((item) => (
              <button
                key={item}
                className={`filter ${
                  category === item ? 'active' : ''
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="productGrid">
          {filteredProducts.map((product) => (
            <article className="productCard" key={product.id}>
              <div className="productImageWrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="productImage"
                />

                {product.soldOut && (
                  <div className="soldBadge">SOLD</div>
                )}
              </div>

              <div className="productInfo">
                <p className="productCategory">
                  {product.category}
                </p>

                <h3>{product.name}</h3>

                <p className="productDescription">
                  {product.description}
                </p>

                <div className="productBottom">
                  <strong>{money(product.price)}</strong>

                  <button
                    className="addButton"
                    onClick={() => addToCart(product)}
                    disabled={product.soldOut || !acceptedRules}
                  >
                    {product.soldOut ? 'Sold Out' : 'Add to Bag'}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="emptySearch">
            <h3>No products found</h3>
            <p>Try another search or category.</p>
          </div>
        )}
      </section>

      <section className="contactSection">
        <div>
          <p className="eyebrow pink">GET IN TOUCH</p>
          <h2>KM Synthetics &amp; Human Blends</h2>
          <p>
            For enquiries, order assistance and general questions,
            please contact us.
          </p>
        </div>

        <div className="contactDetails">
          <a href="mailto:kmsynthetichumanblends@gmail.com">
            kmsynthetichumanblends@gmail.com
          </a>

          <a href="tel:0785314333">078 531 4333</a>

          <span>Nationwide delivery available</span>
        </div>
      </section>

      <footer className="siteFooter">
        <p>
          © {new Date().getFullYear()} KM Synthetics &amp; Human
          Blends. All rights reserved.
        </p>
      </footer>

      {cartOpen && (
        <div className="cartOverlay">
          <div
            className="cartBackdrop"
            onClick={() => setCartOpen(false)}
          />

          <aside className="cartDrawer">
            <div className="cartHeader">
              <div>
                <p className="eyebrow pink">YOUR BAG</p>
                <h2>Your Order</h2>
              </div>

              <button
                className="closeButton"
                onClick={() => setCartOpen(false)}
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="emptyCart">
                <h3>Your bag is empty</h3>
                <p>
                  Add something beautiful from our collection.
                </p>

                <button
                  className="checkout"
                  onClick={() => setCartOpen(false)}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cartItems">
                  {cart.map((item) => (
                    <div className="cartItem" key={item.id}>
                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cartItemInfo">
                        <h3>{item.name}</h3>

                        <p>{money(item.price)}</p>

                        <div className="quantity">
                          <span>Qty: {item.quantity}</span>

                          <button
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                          >
                            Remove one
                          </button>
                        </div>
                      </div>

                      <strong>
                        {money(item.price * item.quantity)}
                      </strong>
                    </div>
                  ))}
                </div>

                <div className="cartBottom">
                  <div className="total">
                    <span>Subtotal</span>
                    <strong>{money(subtotal)}</strong>
                  </div>

                  <p className="note">
                    Delivery is calculated according to the courier
                    option selected.
                  </p>

                  <button
                    className="checkout"
                    onClick={checkout}
                  >
                    Continue to payment
                  </button>

                  <button
                    className="clearCart"
                    onClick={clearCart}
                  >
                    Clear bag
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {rulesOpen && (
        <div className="rulesOverlay">
          <section
            className="rulesModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="rules-title"
          >
            <div className="rulesRibbon">
              PLEASE READ BEFORE ORDERING
            </div>

            <div className="rulesLogo">KM</div>

            <p className="eyebrow pink">
              KM SYNTHETICS &amp; HUMAN BLENDS
            </p>

            <h2 id="rules-title">
              Before you place an order...
            </h2>

            <p className="rulesIntro">
              Please read our rules and delivery information
              carefully. You must agree to these terms before
              adding products to your bag or completing a purchase.
            </p>

            <div className="rulesList">
              {rules.map((rule, index) => (
                <div className="rule" key={rule}>
                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <p>{rule}</p>
                </div>
              ))}
            </div>

            <div className="rulesDelivery">
              <strong>Delivery options</strong>

              <p>
                Paxi: R120 (3–5 working days) or R70 (7–9
                working days). The Courier Guy: R125 (1 day), or
                R140 same-day delivery in JHB, PTA, CPT &amp; DBN
                metro cities.
              </p>
            </div>

            <button
              className="agreeBtn"
              onClick={acceptRules}
            >
              I Agree to the Rules
            </button>

            <p className="rulesFooter">
              You can continue browsing without agreeing, but
              ordering and checkout remain locked.
            </p>
          </section>
        </div>
      )}
    </main>
  );
}




