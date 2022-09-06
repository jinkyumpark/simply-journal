package com.jinkyumpark.occurencejournal.post;

import com.jinkyumpark.occurencejournal.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllByMemberAndPostDateBetween(Member member, LocalDateTime startDate, LocalDateTime endDate);
}
