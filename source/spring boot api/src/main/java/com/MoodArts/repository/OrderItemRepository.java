package com.MoodArts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MoodArts.modal.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
