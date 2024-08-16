package com.MoodArts.service;

import com.MoodArts.exception.CartItemException;
import com.MoodArts.exception.UserException;
import com.MoodArts.modal.Cart;
import com.MoodArts.modal.CartItem;
import com.MoodArts.modal.Product;

public interface CartItemService {
	
	public CartItem createCartItem(CartItem cartItem);
	
	public CartItem updateCartItem(Long userId, Long id,CartItem cartItem) throws CartItemException, UserException;
	
	public CartItem isCartItemExist(Cart cart,Product product,String size, Long userId);
	
	public void removeCartItem(Long userId,Long cartItemId) throws CartItemException, UserException;
	
	public CartItem findCartItemById(Long cartItemId) throws CartItemException;
	
}
