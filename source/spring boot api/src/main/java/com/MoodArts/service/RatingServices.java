package com.MoodArts.service;

import java.util.List;

import com.MoodArts.exception.ProductException;
import com.MoodArts.modal.Rating;
import com.MoodArts.modal.User;
import com.MoodArts.request.RatingRequest;

public interface RatingServices {
	
	public Rating createRating(RatingRequest req,User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);

}
