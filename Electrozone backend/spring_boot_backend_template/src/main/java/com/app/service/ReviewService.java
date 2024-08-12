package com.app.service;

import java.util.List;

import com.app.dto.ReviewDTO;
import com.app.entities.Review;

public interface ReviewService {
    Review postReview(String description, int rating, Long productId, Long userId);
    List<ReviewDTO> getReviewsByProductId(Long productId);
}
