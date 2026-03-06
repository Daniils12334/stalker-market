import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = ({ isOpen, onClose, onCheckout }) => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (!isOpen) return null;

  const handleCheckout = () => {
    onClose();      // закрыть корзину
    onCheckout();   // открыть модалку оплаты
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content cart-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    {/* Отображаем версию, если она есть (для SEA и GPT) */}
                    {item.version && <p className="item-version">{item.version}</p>}
                    <p>{item.price} x {item.quantity}</p>
                  </div>
                  <div className="cart-item-actions">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    />
                    <button onClick={() => removeFromCart(item.id)} className="btn-small">Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <strong>Total: ${totalPrice}</strong>
            </div>
            <div className="cart-actions">
              <button className="btn btn-primary" onClick={clearCart}>Clear Cart</button>
              <button className="btn btn-secondary" onClick={handleCheckout}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;