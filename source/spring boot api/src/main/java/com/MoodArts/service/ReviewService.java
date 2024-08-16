package com.MoodArts.service;

import java.util.List;

import com.MoodArts.exception.ProductException;
import com.MoodArts.modal.Review;
import com.MoodArts.modal.User;
import com.MoodArts.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req,User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
