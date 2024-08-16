package com.MoodArts.service;

import com.MoodArts.exception.ProductException;
import com.MoodArts.modal.Cart;
import com.MoodArts.modal.CartItem;
import com.MoodArts.modal.User;
import com.MoodArts.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public CartItem addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
