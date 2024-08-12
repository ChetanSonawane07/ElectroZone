package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.User;
import com.app.entities.Wishlist;

public interface WishlistDao extends JpaRepository<Wishlist, Long>{
	List<Wishlist> findByUser(User u);
}
