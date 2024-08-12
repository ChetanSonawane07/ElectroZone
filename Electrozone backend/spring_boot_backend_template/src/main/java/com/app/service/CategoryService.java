package com.app.service;

import java.io.IOException;
import java.util.List;


import com.app.dto.ApiResponse;
import com.app.dto.CategoryDTO;


public interface CategoryService {
	List<CategoryDTO> getAllCategories();

	ApiResponse deleteCategoryById(Long id);

	CategoryDTO getCategoryByTitle(String title);


	CategoryDTO addCategory(CategoryDTO dto) throws IOException;

	CategoryDTO updateCategory(Long categoryId, CategoryDTO dto) throws IOException;


}
