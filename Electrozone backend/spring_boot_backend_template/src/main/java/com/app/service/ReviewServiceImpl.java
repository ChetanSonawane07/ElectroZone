package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ProductDao;
import com.app.dao.ReviewDao;
import com.app.dao.UserDao;
import com.app.dto.ReviewDTO;
import com.app.entities.Product;
import com.app.entities.Review;
import com.app.entities.User;
import com.app.custom_exceptions.ResourceNotFoundException;

@Service
@Transactional
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewDao reviewDao;

    @Autowired
    private ProductDao productDao;

    @Autowired
    private UserDao userDao;

    @Override
    public Review postReview(String description, int rating, Long productId, Long userId) {
        Product product = productDao.findById(productId)
            .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        
        User user = userDao.findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        
        Review review = new Review();
        review.setDescription(description);
        review.setRating(rating);
        review.setProduct(product);
        review.setUser(user);
        return reviewDao.save(review);
    }

    @Override
    public List<ReviewDTO> getReviewsByProductId(Long productId) {
        Product product = productDao.findById(productId)
            .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        List<Review> reviews = reviewDao.findByProduct(product);
        return reviews.stream()
                      .map(review -> new ReviewDTO(review.getDescription(), review.getRating()))
                      .collect(Collectors.toList());
    }
}
